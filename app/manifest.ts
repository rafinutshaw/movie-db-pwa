import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mobie DB",
    short_name: "Mobie DB",
    description: "All your movies in one place",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "72x72 96x96 128x128 256x256",
      },
      {
        src: "/favicon.svg",
        sizes: "256x256",
      },
      {
        src: "/favicon-96x96.svg",
        sizes: "96x96",
      },
    ],
  };
}
