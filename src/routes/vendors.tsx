import { createFileRoute, Link } from "@tanstack/react-router";
import { VendorForm } from "@/components/forms";
import { PageIntro, SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/vendors")({
  head: () => ({
    meta: [
      { title: "For vendors — ShiftNear" },
      {
        name: "description",
        content:
          "Founding vendor onboarding for ShiftNear is free. Complete a profile, name your service area, and prepare to be discovered.",
      },
    ],
  }),
  component: VendorsPage,
});

const BENEFITS = [
  ["Be found by area", "Customers looking in the neighbourhoods you serve can see that you exist."],
  ["Say what you actually do", "One clear offer beats a crowded bio. People should understand you in a sentence."],
  ["Keep the relationship", "Enquiries come to your WhatsApp or the contact you choose."],
  ["Join before the rush", "Founding onboarding is free while profiles are being prepared for a staged launch."],
];

const PREP = [
  ["Your offer", "A one-sentence description of the product or service, and who it helps."],
  ["Your location", "Neighbourhood, city, and the areas you can genuinely serve."],
  ["Your contact", "A business WhatsApp number or the channel you actually answer."],
  ["Proof of the work", "A few honest photos and a name people can repeat. Quality matters more than volume."],
];

function VendorsPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="For vendors"
        title="Make the business easier to find before 2027."
        lede="ShiftNear is for retailers, fashion designers, food businesses, beauty professionals, repairers, creatives and local service providers. Founding-phase onboarding is free, and subject to a completed profile and review."
      />
      <section className="border-b border-line">
        <Wrap>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h2 className="title">What you get. What you should not expect.</h2>
            <p className="text-sm leading-relaxed text-muted">
              A ShiftNear profile is a chance to be discovered. It is not a promise of customers, contracts or sales. Any future paid plan will be explained and will need your agreement. Nothing is charged during founding onboarding.
            </p>
          </div>
          <div className="mt-10 grid border-t border-line md:grid-cols-2">
            {BENEFITS.map(([title, body], index) => (
              <article key={title} className={`border-b border-line py-6 md:px-8 ${index % 2 ? "md:border-l" : "md:pl-0"}`}>
                <h3 className="font-extrabold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </article>
            ))}
          </div>
        </Wrap>
      </section>
      <section className="border-b border-line bg-card">
        <Wrap>
          <p className="eyebrow">Before you onboard</p>
          <h2 className="title mt-4">Four things a useful profile needs.</h2>
          <ol className="mt-8 grid gap-px bg-line sm:grid-cols-2">
            {PREP.map(([title, body], index) => (
              <li key={title} className="bg-card p-6">
                <span className="text-xs font-extrabold tracking-wide text-brand">0{index + 1}</span>
                <h3 className="mt-3 font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-muted">
            Selected vendors can also introduce themselves at{" "}
            <Link to="/webinar" className="font-bold text-brand-deep">
              ShiftNear Live
            </Link>
            . A pitch request is reviewed. It is not automatic, and it is not a guaranteed client.
          </p>
        </Wrap>
      </section>
      <Wrap>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Founding interest</p>
            <h2 className="title mt-4">Tell us about the business.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              This registers interest. It does not publish a listing. We will follow up on WhatsApp when onboarding for your category opens.
            </p>
          </div>
          <VendorForm />
        </div>
      </Wrap>
    </SiteShell>
  );
}
