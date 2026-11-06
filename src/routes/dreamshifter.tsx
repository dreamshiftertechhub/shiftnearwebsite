import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/dreamshifter")({
  head: () => ({
    meta: [
      { title: "Dreamshifter Tech Hub — ShiftNear" },
      {
        name: "description",
        content:
          "ShiftNear is powered by Dreamshifter Tech Hub. Product design, websites, ICT support and digital skills training.",
      },
    ],
  }),
  component: DreamshifterPage,
});

const SERVICES = [
  ["01", "Product and UI/UX design", "Research, user experiences and interface design for useful digital products."],
  ["02", "Websites and digital solutions", "Business websites and digital experiences that help a brand show up online."],
  ["03", "ICT and technical support", "Technology setup, troubleshooting and practical IT support for teams."],
  ["04", "Digital skills and training", "Learning for young people and professionals who want to work with technology."],
];

function DreamshifterPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="The team behind the initiative"
        title="Powered by Dreamshifter Tech Hub."
        lede="We use technology, design and practical digital skills to help people, businesses and ideas move forward. ShiftNear is one of those ideas."
      />
      <Wrap>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(240px,0.7fr)_1fr]">
          <figure className="max-w-md">
            <img
              src="/media/ayinde.jpg"
              alt="Ayinde Olatunde Emmanuel, founder of Dreamshifter Tech Hub"
              className="aspect-[4/5] w-full object-cover object-[center_18%]"
            />
            <figcaption className="mt-3 text-sm">
              <span className="block font-extrabold">Ayinde Olatunde Emmanuel</span>
              <span className="text-muted">Founder, Dreamshifter Tech Hub and ShiftNear</span>
            </figcaption>
          </figure>
          <div>
            <p className="eyebrow">The host</p>
            <h2 className="title mt-4">Building useful technology. Creating room for people to grow.</h2>
            <p className="mt-4 text-sm leading-relaxed text-pretty text-muted">
              Ayinde Olatunde Emmanuel is a product designer, project manager and technology entrepreneur. He founded Dreamshifter Tech Hub and is building ShiftNear, a local discovery marketplace for customers who want nearby businesses and vendors who want to be found.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-pretty text-muted">
              The same studio that designs products and trains people is the studio preparing ShiftNear’s first release: clear profiles, careful review, and a webinar that explains the work before anyone is asked to pay.
            </p>
          </div>
        </div>
      </Wrap>
      <section className="border-y border-line bg-card">
        <Wrap>
          <p className="eyebrow">What the hub does</p>
          <h2 className="title mt-4 max-w-xl">Design, build, support, teach.</h2>
          <div className="mt-8 grid border-t border-line md:grid-cols-4">
            {SERVICES.map(([n, title, body], index) => (
              <article key={n} className={`border-b border-line py-6 md:border-b-0 md:px-5 md:py-2 ${index ? "md:border-l" : "md:pl-0"}`}>
                <span className="text-xs font-extrabold text-brand">{n}</span>
                <h3 className="mt-3 font-extrabold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </article>
            ))}
          </div>
        </Wrap>
      </section>
      <Wrap>
        <div className="flex flex-col items-start justify-between gap-6 bg-ink px-6 py-10 text-paper md:flex-row md:items-end md:px-10">
          <div>
            <p className="kicker text-tint">Coming soon</p>
            <h2 className="title mt-3 text-paper">DSHFT Challenge</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-tint">
              A Dreamshifter initiative for bold ideas and people building what comes next. Details will be announced. Nothing is open for entries yet.
            </p>
          </div>
          <Link to="/challenge" className="inline-flex min-h-12 items-center bg-paper px-5 text-sm font-semibold text-ink">
            Read the announcement
          </Link>
        </div>
      </Wrap>
    </SiteShell>
  );
}
