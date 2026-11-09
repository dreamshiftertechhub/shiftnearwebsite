import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/dreamshifter")({
  head: () => ({
    meta: [
      { title: "About Dreamshifter Tech Hub" },
      {
        name: "description",
        content: "Learn about Dreamshifter Tech Hub, a technology innovation company building digital products, developing solutions and creating opportunities through technology.",
      },
    ],
  }),
  component: AboutDreamshifterPage,
});

const VALUES = [
  ["Purpose before technology", "We begin with the people and the problem. Technology matters when it makes something meaningfully better."],
  ["Ideas into action", "We value thoughtful execution: turning concepts into clear plans, useful products and experiences people can use."],
  ["Learn, adapt and improve", "We stay curious, listen to feedback and treat progress as an ongoing process rather than a one-time event."],
  ["Create room for others", "We believe technology should open doors to learning, collaboration and new opportunities."],
];

function AboutDreamshifterPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="About Dreamshifter Tech Hub"
        title="A technology company built around ideas that move people forward."
        lede="Dreamshifter Tech Hub exists to turn ambitious ideas into meaningful technology experiences. We build digital products, develop practical solutions and create opportunities through technology."
      />
      <Wrap>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Our belief</p>
            <h2 className="title mt-4">Innovation is not just about what technology can do. It is about what people can do with it.</h2>
          </div>
          <div className="space-y-4 text-sm leading-7 text-muted">
            <p>We see technology as a tool for progress. The right digital product can make a service easier to access. A thoughtful experience can help a business connect with the people it serves. A learning opportunity can help someone take their next step.</p>
            <p>That is why Dreamshifter brings product thinking, design, technology and a commitment to learning together. We are building our own products and initiatives while exploring collaborations that solve real needs.</p>
          </div>
        </div>
      </Wrap>
      <section className="border-y border-line bg-card">
        <Wrap>
          <p className="eyebrow">What guides us</p>
          <h2 className="title mt-4 max-w-xl">The principles behind the work.</h2>
          <div className="mt-9 grid border-t border-line md:grid-cols-2">
            {VALUES.map(([title, body], index) => (
              <article key={title} className={`border-b border-line py-7 md:px-7 md:py-8 ${index % 2 ? "md:border-l" : "md:pl-0"}`}>
                <span className="text-xs font-extrabold tracking-widest text-brand">0{index + 1}</span>
                <h3 className="mt-3 font-extrabold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{body}</p>
              </article>
            ))}
          </div>
        </Wrap>
      </section>
      <Wrap>
        <div className="grid items-center gap-10 lg:grid-cols-[260px_1fr]">
          <img src="/media/ayinde.jpg" alt="Ayinde Olatunde Emmanuel, founder of Dreamshifter Tech Hub" className="aspect-[4/5] w-full max-w-xs object-cover object-[center_18%]" />
          <div>
            <p className="eyebrow">Founder</p>
            <h2 className="title mt-4">Ayinde Olatunde Emmanuel</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">Dreamshifter Tech Hub was founded by Ayinde Olatunde Emmanuel, a product designer, project manager and technology entrepreneur interested in building useful digital experiences and creating opportunities through technology.</p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">The company’s work is guided by a simple belief: good ideas deserve the clarity, craft and commitment needed to become real.</p>
            <Link to="/contact" className="mt-6 inline-flex min-h-11 items-center bg-brand px-4 text-sm font-bold text-white hover:bg-brand-deep">Connect with Dreamshifter</Link>
          </div>
        </div>
      </Wrap>
    </SiteShell>
  );
}
