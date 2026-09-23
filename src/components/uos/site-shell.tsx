import { Link } from "@tanstack/react-router";
import { Menu, X, GraduationCap, Phone, Mail } from "lucide-react";
import { useState, type ReactNode } from "react";
import { primaryNav } from "./site-data";
import { Button } from "@/components/ui/button";

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen bg-background text-foreground">
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <div className="bg-utility text-utility-foreground">
      <div className="site-container flex min-h-9 items-center justify-between gap-4 text-xs">
        <span className="hidden sm:inline">Government-recognised open schooling • Dehradun, Uttarakhand</span>
        <nav className="ml-auto flex items-center gap-4" aria-label="Utility navigation">
          <Link to="/">Home</Link><Link to="/login">Login</Link><Link to="/sitemap">Sitemap</Link>
        </nav>
      </div>
    </div>
    <header className="border-b border-border bg-card">
      <div className="site-container grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 sm:flex sm:justify-between sm:py-5">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Uttarakhand Open School home">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-saffron bg-primary text-primary-foreground"><GraduationCap size={28} /></span>
          <span className="min-w-0"><strong className="block font-display text-lg leading-tight text-primary sm:text-2xl">Uttarakhand Open School, Dehradun<sup>®</sup></strong><span className="block text-xs font-medium text-muted-foreground sm:text-sm">Approved and Recognised</span></span>
        </Link>
        <div className="hidden items-center gap-6 text-sm lg:flex"><span className="flex items-center gap-2"><Phone size={17} className="text-saffron" /> Student Helpline</span><span className="flex items-center gap-2"><Mail size={17} className="text-saffron" /> Contact Office</span></div>
        <Button variant="outline" className="h-11 w-11 p-0 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</Button>
      </div>
      <nav className="bg-primary text-primary-foreground" aria-label="Main navigation">
        <div className={`site-container ${open ? "block" : "hidden"} lg:block`}>
          <div className="grid py-2 lg:flex lg:flex-wrap lg:py-0">
            {primaryNav.map(([label, href]) => <Link key={href} to={href} onClick={() => setOpen(false)} activeProps={{ className: "nav-active" }} activeOptions={{ exact: href === "/" }} className="nav-link">{label}</Link>)}
          </div>
        </div>
      </nav>
    </header>
    <div id="main-content">{children}</div>
    <footer className="mt-8 border-t-4 border-saffron bg-primary text-primary-foreground">
      <div className="site-container grid gap-8 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div><h2 className="font-display text-lg font-bold">Uttarakhand Open School</h2><p className="mt-3 max-w-xl text-sm leading-6 text-primary-foreground/75">Information on this website is provided for public guidance. Candidates should verify current dates, fees and requirements from official notifications.</p></div>
        <div><h2 className="text-sm font-bold uppercase">Important Links</h2><div className="mt-3 grid gap-2 text-sm text-primary-foreground/80"><Link to="/notices">Notices</Link><Link to="/downloads">Downloads</Link><Link to="/contact">Contact Us</Link></div></div>
        <div><h2 className="text-sm font-bold uppercase">Website Information</h2><p className="mt-3 text-sm text-primary-foreground/80">Last updated: 23 September 2026</p><span className="mt-3 inline-flex border border-primary-foreground/25 px-3 py-1.5 text-xs">Visitor No. 108,426</span></div>
      </div>
      <div className="border-t border-primary-foreground/15"><div className="site-container py-4 text-xs text-primary-foreground/70">©2018 All Rights Reserved Uttarakhand Open School, Dehradun</div></div>
    </footer>
  </div>;
}
