import { createFileRoute } from "@tanstack/react-router";
import { CoursesPage } from "@/components/uos/content-pages";

export const Route = createFileRoute("/courses")({
  head: () => ({ meta: [
    { title: "Courses — Uttarakhand Open School" },
    { name: "description", content: "High School and Intermediate programmes and eligibility." },
    { property: "og:title", content: "Courses — Uttarakhand Open School" },
    { property: "og:description", content: "High School and Intermediate programmes and eligibility." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CoursesPage,
});
