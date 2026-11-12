import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, Users, Trophy } from "lucide-react";
import { PageIntro, SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/initiatives")({
  head: () => ({ meta: [
    { title: "Initiatives — Dreamshifter Tech Hub" },
    { name: "description", content: "Explore learning, youth and technology talent initiatives connected to Dreamshifter." },
  ]}),
  component: InitiativesPage,
});

const ITEMS = [
  { icon:BookOpen, name:"Edudesk", label:"Digital learning", text:"A learning initiative focused on helping young people build practical technology skills through structured, hands-on experiences." },
  { icon:Users, name:"Talk To Teens", label:"Youth impact", text:"A youth-focused initiative creating room for conversations, guidance and thoughtful decisions through meaningful engagement." },
  { icon:Trophy, name:"The DShift Challenge", label:"Talent & opportunity", text:"A competitive, gamified tech challenge where participants demonstrate practical ability and standout talent can be considered for live project opportunities.", link:"/challenge" },
];

function InitiativesPage() {
  return <SiteShell><PageIntro eyebrow="Beyond client work" title="Creating opportunities through learning, creativity and community." lede="Our work goes beyond websites and applications. We also care about practical learning, youth development and giving emerging talent a chance to demonstrate what they can do."/>
    <Wrap><div className="grid gap-5 md:grid-cols-3">{ITEMS.map(({icon:Icon,name,label,text,link},i)=><article key={name} className="flex min-h-72 flex-col border border-line bg-card p-7"><Icon className="size-7 text-brand"/><p className="mt-8 text-xs font-extrabold uppercase tracking-[.15em] text-brand">{label}</p><h2 className="mt-2 text-2xl font-extrabold">{name}</h2><p className="mt-3 text-sm leading-7 text-muted">{text}</p>{link?<Link to={link} className="mt-auto inline-flex items-center pt-6 text-sm font-bold text-brand">Explore challenge <ArrowUpRight className="ml-2 size-4"/></Link>:<span className="mt-auto pt-6 text-xs font-bold text-faint">DREAMSHIFTER INITIATIVE · 0{i+1}</span>}</article>)}</div></Wrap>
    <section className="border-y border-line bg-[#f2eee8]"><Wrap><div className="max-w-3xl"><p className="eyebrow">Get involved</p><h2 className="title mt-4">Interested in supporting an initiative or building one with us?</h2><p className="mt-4 text-sm leading-7 text-muted">We welcome conversations with educators, organisations, mentors and partners who share an interest in practical learning and meaningful opportunities.</p><Link to="/contact" className="mt-7 inline-flex min-h-12 items-center bg-brand px-5 text-sm font-bold text-white">Talk to Dreamshifter <ArrowUpRight className="ml-2 size-4"/></Link></div></Wrap></section>
  </SiteShell>;
}
