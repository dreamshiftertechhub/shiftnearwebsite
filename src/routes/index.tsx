import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Dreamshifter Tech Hub — We design. We build. We move ideas forward." },
    { name: "description", content: "Digital product design, web development, business technology solutions and practical tech training from Dreamshifter Tech Hub." },
  ]}),
  component: HomePage,
});

const SERVICES = [
  ["01", "Digital product design", "Websites and apps designed around the people who use them.", "/services"],
  ["02", "Web development", "Fast, responsive websites and web applications built for real business needs.", "/services"],
  ["03", "Business technology", "Practical digital systems and technical support that help work run better.", "/services"],
  ["04", "Tech training", "Hands-on learning in UI/UX, web creation and modern AI workflows.", "/academy"],
];

const WORK = [
  ["Restaurant & hospitality", "Web experiences and digital systems for restaurants and coffee shops."],
  ["Real estate", "Property-focused digital experiences built to present listings and attract enquiries."],
  ["E-commerce", "Online storefront concepts and shopping experiences, including Bollypet."],
  ["Fintech", "Digital finance product concepts and mobile interface design."],
];

function HomePage() {
  return <SiteShell>
    <section className="bg-[#17243a] text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <p className="kicker text-orange-300">Digital agency · Technology · Training</p>
          <h1 className="display mt-6 max-w-3xl text-white">Good ideas deserve more than good intentions.</h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/75 md:text-lg">We turn ideas into digital products that work. Dreamshifter Tech Hub designs digital experiences, builds business solutions and helps people develop practical technology skills.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex min-h-12 items-center bg-orange-400 px-5 text-sm font-extrabold text-[#17243a] hover:bg-orange-300">Start a project <ArrowUpRight className="ml-2 size-4"/></Link>
            <Link to="/services" className="inline-flex min-h-12 items-center border border-white/35 px-5 text-sm font-bold text-white hover:bg-white/10">Explore our services</Link>
          </div>
          <p className="mt-12 border-t border-white/20 pt-5 text-xs font-bold tracking-[.12em] text-white/55">DESIGN · DEVELOPMENT · DIGITAL SOLUTIONS · LEARNING</p>
        </div>
        <div className="relative border border-white/20 bg-[#202f46] p-7 md:p-9">
          <p className="text-xs font-bold tracking-[.18em] text-orange-300">DREAMSHIFTER TECH HUB</p>
          <div className="my-12 border-l-4 border-orange-400 pl-6">
            <p className="text-4xl font-extrabold leading-tight tracking-[-.04em]">From first thought to first release.</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">Clear thinking. Thoughtful design. Technology that earns its place.</p>
          </div>
          <div className="flex items-center justify-between border-t border-white/20 pt-5 text-xs font-semibold text-white/55"><span>FOUNDER-LED</span><span>LAGOS, NIGERIA</span></div>
        </div>
      </div>
    </section>

    <Wrap>
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div><p className="eyebrow">Why Dreamshifter</p><h2 className="title mt-4 max-w-md">Technology should move your business forward.</h2></div>
        <div className="max-w-2xl space-y-4 text-sm leading-7 text-muted">
          <p>A website should do more than look attractive. An app should do more than exist. And technology training should prepare people to do real work.</p>
          <p>We bring together product design, modern development tools, business-focused problem-solving and practical education. We don't build for appearances. We build to make something work better.</p>
        </div>
      </div>
    </Wrap>

    <section className="border-y border-line bg-card">
      <Wrap>
        <p className="eyebrow">What we do</p><h2 className="title mt-4 max-w-2xl">The right skills. The right solutions. One place.</h2>
        <div className="mt-9 grid border-t border-line sm:grid-cols-2">
          {SERVICES.map(([n,title,body,to]) => <Link key={n} to={to} className="group border-b border-line py-7 sm:px-7 sm:first:pl-0 sm:nth-[2]:border-l">
            <span className="text-xs font-extrabold tracking-widest text-brand">{n}</span><h3 className="mt-4 text-xl font-extrabold tracking-tight">{title}</h3><p className="mt-2 max-w-sm text-sm leading-7 text-muted">{body}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand">Explore <ArrowUpRight className="size-4 transition group-hover:translate-x-1"/></span>
          </Link>)}
        </div>
      </Wrap>
    </section>

    <Wrap>
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">Selected work</p><h2 className="title mt-4 max-w-xl">Different industries. Different problems. Purpose-built work.</h2></div><Link to="/projects" className="text-sm font-bold text-brand">View projects <ArrowUpRight className="inline size-4"/></Link></div>
      <div className="mt-9 grid border-t border-line sm:grid-cols-2">
        {WORK.map(([name,body],i)=><article key={name} className="border-b border-line py-6 sm:px-7 sm:first:pl-0"><span className="text-xs font-bold text-faint">0{i+1}</span><h3 className="mt-2 font-extrabold">{name}</h3><p className="mt-2 max-w-md text-sm leading-7 text-muted">{body}</p></article>)}
      </div>
      <p className="mt-5 text-xs leading-6 text-faint">Selected work includes client projects, design concepts and products in development. Each is labelled according to its current status.</p>
    </Wrap>

    <section className="border-y border-line bg-[#f2eee8]">
      <Wrap>
        <p className="eyebrow">Built at Dreamshifter</p><h2 className="title mt-4 max-w-2xl">We don't just build for clients. We build our own ideas too.</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="border border-[#d8d1c8] bg-white p-7"><div className="flex items-center justify-between gap-3"><p className="text-xs font-extrabold tracking-[.15em] text-brand">PRODUCT · PRE-LAUNCH</p><span className="text-xs font-bold text-muted">In development</span></div><h3 className="mt-5 text-3xl font-extrabold tracking-tight">Shiftnear</h3><p className="mt-3 text-sm leading-7 text-muted">A service marketplace being built to connect customers with local experts and vendors. We're preparing for early vendor onboarding.</p><Link to="/shiftnear" className="mt-6 inline-flex items-center text-sm font-bold text-brand">Explore Shiftnear <ArrowUpRight className="ml-2 size-4"/></Link></article>
          <article className="border border-[#d8d1c8] bg-white p-7"><p className="text-xs font-extrabold tracking-[.15em] text-brand">TALENT INITIATIVE</p><h3 className="mt-5 text-3xl font-extrabold tracking-tight">The DShift Challenge</h3><p className="mt-3 text-sm leading-7 text-muted">A competitive, practical challenge designed to identify emerging tech talent through skill-based tasks and project opportunities.</p><Link to="/challenge" className="mt-6 inline-flex items-center text-sm font-bold text-brand">Discover the challenge <ArrowUpRight className="ml-2 size-4"/></Link></article>
        </div>
      </Wrap>
    </section>

    <section className="bg-[#17243a] text-white"><Wrap><div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><p className="kicker text-orange-300">Let's make it happen</p><h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">Have an idea that needs to become something real?</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/65">Tell us what you're trying to build, improve or solve. We'll help you work out the next step.</p></div><Link to="/contact" className="inline-flex min-h-12 shrink-0 items-center bg-orange-400 px-5 text-sm font-extrabold text-[#17243a]">Start a conversation <ArrowUpRight className="ml-2 size-4"/></Link></div></Wrap></section>
  </SiteShell>;
}
