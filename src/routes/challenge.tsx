import { createFileRoute } from "@tanstack/react-router";
import { ChallengeForm } from "@/components/forms";
import { PageIntro, SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/challenge")({
  head: () => ({
    meta: [
      { title: "DSHFT Challenge — Coming soon" },
      {
        name: "description",
        content:
          "DSHFT Challenge is a coming-soon Dreamshifter initiative for bold ideas and people building what comes next.",
      },
    ],
  }),
  component: ChallengePage,
});

function ChallengePage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="A Dreamshifter initiative · Coming soon"
        title="DSHFT Challenge"
        lede="A new opportunity designed to spotlight bold ideas, creative problem-solving and people building what comes next. Participation details are not open yet."
      />
      <Wrap>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="border border-line bg-ink px-6 py-10 text-paper md:px-10">
              <p className="kicker text-tint">Not open</p>
              <p className="display mt-6 text-tint">DSHFT</p>
              <p className="kicker mt-3 text-paper">Challenge</p>
            </div>
            <ul className="mt-8 border-t border-line">
              {[
                ["What it is", "A structured moment to show work, not a vague talent show. The format will be published before anyone is asked to apply."],
                ["Who it is for", "People and small teams building ideas with technology, design or a local business problem worth solving."],
                ["What is not decided", "Dates, prizes, judges and how to enter. Those will not be invented ahead of the announcement."],
              ].map(([title, body]) => (
                <li key={title} className="border-b border-line py-5">
                  <h2 className="font-extrabold">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-line bg-card p-6 md:p-8">
            <h2 className="text-xl font-extrabold tracking-tight">Get the announcement</h2>
            <p className="mt-2 mb-6 text-sm leading-relaxed text-muted">
              Leave a way to reach you. We will write when participation information is real.
            </p>
            <ChallengeForm />
          </div>
        </div>
      </Wrap>
    </SiteShell>
  );
}
