import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Dreamshifter Tech Hub — Digital products. Built with purpose." },
    { name: "description", content: "Dreamshifter Tech Hub designs digital products, builds websites and business systems, and delivers practical technology training." },
  ]}),
  component: HomePage,
});

const SERVICES = [
  ["01", "Digital product design", "Websites and apps shaped around the people who use them.", "/services"],
  ["02", "Web development", "Responsive websites, web applications and tailored digital systems.", "/services"],
  ["03", "Business technology", "Practical ICT support and digital solutions for better ways of working.", "/services"],
  ["04", "Tech training", "Hands-on learning in product design, web creation and digital skills.", "/academy"],
];

const WORK = [
  ["Hospitality", "Web experiences and digital systems for restaurants and coffee shops."],
  ["Real estate", "Property websites designed to present listings and generate enquiries."],
  ["E-commerce", "Online storefronts and shopping experiences, including Bollypet."],
  ["Fintech", "Mobile product concepts and interface design for digital finance."],
];

function HomePage() {
  return <SiteShell>
    <section className="relative overflow-hidden border-b border-line bg-[#fbfbfa] text-ink">
      
      <div className="relative mx-auto grid max-w-6xl items-stretch gap-10 px-5 pb-14 pt-16 md:px-8 md:pb-20 md:pt-20 lg:grid-cols-[1.15fr_.85fr]">
        <div className="flex flex-col justify-center">
          <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[.22em] text-brand"><span className="h-px w-8 bg-brand"/> Independent digital agency · Nigeria</p>
          <h1 className="mt-7 max-w-3xl font-display text-[clamp(3.2rem,6.4vw,5.8rem)] font-bold leading-[.98] tracking-[-.065em]">We make digital ideas <span className="text-orange-300">work.</span></h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-muted md:text-lg">Dreamshifter designs digital products, builds websites and business systems, and helps people develop skills for the digital world.</p>
          <div className="mt-9 flex flex-wrap items-center gap-3"><Link to="/contact" className="inline-flex min-h-13 items-center bg-brand px-6 text-sm font-extrabold text-white transition hover:bg-brand-deep">Start a project <ArrowUpRight className="ml-3 size-4"/></Link><Link to="/projects" className="inline-flex min-h-13 items-center border border-white/35 px-6 text-sm font-bold text-ink transition hover:bg-white/10">See our work</Link></div>
          <div className="mt-14 flex flex-wrap gap-x-7 gap-y-2 border-t border-line pt-5 text-[10px] font-bold uppercase tracking-[.16em] text-faint"><span>Product design</span><span>Web development</span><span>Digital solutions</span><span>Tech education</span></div>
        </div>
        <div className="relative flex min-h-[360px] flex-col justify-between border border-line bg-white p-6 md:min-h-[430px] md:p-8 shadow-[0_18px_55px_rgba(20,43,114,0.06)]">
          <div className="flex items-start justify-between"><span className="text-[10px] font-extrabold tracking-[.2em] text-white/55">DREAMSHIFTER / 001</span><span className="size-3 rounded-full bg-orange-400"/></div>
          <div className="relative py-8">
            <div className="absolute -left-8 top-1/2 h-px w-[calc(100%+4rem)] bg-white/15"/>
            <div className="relative flex aspect-[1.3] max-h-[230px] items-center justify-center border border-[#dce2ec] bg-[#e9edf5]">
              <span className="select-none font-display text-[clamp(8rem,18vw,13rem)] font-bold leading-none tracking-[-.13em] text-white">D<span className="text-brand">.</span></span>
              <span className="absolute bottom-4 right-4 text-[9px] font-bold uppercase tracking-[.2em] text-faint">01 — 03</span>
            </div>
          </div>
          <div className="flex items-end justify-between gap-4 border-t border-white/20 pt-5"><div><p className="text-xs font-bold text-orange-300">FOUNDER-LED</p><p className="mt-1 text-xs text-white/55">Design · Delivery · Direction</p></div><p className="text-right text-[10px] font-bold tracking-[.15em] text-white/45">LAGOS<br/>NIGERIA</p></div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 hidden h-2 w-[43%] bg-orange-400 lg:block"/>
    </section>

    <Wrap>
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div><p className="eyebrow">Why Dreamshifter</p><h2 className="title mt-4 max-w-md">Good technology solves a real problem.</h2></div>
        <div className="max-w-2xl space-y-4 text-sm leading-7 text-muted"><p>A website should do more than look attractive. An app should do more than exist. And technology training should prepare people to do real work.</p><p>We bring together product design, development, business-focused problem-solving and practical education. We start with what needs to work, then build the right solution around it.</p></div>
      </div>
    </Wrap>

    <section className="border-y border-line bg-card"><Wrap><p className="eyebrow">What we do</p><h2 className="title mt-4 max-w-2xl">From a clear idea to a solution people can use.</h2><div className="mt-9 grid border-t border-line sm:grid-cols-2">{SERVICES.map(([n,title,body,to])=><Link key={n} to={to} className="group border-b border-line py-7 sm:px-7 sm:first:pl-0 sm:[&:nth-child(2)]:border-l"><span className="text-xs font-extrabold tracking-widest text-brand">{n}</span><h3 className="mt-4 text-xl font-extrabold tracking-tight">{title}</h3><p className="mt-2 max-w-sm text-sm leading-7 text-muted">{body}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand">Explore <MoveUpRight className="size-4 transition group-hover:translate-x-1"/></span></Link>)}</div></Wrap></section>

    <Wrap><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">Selected work</p><h2 className="title mt-4 max-w-xl">Different industries. Different problems. Purpose-built work.</h2></div><Link to="/projects" className="text-sm font-bold text-brand">View projects <ArrowUpRight className="inline size-4"/></Link></div><div className="mt-9 grid border-t border-line sm:grid-cols-2">{WORK.map(([name,body],i)=><article key={name} className="border-b border-line py-6 sm:px-7 sm:first:pl-0"><span className="text-xs font-bold text-faint">0{i+1}</span><h3 className="mt-2 font-extrabold">{name}</h3><p className="mt-2 max-w-md text-sm leading-7 text-muted">{body}</p></article>)}</div><p className="mt-5 text-xs leading-6 text-faint">Selected work includes client projects, design concepts and products in development. Each is labelled according to its current status.</p></Wrap>

    <section className="border-y border-line bg-[#f3f5f8]"><Wrap><p className="eyebrow">Built at Dreamshifter</p><h2 className="title mt-4 max-w-2xl">We develop our own products and talent initiatives, too.</h2><div className="mt-8 grid gap-5 md:grid-cols-2"><article className="border border-line bg-white p-7"><div className="flex items-center justify-between"><p className="text-xs font-extrabold tracking-[.15em] text-brand">PRODUCT · PRE-LAUNCH</p><span className="text-xs font-bold text-muted">In development</span></div><h3 className="mt-5 text-3xl font-extrabold tracking-tight">Shiftnear</h3><p className="mt-3 text-sm leading-7 text-muted">A service marketplace being built to connect customers with local experts and vendors. Early vendor onboarding is being prepared.</p><Link to="/shiftnear" className="mt-6 inline-flex items-center text-sm font-bold text-brand">Explore Shiftnear <ArrowUpRight className="ml-2 size-4"/></Link></article><article className="border border-[#d7dce9] bg-white p-7"><p className="text-xs font-extrabold tracking-[.15em] text-brand">TALENT INITIATIVE</p><h3 className="mt-5 text-3xl font-extrabold tracking-tight">The DShift Challenge</h3><p className="mt-3 text-sm leading-7 text-muted">A practical competition designed to identify emerging tech talent through skill-based tasks and project opportunities.</p><Link to="/challenge" className="mt-6 inline-flex items-center text-sm font-bold text-brand">Discover the challenge <ArrowUpRight className="ml-2 size-4"/></Link></article></div></Wrap></section>

    <section className="bg-[#142b72] text-white"><Wrap><div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><p className="kicker text-orange-300">Have a project in mind?</p><h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">Let's turn the next idea into something useful.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-muted">Tell us what you're trying to build, improve or solve. We'll help you work out the next step.</p></div><Link to="/contact" className="inline-flex min-h-13 shrink-0 items-center bg-[#f47b20] px-5 text-sm font-extrabold text-[#142b72]">Start a conversation <ArrowUpRight className="ml-2 size-4"/></Link></div></Wrap></section>
  </SiteShell>;
}
