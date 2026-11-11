import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, Users, Sparkles } from "lucide-react";
import { PageIntro, SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/initiatives")({
  head: () => ({ meta: [
    { title: "Initiatives — Dreamshifter Tech Hub" },
    { name: "description", content: "Discover learning, youth and community initiatives connected to Dreamshifter Tech Hub." },
  ]}),
  component: InitiativesPage,
});

const ITEMS = [
  { icon: BookOpen, name: "Edudesk", label: "Digital learning", text: "A technology learning concept designed to introduce young people to practical digital skills through guided, hands-on experiences." },
  { icon: Users, name: "Talk To Teens", label: "Youth impact", text: "A youth-focused initiative centred on conversations, guidance and creating room for teenagers to learn, reflect and make informed decisions." },
  { icon: Sparkles, name: "DShft Challenge", label: "Opportunity & creativity", text: "An upcoming initiative intended to encourage ideas, participation and creative problem-solving. Further programme details will be announced when confirmed." },
];

function InitiativesPage() {
  return <SiteShell>
    <PageIntro eyebrow="Beyond products" title="Creating opportunities through learning, creativity and community." lede="Technology can do more than power products. It can create access to knowledge, connect people and help new ideas take shape. These initiatives reflect that wider commitment." />
    <Wrap>
      <div className="grid gap-5 lg:grid-cols-3">
        {ITEMS.map(({icon: Icon, name, label, text}, i) => <article key={name} className="flex min-h-80 flex-col border border-line bg-card p-7">
          <div className="flex items-center justify-between"><Icon className="size-7 text-brand" strokeWidth={1.6}/><span className="text-xs font-extrabold tracking-widest text-faint">0{i+1}</span></div>
          <p className="mt-10 text-xs font-extrabold uppercase tracking-[.16em] text-brand">{label}</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">{name}</h2>
          <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
        </article>)}
      </div>
    </Wrap>
    <section className="bg-[#eaf2ed]"><Wrap><div className="max-w-3xl"><p className="eyebrow">Get involved</p><h2 className="title mt-4">Interested in supporting an initiative or building one with us?</h2><p className="mt-4 text-sm leading-7 text-muted">We welcome conversations with educators, organisations, mentors and partners who share an interest in practical learning and meaningful opportunities.</p><Link to="/contact" className="mt-7 inline-flex min-h-12 items-center bg-brand px-5 text-sm font-bold text-white hover:bg-brand-deep">Talk to our team <ArrowUpRight className="ml-2 size-4"/></Link></div></Wrap></section>
  </SiteShell>;
}
