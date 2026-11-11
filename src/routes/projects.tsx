import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Products & Projects — Dreamshifter Tech Hub" },
    { name: "description", content: "Explore products and selected digital projects being developed by Dreamshifter Tech Hub." },
  ]}),
  component: ProjectsPage,
});

const PROJECTS = [
  { name: "ShiftNear", type: "Digital product · Marketplace", status: "In development", description: "A local discovery marketplace designed to help customers find nearby businesses and help vendors become easier to discover.", tone: "bg-[#e8f1eb]", mark: "SN", detail: "Discovery · Local business · Marketplace" },
  { name: "PawchPay", type: "Fintech · Mobile product", status: "Product development", description: "A digital payments product concept focused on making everyday financial actions simple and accessible. Payment functionality remains subject to appropriate integrations, security review and regulatory requirements.", tone: "bg-[#e9f1ed]", mark: "P", detail: "Payments · Wallet experience · Mobile" },
  { name: "RealMeal", type: "Restaurant technology", status: "Project", description: "A restaurant ordering and operations experience exploring how customers, orders and restaurant teams can connect through one system.", tone: "bg-[#f4eee5]", mark: "RM", detail: "Ordering · Restaurant operations · Web" },
  { name: "Edudesk", type: "Digital learning initiative", status: "Initiative", description: "A learning concept focused on helping young people build practical technology skills through structured, hands-on learning.", tone: "bg-[#edf0f7]", mark: "ED", detail: "Learning · Digital skills · Youth" },
];

function ProjectsPage() {
  return <SiteShell>
    <PageIntro eyebrow="Products & selected work" title="Ideas taking shape. Solutions built with purpose." lede="A growing collection of products, concepts and digital experiences connected to Dreamshifter. Some are in active development; others represent initiatives and project work." />
    <Wrap>
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => <article key={p.name} className="group overflow-hidden border border-line bg-card">
          <div className={`relative flex min-h-64 items-end justify-between overflow-hidden p-7 ${p.tone}`}>
            <span className="absolute -right-8 -top-24 text-[15rem] font-black leading-none tracking-[-.12em] text-ink/[.045]">{p.mark}</span>
            <div className="relative"><p className="text-xs font-extrabold uppercase tracking-[.16em] text-muted">{p.type}</p><p className="mt-4 text-5xl font-extrabold tracking-[-.08em] text-ink">{p.mark}</p></div>
            <span className="relative border border-ink/15 bg-white/65 px-3 py-1 text-[11px] font-bold text-ink">{p.status}</span>
          </div>
          <div className="p-7"><div className="flex items-center justify-between gap-4"><h2 className="text-2xl font-extrabold tracking-tight">{p.name}</h2><span className="text-xs font-bold text-brand">0{i+1}</span></div><p className="mt-3 text-sm leading-7 text-muted">{p.description}</p><p className="mt-5 border-t border-line pt-4 text-xs font-bold tracking-wide text-faint">{p.detail}</p></div>
        </article>)}
      </div>
      <p className="mt-8 max-w-3xl text-xs leading-6 text-faint">Project descriptions reflect current concepts and development direction. Availability, features and launch dates may change as products progress.</p>
    </Wrap>
    <section className="bg-ink text-paper"><Wrap><div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between"><div><p className="kicker text-emerald-300">Have a project in mind?</p><h2 className="mt-4 max-w-xl text-3xl font-extrabold tracking-tight md:text-4xl">Let's make the next idea useful.</h2></div><Link to="/contact" className="inline-flex min-h-12 items-center bg-emerald-400 px-5 text-sm font-extrabold text-ink">Start a conversation <ArrowUpRight className="ml-2 size-4"/></Link></div></Wrap></section>
  </SiteShell>;
}
