import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { BookOpen, BriefcaseBusiness, CircleCheck, GraduationCap, Layers3, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { StudentLinks } from "@/components/uos/page-frame";
import learnersImage from "@/assets/uos-learners.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Uttarakhand Open School, Dehradun — Official Website" },
    { name: "description", content: "Official information on UOS admissions, courses, examinations, study centres and student services." },
    { property: "og:title", content: "Uttarakhand Open School, Dehradun" },
    { property: "og:description", content: "Open and flexible secondary education for learners across Uttarakhand." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="relative min-h-[34rem] overflow-hidden bg-primary text-primary-foreground">
        <img src={learnersImage} width={1600} height={900} alt="UOS learners studying with a teacher in Uttarakhand" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="site-container relative flex min-h-[34rem] items-center py-14">
          <div className="max-w-3xl"><p className="eyebrow">Open learning • Recognised education</p><h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.08] sm:text-6xl">Education that reaches every learner.</h1><p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/85 sm:text-lg">Providing secondary and senior secondary education through open distance learning to SC/ST communities and socially, educationally and economically disadvantaged groups.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild variant="saffron"><Link to="/courses">Explore courses</Link></Button><Button asChild variant="outline" className="border-primary-foreground/60 bg-primary/20 text-primary-foreground hover:bg-primary-foreground/10"><Link to="/about">About UOS</Link></Button></div></div>
        </div>
      </section>
      <section className="bg-saffron text-saffron-foreground"><div className="site-container grid gap-5 py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"><div className="min-w-0"><p className="text-xs font-bold uppercase">Admissions Open</p><h2 className="font-display text-2xl font-extrabold">Session October 2026</h2></div><Button asChild><Link to="/downloads">Download Date Sheet</Link></Button></div></section>
      <section className="site-container grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:py-16"><div className="min-w-0"><div><p className="eyebrow">Learning pathways</p><h2 className="mt-2 font-display text-3xl font-bold text-primary">Programmes designed around you</h2></div><div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Feature icon={<CircleCheck/>} title="Free Education for Needy Students">Free schooling up to senior secondary level supports learners from disadvantaged groups.</Feature>
        <Feature icon={<BookOpen/>} title="High School Level (Class X)">Eligible learners must be 14 years of age as on 1 August of the admission year.</Feature>
        <Feature icon={<Layers3/>} title="Dual Enrollment & Part Admission">Study while in regular school or after certification. Part admission allows up to four subjects and a mark sheet only.</Feature>
        <Feature icon={<GraduationCap/>} title="Intermediate Level (Class XII)">Applicants must be 16 years of age as on 1 August and qualify the prescribed entrance test.</Feature>
      </div></div><StudentLinks /></section>
      <section className="border-y border-border bg-card"><div className="site-container grid gap-10 py-12 md:grid-cols-2 md:py-16"><article><span className="icon-box"><ShieldCheck/></span><h2 className="mt-5 font-display text-2xl font-bold text-primary">Validity of Academic Certificates</h2><p className="mt-3 leading-7 text-muted-foreground">Board certificates are registered for government employment and further education in accordance with Board statutes and applicable requirements.</p></article><article><span className="icon-box"><BriefcaseBusiness/></span><h2 className="mt-5 font-display text-2xl font-bold text-primary">Vocational Education</h2><p className="mt-3 leading-7 text-muted-foreground">Explore the Workshop on Skill Development & Vocational Training Initiatives in Uttarakhand by UOS.</p><Button asChild variant="ghost" className="mt-3 px-0 text-primary"><Link to="/vocational-education">View initiative <span aria-hidden="true">›</span></Link></Button></article></div></section>
    </main>
  );
}

function Feature({icon,title,children}:{icon:ReactNode;title:string;children:ReactNode}) { return <article className="border-t-4 border-saffron bg-card p-6 shadow-sm"><span className="icon-box">{icon}</span><h3 className="mt-5 font-display text-xl font-bold text-primary">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{children}</p></article> }
