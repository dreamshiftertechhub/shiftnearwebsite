import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dreamshifter Tech Hub — Building what moves ideas forward" },
      {
        name: "description",
        content:
          "Dreamshifter Tech Hub is a technology innovation company building digital products, developing practical solutions and creating opportunities through technology.",
      },
    ],
  }),
  component: HomePage,
});

const PILLARS = [
  {
    number: "01",
    title: "Digital products",
    body: "We turn useful ideas into thoughtful digital experiences, from early product thinking and interface design to development and iteration.",
  },
  {
    number: "02",
    title: "Technology solutions",
    body: "We help organisations solve practical problems with well-considered websites, digital tools and technology support.",
  },
  {
    number: "03",
    title: "Learning and opportunity",
    body: "We create room for people to build confidence, develop digital skills and take part in the opportunities technology creates.",
  },
];

function HomePage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-line bg-ink text-paper">
        <div className="pointer-events-none absolute -right-24 -top-28 size-[34rem] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-8 -top-12 size-[23rem] rounded-full border border-white/10" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="kicker text-emerald-300">Technology · Innovation · Impact</p>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,5.3rem)] leading-[1.02] font-extrabold tracking-[-0.065em] text-balance">
              We turn ambitious ideas into <span className="text-emerald-300">impactful technology.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/70 md:text-lg">
              Dreamshifter Tech Hub is a technology innovation company building digital products, developing practical solutions and creating opportunities through technology.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#our-work" className="inline-flex min-h-12 items-center bg-emerald-400 px-5 text-sm font-extrabold text-ink transition hover:bg-emerald-300">
                Explore what we do
              </a>
              <Link to="/contact" className="inline-flex min-h-12 items-center border border-white/25 px-5 text-sm font-bold text-white transition hover:bg-white/10">
                Start a conversation
              </Link>
            </div>
            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-xs font-semibold tracking-wide text-white/55">
              <span>IDEA TO PRODUCT</span>
              <span>DESIGN TO EXPERIENCE</span>
              <span>TECHNOLOGY WITH PURPOSE</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/4.2] overflow-hidden border border-white/15 bg-[#1c3029] p-6 md:p-8">
              <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[.18em] text-white/55">DREAMSHIFTER / 001</span>
                  <span className="size-2 rounded-full bg-emerald-300" />
                </div>
                <div className="py-8">
                  <div className="flex size-24 items-center justify-center border border-emerald-300/50 text-5xl font-extrabold tracking-[-.1em] text-emerald-300">D.</div>
                  <p className="mt-8 max-w-xs text-3xl font-extrabold leading-tight tracking-[-.045em]">Ideas deserve to become something real.</p>
                </div>
                <div className="flex items-end justify-between border-t border-white/15 pt-5">
                  <div>
                    <p className="text-xs text-white/45">OUR FOCUS</p>
                    <p className="mt-1 text-sm font-bold text-white">Build · Improve · Empower</p>
                  </div>
                  <span className="text-xs text-emerald-300">DS / TECH HUB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-work" className="border-b border-line">
        <Wrap>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">What drives us</p>
              <h2 className="title mt-4 max-w-md">Technology should move people and ideas forward.</h2>
            </div>
            <div className="max-w-2xl">
              <p className="text-base leading-8 text-muted">
                We believe meaningful innovation starts with understanding a real need. Our work brings together product thinking, design and technology to create experiences and solutions that are useful, accessible and ready to grow.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                We are building a home for our own products while collaborating on solutions that help businesses, organisations and communities make progress.
              </p>
            </div>
          </div>
        </Wrap>
      </section>

      <section className="border-b border-line bg-card">
        <Wrap>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Our focus areas</p>
              <h2 className="title mt-4 max-w-xl">From a promising idea to something people can use.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted">Three connected areas guide the way we think, build and contribute.</p>
          </div>
          <div className="mt-10 grid border-t border-line md:grid-cols-3">
            {PILLARS.map((item, index) => (
              <article key={item.number} className={`border-b border-line py-7 md:border-b-0 md:px-7 md:py-8 ${index ? "md:border-l" : "md:pl-0"}`}>
                <span className="text-xs font-extrabold tracking-widest text-brand">{item.number}</span>
                <h3 className="mt-6 text-xl font-extrabold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="border-b border-line">
        <Wrap>
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Built at Dreamshifter</p>
              <h2 className="title mt-4">Our ideas are designed to go beyond the drawing board.</h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-muted">
                We are developing products and initiatives that put our thinking into practice. Each begins with a problem worth solving and grows through learning, feedback and deliberate execution.
              </p>
            </div>
            <article className="border border-line bg-card p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">Product in development</p>
                  <h3 className="mt-3 text-3xl font-extrabold tracking-tight">ShiftNear</h3>
                </div>
                <span className="border border-brand/25 bg-tint px-3 py-1 text-xs font-bold text-brand-deep">Coming soon</span>
              </div>
              <p className="mt-4 max-w-lg text-sm leading-7 text-muted">
                A local discovery marketplace being built to help customers find nearby businesses and help vendors become easier to discover.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/customers" className="inline-flex min-h-11 items-center bg-brand px-4 text-sm font-bold text-white hover:bg-brand-deep">For customers</Link>
                <Link to="/vendors" className="inline-flex min-h-11 items-center border border-line px-4 text-sm font-bold hover:bg-tint">For vendors</Link>
              </div>
            </article>
          </div>
        </Wrap>
      </section>

      <section className="border-b border-line bg-[#eaf2ed]">
        <Wrap>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow">Our approach</p>
              <h2 className="title mt-4 max-w-lg">Build with intention. Learn in the open. Improve continuously.</h2>
            </div>
            <ol className="grid gap-5">
              {[
                ["Understand", "Start with people, context and the problem that needs solving."],
                ["Design", "Shape a clear experience and a practical path from idea to execution."],
                ["Build and learn", "Create, test, listen and keep improving what we put into the world."],
              ].map(([title, body], i) => (
                <li key={title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[#cfddd4] pb-5 last:border-0">
                  <span className="text-sm font-extrabold text-brand">0{i + 1}</span>
                  <div>
                    <h3 className="font-extrabold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Wrap>
      </section>

      <section className="bg-ink text-paper">
        <Wrap>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="kicker text-emerald-300">Let's build what comes next</p>
              <h2 className="mt-4 max-w-2xl text-3xl leading-tight font-extrabold tracking-[-.045em] md:text-5xl">Have an idea, a challenge or a reason to collaborate?</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">We would like to hear what you are working on and explore how technology can help move it forward.</p>
            </div>
            <Link to="/contact" className="inline-flex min-h-12 shrink-0 items-center bg-emerald-400 px-5 text-sm font-extrabold text-ink hover:bg-emerald-300">Contact Dreamshifter</Link>
          </div>
        </Wrap>
      </section>
    </SiteShell>
  );
}
