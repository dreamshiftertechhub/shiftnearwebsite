import { createFileRoute } from "@tanstack/react-router";
import { CustomerForm } from "@/components/forms";
import { PageIntro, SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/customers")({
  head: () => ({
    meta: [
      { title: "For customers — ShiftNear" },
      {
        name: "description",
        content: "How ShiftNear will help people discover nearby businesses, products and services in Nigeria.",
      },
    ],
  }),
  component: CustomersPage,
});

const STEPS = [
  ["Choose an area", "Start with where you are, or the neighbourhood you are asking about."],
  ["Name the need", "Food, fashion, beauty, repairs, home services or a creative skill."],
  ["Read a real profile", "What they offer, where they serve, and how to reach them."],
  ["Contact them directly", "Usually on WhatsApp. The relationship stays between you and the business."],
];

const NEEDS = [
  ["Food", "Meals, catering, bakers and small kitchens."],
  ["Fashion", "Tailors, ready-to-wear and stylists."],
  ["Beauty", "Hair, makeup, grooming and skincare."],
  ["Repairs", "Phones, appliances, electrical and plumbing."],
  ["Home", "Cleaning, laundry, fitting and small jobs."],
  ["Creative", "Photo, print, design and events."],
];

function CustomersPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="For customers"
        title="Stop asking five group chats for the same recommendation."
        lede="ShiftNear is for people who want a calmer way to find a business near them. You will be able to look by area and need, then contact the vendor yourself."
      />
      <section className="border-b border-line bg-card">
        <Wrap>
          <ol className="grid gap-0 md:grid-cols-4">
            {STEPS.map(([title, body], index) => (
              <li key={title} className={`py-6 md:px-6 md:py-2 ${index ? "border-t border-line md:border-t-0 md:border-l" : "md:pl-0"}`}>
                <span className="text-xs font-extrabold text-brand">0{index + 1}</span>
                <h2 className="mt-3 font-extrabold tracking-tight">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </li>
            ))}
          </ol>
        </Wrap>
      </section>
      <Wrap>
        <p className="eyebrow">What people look for</p>
        <h2 className="title mt-4 max-w-xl">Everyday businesses, named clearly.</h2>
        <div className="mt-8 grid border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {NEEDS.map(([title, body]) => (
            <article key={title} className="border-b border-line py-6 sm:px-6 sm:odd:pl-0 lg:[&:nth-child(3n+1)]:pl-0">
              <h3 className="font-extrabold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
          Discovery will open in stages. Early areas and categories depend on which vendors complete profiles and which customers tell us what they actually need.
        </p>
      </Wrap>
      <section className="border-t border-line bg-card">
        <Wrap>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Tell us your area</p>
              <h2 className="title mt-4">What should be easy to find near you?</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                A short note is enough. We use it to decide where to open first, not to sell your number.
              </p>
            </div>
            <CustomerForm />
          </div>
        </Wrap>
      </section>
    </SiteShell>
  );
}
