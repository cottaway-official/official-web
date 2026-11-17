import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cottaway Private Limited",
    short_name: "Cottaway",
    description: "Practical software for ambitious businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#111513",
    theme_color: "#111513",
    lang: "en-IN",
  };
}
