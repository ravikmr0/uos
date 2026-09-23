import { createFileRoute } from "@tanstack/react-router";
import { BoardProfilePage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/board-profile")({
  head: () => ({ meta: [
    { title: "Board Profile — Uttarakhand Open School" },
    { name: "description", content: "Governing authorities and committee structure of UOS." },
    { property: "og:title", content: "Board Profile — Uttarakhand Open School" },
    { property: "og:description", content: "Governing authorities and committee structure of UOS." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: BoardProfilePage,
});
