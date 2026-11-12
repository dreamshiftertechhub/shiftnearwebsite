import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Code2, Headset, MonitorSmartphone, Palette, GraduationCap, Lightbulb } from "lucide-react";
import { PageIntro, SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services & Solutions — Dreamshifter Tech Hub" },
    { name: "description", content: "UI/UX and digital product design, web development, business technology solutions and practical tech training." },
  ]}),
  component: ServicesPage,
});

const SERVICES = [
  { icon: Palette, no: "01", title: "Digital Product Design — UI/UX", text: "We design websites, mobile applications and digital platforms around the people who use them. From user journeys and wireframes to polished interfaces and interactive prototypes, every design decision has a job.", includes: "User flows · Wireframes · Figma prototypes · Interface design · Design systems" },
  { icon: Code2, no: "02", title: "Web Development & Vibe Coding", text: "We build responsive websites and web applications for businesses, brands and entrepreneurs. Modern development tools and AI-assisted workflows help us move efficiently without skipping the thinking, testing or review.", includes: "Business websites · Landing pages · E-commerce · Web apps · Dashboards · Custom systems" },
  { icon: MonitorSmartphone, no: "03", title: "Digital Product & App Solutions", text: "We help shape digital products from early idea to a clear, buildable experience. We can support product planning, interface design, prototyping and development coordination.", includes: "Product discovery · Requirements · Mobile-first experiences · Prototyping · Product iteration" },
  { icon: Headset, no: "04", title: "Business Technology & ICT Support", text: "We help businesses make better use of their technology, improve digital workflows and address practical technical needs.", includes: "Technical support · Digital process improvement · Platform setup · Technology operations" },
  { icon: Lightbulb, no: "05", title: "Technology Consulting", text: "Get clear advice on digital opportunities, product direction, technology choices and the practical steps required to move a project forward.", includes: "Product direction · Project planning · Technology selection · Digital strategy" },
  { icon: GraduationCap, no: "06", title: "Tech Training & Academy", text: "Practical learning for people who want to build useful skills in UI/UX, web creation and modern AI workflows. Learn the tools, practise the work and build confidence.", includes: "UI/UX design · Web creation · AI-assisted workflows · Guided projects" },
];

function ServicesPage() {
  return <SiteShell>
    <PageIntro eyebrow="Services & solutions" title="From the first sketch to the finished digital experience." lede="Whether you need a website, a digital product or a better way to run part of your business, we help you find the right solution and build it." />
    <Wrap><div className="grid gap-5 md:grid-cols-2">{SERVICES.map(({icon:Icon,no,title,text,includes})=><article key={no} className="border border-line bg-card p-6 md:p-7"><div className="flex items-center justify-between"><span className="text-xs font-extrabold tracking-widest text-brand">{no}</span><Icon className="size-6 text-brand" strokeWidth={1.6}/></div><h2 className="mt-7 text-xl font-extrabold tracking-tight">{title}</h2><p className="mt-3 text-sm leading-7 text-muted">{text}</p><p className="mt-5 border-t border-line pt-4 text-xs font-bold leading-6 text-faint">{includes}</p><Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand">Discuss this service <ArrowUpRight className="size-4"/></Link></article>)}</div></Wrap>
    <section className="border-y border-line bg-[#f2eee8]"><Wrap><div className="grid gap-8 md:grid-cols-2"><div><p className="eyebrow">Our approach to AI</p><h2 className="title mt-4">We use AI to work smarter. We don't let it do the thinking for us.</h2></div><div className="text-sm leading-7 text-muted"><p>AI tools help us explore ideas, accelerate parts of the workflow and support implementation. But speed without direction creates poor products.</p><p className="mt-4">Every project still needs clear thinking, sound design decisions, proper review and attention to the people who will use it. That's the difference between generating something and building something useful.</p></div></div></Wrap></section>
    <section className="bg-[#17243a] text-white"><Wrap><div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between"><div><p className="kicker text-orange-300">Have a project in mind?</p><h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">Let's find the right way to move it forward.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/65">Tell us what you're trying to build, improve or solve. We'll start with the problem and work from there.</p></div><Link to="/contact" className="inline-flex min-h-12 items-center bg-orange-400 px-5 text-sm font-extrabold text-[#17243a]">Discuss a project <ArrowUpRight className="ml-2 size-4"/></Link></div></Wrap></section>
  </SiteShell>;
}
