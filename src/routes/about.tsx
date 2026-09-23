import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About UOS — Uttarakhand Open School" },
    { name: "description", content: "Mission, vision and inclusive open schooling in Uttarakhand." },
    { property: "og:title", content: "About UOS — Uttarakhand Open School" },
    { property: "og:description", content: "Mission, vision and inclusive open schooling in Uttarakhand." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});
