import { createFileRoute } from "@tanstack/react-router";
import { GenericPage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/results")({
  head: () => ({ meta: [
    { title: "Exam Results — Uttarakhand Open School" }, { name: "description", content: "UOS High School and Intermediate examination results." },
    { property: "og:title", content: "Exam Results — Uttarakhand Open School" }, { property: "og:description", content: "UOS High School and Intermediate examination results." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <GenericPage kind="results" />,
});
