import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Code2, Headset, Layers3, MonitorSmartphone, Palette, GraduationCap, Clapperboard, Lightbulb } from "lucide-react";
import { PageIntro, SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "What We Do — Dreamshifter Tech Hub" },
    { name: "description", content: "Explore Dreamshifter's product design, software development, mobile applications, ICT support, technology consulting, digital learning and media services." },
  ]}),
  component: ServicesPage,
});

const SERVICES = [
  { icon: Palette, no: "01", title: "UI/UX & Product Design", text: "Research, user flows, wireframes, prototypes and polished interfaces that make digital products easier to understand and use." },
  { icon: Code2, no: "02", title: "Web & Software Development", text: "Modern websites and practical software experiences shaped around the needs of your organisation and the people it serves." },
  { icon: MonitorSmartphone, no: "03", title: "Mobile App Development", text: "Mobile-first product experiences, from planning and interface design through development and product iteration." },
  { icon: Headset, no: "04", title: "ICT & Technical Support", text: "Hands-on technology support to help teams work more confidently with their digital tools and systems." },
  { icon: Lightbulb, no: "05", title: "Technology Consulting", text: "Clear thinking on digital opportunities, product direction, technology choices and the practical steps to move forward." },
  { icon: GraduationCap, no: "06", title: "Digital Skills Training", text: "Practical learning experiences that help individuals develop relevant digital skills and build confidence through doing." },
  { icon: Clapperboard, no: "07", title: "Video Editing & Media", text: "Purposeful visual storytelling and edited media for brands, organisations, campaigns and digital platforms." },
];

function ServicesPage() {
  return <SiteShell>
    <PageIntro eyebrow="What we do" title="Technology capabilities for ideas ready to move forward." lede="We bring product thinking, design, development and practical technology support together. Work with us on a focused project or explore how we can help your organisation take its next step." />
    <Wrap>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({icon: Icon, no, title, text}) => <article key={no} className="group flex min-h-64 flex-col border border-line bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-ink/5">
          <div className="flex items-center justify-between"><span className="text-xs font-extrabold tracking-widest text-brand">{no}</span><Icon className="size-6 text-brand" strokeWidth={1.6}/></div>
          <h2 className="mt-9 text-xl font-extrabold tracking-tight">{title}</h2>
          <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
          <span className="mt-auto flex items-center gap-2 pt-6 text-xs font-extrabold text-brand">Explore collaboration <ArrowUpRight className="size-4"/></span>
        </article>)}
      </div>
    </Wrap>
    <section className="bg-ink text-paper"><Wrap><div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><p className="kicker text-emerald-300">Have a challenge?</p><h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">Let's find the right way to move it forward.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/65">Tell us what you're trying to build, improve or solve. We'll start with the problem and work from there.</p></div><Link to="/contact" className="inline-flex min-h-12 items-center justify-center bg-emerald-400 px-5 text-sm font-extrabold text-ink hover:bg-emerald-300">Discuss a project <ArrowUpRight className="ml-2 size-4"/></Link></div></Wrap></section>
  </SiteShell>;
}
