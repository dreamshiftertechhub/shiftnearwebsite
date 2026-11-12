import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Selected Work — Dreamshifter Tech Hub" },
    { name: "description", content: "Explore digital projects, product concepts and systems across hospitality, real estate, e-commerce and fintech." },
  ]}),
  component: ProjectsPage,
});

const PROJECTS = [
  { name:"Restaurant & coffee shop systems", type:"Hospitality · Web", status:"Selected project work", description:"Digital experiences and ordering-system concepts designed around restaurant customers, menus, enquiries and day-to-day operations.", mark:"RM", tone:"bg-[#f2e8dc]" },
  { name:"Real estate experiences", type:"Property · Web", status:"Selected project work", description:"Property-focused website experiences that organise listings, present locations and make it easier for prospective buyers or renters to enquire.", mark:"RE", tone:"bg-[#e8edf2]" },
  { name:"Bollypet", type:"E-commerce · Online retail", status:"Design / project work", description:"An e-commerce direction focused on presenting products clearly and making the shopping journey straightforward.", mark:"BP", tone:"bg-[#f4e9e8]" },
  { name:"PawchPay", type:"Fintech · Mobile product", status:"In development", description:"A digital payments product project focused on a clear mobile wallet experience. Money movement and financial services remain subject to integrations, security review and applicable regulatory requirements.", mark:"P", tone:"bg-[#e7f0e9]" },
  { name:"RealMeal", type:"Restaurant technology", status:"Product project", description:"An online ordering and restaurant operations experience connecting customers, orders and restaurant teams.", mark:"RM", tone:"bg-[#f3eee4]" },
  { name:"Shiftnear", type:"Service marketplace", status:"Pre-launch", description:"A marketplace in development to connect customers with local experts and vendors. Early vendor interest is being collected ahead of launch.", mark:"SN", tone:"bg-[#e8eee8]" },
];

function ProjectsPage() {
  return <SiteShell><PageIntro eyebrow="Selected work" title="Different industries. Different problems. Purpose-built digital work." lede="A selection of client work, product projects and concepts across hospitality, property, e-commerce and fintech. We label each project honestly so you know what is live, in development or a design direction."/>
    <Wrap><div className="grid gap-5 md:grid-cols-2">{PROJECTS.map((p,i)=><article key={p.name} className="overflow-hidden border border-line bg-card"><div className={`relative flex min-h-48 items-end justify-between overflow-hidden p-7 ${p.tone}`}><span className="text-6xl font-black tracking-[-.08em] text-[#142b72]/80">{p.mark}</span><span className="border border-black/10 bg-white/75 px-3 py-1 text-[11px] font-bold text-ink">{p.status}</span></div><div className="p-6"><p className="text-xs font-extrabold uppercase tracking-[.13em] text-brand">{p.type}</p><h2 className="mt-2 text-xl font-extrabold">{p.name}</h2><p className="mt-3 text-sm leading-7 text-muted">{p.description}</p><span className="mt-5 block border-t border-line pt-4 text-xs font-bold text-faint">0{i+1} / DREAMSHIFTER PROJECTS</span></div></article>)}</div><p className="mt-7 max-w-3xl text-xs leading-6 text-faint">Project descriptions reflect current work and development status. Product availability, features and launch dates may change as projects progress.</p></Wrap>
    <section className="bg-[#142b72] text-white"><Wrap><div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between"><div><p className="kicker text-orange-300">Have a project in mind?</p><h2 className="mt-4 max-w-xl text-3xl font-extrabold md:text-4xl">Let's make the next idea useful.</h2></div><Link to="/contact" className="inline-flex min-h-12 items-center bg-orange-400 px-5 text-sm font-extrabold text-[#142b72]">Start a conversation <ArrowUpRight className="ml-2 size-4"/></Link></div></Wrap></section>
  </SiteShell>;
}
