import { createFileRoute, Link } from "@tanstack/react-router";
import { EarlyAccessForm } from "@/components/forms";
import { SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ShiftNear — Find nearby businesses. Get discovered." },
      {
        name: "description",
        content:
          "ShiftNear is a Nigerian local discovery marketplace in pre-launch. Join early access or reserve a seat for ShiftNear Live on 1 December 2026.",
      },
    ],
  }),
  component: HomePage,
});

const PATHS = [
  {
    kicker: "For customers",
    title: "Look up what is actually nearby.",
    body: "Search by area and need, then reach a business directly. No more relying only on group chats.",
    to: "/customers",
    label: "How discovery works",
  },
  {
    kicker: "For vendors",
    title: "Be easier to find in the places you serve.",
    body: "A clear offer, a real service area and a contact that works. Founding onboarding is free.",
    to: "/vendors",
    label: "Vendor onboarding",
  },
  {
    kicker: "1 December 2026",
    title: "ShiftNear Live, a free webinar.",
    body: "A practical session on visibility, discovery and getting a business ready for 2027.",
    to: "/webinar",
    label: "See the programme",
  },
] as const;

function HomePage() {
  return (
    <SiteShell>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="eyebrow">Pre-launch · Nigeria</p>
            <h1 className="display mt-5 max-w-xl">
              Find what is near you. <span className="text-brand">Get discovered.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-muted">
              ShiftNear is a local discovery marketplace for customers looking for businesses around them, and for vendors who want those people to find them. We are opening in stages, starting with a clear profile, a real location and an honest introduction.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#access" className="inline-flex min-h-12 items-center bg-brand px-5 text-sm font-semibold text-paper hover:bg-brand-deep">
                Join early access
              </a>
              <Link to="/webinar" className="inline-flex min-h-12 items-center border border-line px-5 text-sm font-semibold hover:bg-tint">
                Webinar · 1 December
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-line py-5 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-bold tracking-wide text-faint uppercase">Founding vendors</dt>
                <dd className="mt-1 text-sm font-extrabold">Onboarding is free</dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-wide text-faint uppercase">Where</dt>
                <dd className="mt-1 text-sm font-extrabold">Lagos first, then Nigeria</dd>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <dt className="text-xs font-bold tracking-wide text-faint uppercase">Next gathering</dt>
                <dd className="mt-1 text-sm font-extrabold">Tuesday, 1 Dec 2026</dd>
              </div>
            </dl>
          </div>
          <figure className="relative mx-auto w-full max-w-md bg-tint lg:max-w-none">
            <img
              src="/media/ayinde.jpg"
              alt="Ayinde Olatunde Emmanuel, founder of ShiftNear"
              className="aspect-[4/5] w-full object-cover object-[center_18%]"
            />
              <figcaption className="absolute inset-x-0 bottom-0 bg-ink px-5 py-4 text-paper">
              <span className="block text-sm font-bold">Ayinde Olatunde Emmanuel</span>
              <span className="mt-1 block text-xs text-tint">Founder · ShiftNear</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-line bg-card">
        <Wrap className="!py-0 md:!py-0">
          <div className="grid md:grid-cols-3">
            {PATHS.map((item, index) => (
              <article
                key={item.to}
                className={`py-10 md:px-8 md:py-12 ${index > 0 ? "border-t border-line md:border-t-0 md:border-l" : "md:pl-0"}`}
              >
                <p className="eyebrow">{item.kicker}</p>
                <h2 className="mt-4 text-xl font-extrabold tracking-tight">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                <Link to={item.to} className="mt-5 inline-flex min-h-11 items-center text-sm font-bold text-brand-deep">
                  {item.label}
                </Link>
              </article>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="border-b border-line">
        <Wrap>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">The problem</p>
              <h2 className="title mt-4">Good local businesses are still hard to find.</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-pretty text-muted">
                People ask in WhatsApp groups, comment sections and neighbourhood chats. Useful vendors stay invisible to the customer two streets away. ShiftNear is being built so discovery starts with where you are, not with whoever shouts the loudest.
              </p>
            </div>
            <ol className="border-t border-line">
              {[
                ["01", "A clear offer", "What the business does, in one sentence a neighbour can understand."],
                ["02", "A real service area", "The neighbourhoods and cities they can actually serve."],
                ["03", "A direct introduction", "Customers reach the business. We do not guarantee a sale."],
              ].map(([n, title, body]) => (
                <li key={n} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-5">
                  <span className="text-sm font-extrabold text-brand">{n}</span>
                  <div>
                    <h3 className="font-extrabold tracking-tight">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Wrap>
      </section>

      <section className="bg-ink text-paper">
        <Wrap>
          <div className="grid items-end gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="kicker text-tint">ShiftNear Live</p>
              <h2 className="title mt-4 text-paper">Get your business ready for 2027.</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-tint">
                A free online webinar on Tuesday, 1 December 2026. Woli Arole joins as special guest. Ayinde Olatunde Emmanuel hosts. Time and joining link will be announced.
              </p>
            </div>
            <Link
              to="/webinar"
              className="inline-flex min-h-12 items-center justify-center bg-paper px-5 text-sm font-semibold text-ink hover:bg-tint"
            >
              Reserve a free seat
            </Link>
          </div>
        </Wrap>
      </section>

      <section id="access">
        <Wrap>
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Early access</p>
              <h2 className="title mt-4">Be first when a neighbourhood opens.</h2>
              <p className="mt-4 text-sm leading-relaxed text-pretty text-muted">
                Tell us whether you are a customer, a vendor, or both. Vendor profiles are reviewed before anything is published. There is no fee during the founding phase.
              </p>
            </div>
            <div className="border border-line bg-card p-6 md:p-8">
              <EarlyAccessForm />
            </div>
          </div>
        </Wrap>
      </section>
    </SiteShell>
  );
}
