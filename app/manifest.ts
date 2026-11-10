import type { MetadataRoute } from "next";
import { SITE } from "./data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — ${SITE.legalName}`,
    short_name: "Kibali Gold",
    description: SITE.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#0b0704",
    theme_color: "#D8A12E",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

