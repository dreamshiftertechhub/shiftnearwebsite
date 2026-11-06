import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ShiftNear" },
      {
        name: "description",
        content:
          "Why ShiftNear exists: a local discovery marketplace so Nigerian customers can find nearby businesses and vendors can be found.",
      },
    ],
  }),
  component: AboutPage,
});

const PRINCIPLES = [
  ["Useful before loud", "A listing should answer what you offer, where, and how to reach you. Decoration does not replace that."],
  ["Local by default", "Discovery starts with a neighbourhood, a town or a service area — not a national feed of strangers."],
  ["Reviewed, not dumped", "Founding vendors complete a profile. Listings can be held back until the information is clear."],
  ["Honest about outcomes", "ShiftNear creates a chance to be found. It does not promise customers, contracts or sales."],
];

function AboutPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="About ShiftNear"
        title="A simpler way for people to find businesses around them."
        lede="ShiftNear is in pre-launch. We are building a marketplace where customers look nearby first, and where vendors become easier to discover without pretending that visibility is the same as a guaranteed sale."
      />
      <Wrap>
        <div className="grid gap-12 lg:grid-cols-2">
          <article>
            <p className="eyebrow">Vision</p>
            <h2 className="title mt-4">Every neighbourhood should have a clear map of who can help.</h2>
            <p className="mt-4 text-sm leading-relaxed text-pretty text-muted">
              Food, fashion, beauty, repairs, creative work and everyday services already exist close to the people who need them. The missing piece is a trusted place to look. ShiftNear is that place, opened carefully, city by city.
            </p>
          </article>
          <article className="border border-line bg-card p-6 md:p-8">
            <p className="eyebrow">The gap</p>
            <h2 className="mt-3 text-xl font-extrabold tracking-tight">Asking in a group chat is not a discovery system.</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Recommendations get buried. New residents do not know who is good nearby. Serious vendors spend more time being invisible than improving the work. We are designing ShiftNear to fix the introduction, not to replace the relationship between a customer and a business.
            </p>
          </article>
        </div>
      </Wrap>
      <section className="border-y border-line bg-card">
        <Wrap>
          <p className="eyebrow">How we will behave</p>
          <h2 className="title mt-4 max-w-xl">Principles for the first release.</h2>
          <div className="mt-10 grid border-t border-line md:grid-cols-2">
            {PRINCIPLES.map(([title, body], index) => (
              <article key={title} className={`border-b border-line py-6 md:px-8 md:py-8 ${index % 2 === 1 ? "md:border-l" : "md:pl-0"}`}>
                <h3 className="font-extrabold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </article>
            ))}
          </div>
        </Wrap>
      </section>
      <Wrap>
        <div className="grid items-center gap-10 lg:grid-cols-[280px_1fr]">
          <img
            src="/media/ayinde.jpg"
            alt="Ayinde Olatunde Emmanuel"
            className="aspect-[4/5] w-full max-w-xs object-cover object-[center_18%]"
          />
          <div>
            <p className="eyebrow">Founder</p>
            <h2 className="title mt-4">Ayinde Olatunde Emmanuel</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-pretty text-muted">
              Product designer, project manager and technology entrepreneur. Founder of Dreamshifter Tech Hub, and the person building ShiftNear so local businesses can be found by the people already around them.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/dreamshifter" className="inline-flex min-h-11 items-center border border-line px-4 text-sm font-semibold hover:bg-tint">
                About Dreamshifter
              </Link>
              <Link to="/webinar" className="inline-flex min-h-11 items-center bg-brand px-4 text-sm font-semibold text-paper hover:bg-brand-deep">
                Meet him at the webinar
              </Link>
            </div>
          </div>
        </div>
      </Wrap>
    </SiteShell>
  );
}
