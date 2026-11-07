"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Lightformer,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";

/** Drop your model here: public/models/gold-bar.glb */
export const GOLD_BAR_MODEL_URL = "/models/gold-bar.glb";

/** kg (1 – 10,000) -> visual scale, eased on a log curve so the whole range reads well. */
function scaleForKg(kg: number) {
  return 0.72 + 0.6 * (Math.log10(Math.max(1, kg)) / 4);
}

/** Procedural placeholder bar (trapezoid ingot) used until the GLB is provided. */
function ProceduralBar() {
  const geometry = useMemo(() => {
    const bottom = 1.25;
    const top = 0.95;
    const h = 0.55;
    const shape = new THREE.Shape();
    shape.moveTo(-bottom, -h / 2);
    shape.lineTo(bottom, -h / 2);
    shape.lineTo(top, h / 2);
    shape.lineTo(-top, h / 2);
    shape.closePath();
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 1.05,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 6,
    });
    geo.center();
    return geo;
  }, []);

  return (
    <mesh geometry={geometry} castShadow>
      <meshStandardMaterial
        color="#e0aa3e"
        metalness={1}
        roughness={0.2}
        envMapIntensity={1.6}
      />
    </mesh>
  );
}

/** Loads the user's GLB, centres it and normalises its size. */
function GlbBar() {
  const { scene } = useGLTF(GOLD_BAR_MODEL_URL);
  const prepared = useMemo(() => {
    const clone = scene.clone(true);
    const box = new THREE.Box3().setFromObject(clone);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const longest = Math.max(size.x, size.y, size.z) || 1;
    const k = 2.6 / longest;
    clone.position.sub(center);
    const wrapper = new THREE.Group();
    wrapper.add(clone);
    wrapper.scale.setScalar(k);
    return wrapper;
  }, [scene]);

  return <primitive object={prepared} />;
}

function Bar({ kg, useGlb }: { kg: number; useGlb: boolean }) {
  const group = useRef<THREE.Group>(null);
  const target = scaleForKg(kg);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const s = THREE.MathUtils.damp(g.scale.x, target, 4, delta);
    g.scale.setScalar(s);
    g.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
  });

  return (
    <group ref={group}>
      {useGlb ? (
        <Suspense fallback={<ProceduralBar />}>
          <GlbBar />
        </Suspense>
      ) : (
        <ProceduralBar />
      )}
    </group>
  );
}

export default function GoldBarViewer({ kg }: { kg: number }) {
  const [useGlb, setUseGlb] = useState(false);

  // Only try the GLB if the file actually exists.
  useEffect(() => {
    let cancelled = false;
    fetch(GOLD_BAR_MODEL_URL, { method: "HEAD" })
      .then((res) => {
        if (!cancelled) setUseGlb(res.ok);
      })
      .catch(() => {
        if (!cancelled) setUseGlb(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ position: [3.4, 1.7, 4.4], fov: 32 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[4, 5, 3]} intensity={1.4} castShadow />

      {/* Offline studio lighting (no remote HDRI) */}
      <Environment resolution={256} background={false}>
        <Lightformer form="rect" intensity={4} position={[0, 4, -4]} scale={[10, 3, 1]} />
        <Lightformer form="rect" intensity={2.5} position={[-5, 1, 2]} scale={[2, 6, 1]} color="#ffd9a0" />
        <Lightformer form="rect" intensity={2.5} position={[5, 1, 2]} scale={[2, 6, 1]} color="#fff2dc" />
        <Lightformer form="ring" intensity={2} position={[0, -2, 4]} scale={4} color="#ffcf75" />
      </Environment>

      <Bar kg={kg} useGlb={useGlb} />

      <ContactShadows
        position={[0, -1.1, 0]}
        opacity={0.55}
        scale={9}
        blur={2.8}
        far={3}
        color="#000000"
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.1}
        minPolarAngle={Math.PI / 3.2}
        maxPolarAngle={Math.PI / 2.1}
      />
    </Canvas>
  );
}

