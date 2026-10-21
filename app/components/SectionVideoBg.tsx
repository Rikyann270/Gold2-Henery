"use client";

import { useEffect, useRef } from "react";

interface SectionVideoBgProps {
  src: string;
  fallbackSrc?: string;
  blur?: number; // blur in pixels
}

export default function SectionVideoBg({
  src,
  fallbackSrc,
  blur = 6,
}: SectionVideoBgProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    let isVisible = false;

    // Play video safely
    const safePlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented or interrupted, silence error
        });
      }
    };

    // Pause video safely
    const safePause = () => {
      if (!video.paused) {
        video.pause();
      }
    };

    // Observe when the section is in view/focus
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && document.visibilityState === "visible") {
          safePlay();
        } else {
          safePause();
        }
      },
      {
        threshold: 0.15, // triggered when at least 15% is visible
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(container);

    // Also pause when the tab/window is hidden or loses focus
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && isVisible) {
        safePlay();
      } else {
        safePause();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div ref={containerRef} className="process-video-bg-wrap" aria-hidden="true">
      <video
        ref={videoRef}
        className="process-video-bg"
        loop
        muted
        playsInline
        preload="auto"
        style={{
          filter: `blur(${blur}px)`,
        }}
      >
        <source src={src} type="video/mp4" />
        {fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
      </video>
      <div className="process-video-overlay" />
    </div>
  );
}
