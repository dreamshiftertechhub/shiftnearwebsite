import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Code2, Palette, Sparkles } from "lucide-react";
import { PageIntro, SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/academy")({
  head: () => ({ meta: [
    { title: "Dreamshifter Academy — Learn the skill. Practise the work." },
    { name: "description", content: "Practical training in UI/UX design, web creation and modern AI workflows from Dreamshifter Tech Hub." },
  ]}),
  component: AcademyPage,
});

const COURSES = [
  { icon: Palette, title: "UI/UX & Product Design", text: "Learn to understand users, structure digital experiences and design websites and mobile apps with Figma.", topics: "UI/UX fundamentals · User flows · Wireframes · Interface design · Prototyping · Portfolio projects" },
  { icon: Code2, title: "Web Creation", text: "Understand how websites are planned, structured and built. Move from a blank page to a responsive web experience.", topics: "Web fundamentals · Layout and structure · Responsive design · Website-building tools · Practical projects" },
  { icon: Sparkles, title: "AI Tools & Modern Workflows", text: "Use AI tools to support research, ideation, design and development. Learn to guide the tools, check the output and improve the result.", topics: "Prompting · AI-assisted research · Design and development workflows · Quality review · Productivity" },
];

function AcademyPage() {
  return <SiteShell>
    <PageIntro eyebrow="Dreamshifter Academy" title="Don't just watch technology change. Learn how to work with it." lede="Practical digital education for people who want skills they can use beyond the classroom. Learn the tools, understand the process and practise what you learn."/>
    <Wrap><div className="grid gap-5 md:grid-cols-3">{COURSES.map(({icon:Icon,title,text,topics})=><article key={title} className="border border-line bg-card p-6"><Icon className="size-7 text-brand"/><h2 className="mt-6 text-xl font-extrabold">{title}</h2><p className="mt-3 text-sm leading-7 text-muted">{text}</p><p className="mt-5 border-t border-line pt-4 text-xs font-bold leading-6 text-faint">{topics}</p></article>)}</div></Wrap>
    <section className="border-y border-line bg-[#f2eee8]"><Wrap><div className="grid gap-8 md:grid-cols-2"><div><p className="eyebrow">How we teach</p><h2 className="title mt-4">We want you to leave with something you can actually do.</h2></div><div className="space-y-4 text-sm leading-7 text-muted"><p>Watching tutorials is not the same as developing a skill. Our approach prioritises practical exercises, guided projects and opportunities to apply what you learn.</p><p>The aim is to help you build confidence, understand how the work is done and develop projects you can use to demonstrate your abilities.</p></div></div></Wrap></section>
    <Wrap><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow">Who should apply?</p><h2 className="title mt-4 max-w-xl">Start where you are. Build from there.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-muted">For beginners exploring technology, students and graduates seeking practical skills, entrepreneurs learning digital tools and aspiring designers or developers building a portfolio.</p></div><Link to="/contact" className="inline-flex min-h-12 items-center bg-brand px-5 text-sm font-bold text-white">Enquire about training <ArrowUpRight className="ml-2 size-4"/></Link></div></Wrap>
  </SiteShell>;
}
