import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/forms";
import { PageIntro, SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ShiftNear" },
      {
        name: "description",
        content: "Enquiries and partnerships for ShiftNear and Dreamshifter Tech Hub.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Contact"
        title="Enquiries and partnerships."
        lede="Press, partnerships, vendor support and general questions. Write clearly and include the best way to reply."
      />
      <Wrap>
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-6 text-sm">
            <div className="border-t border-line pt-5">
              <p className="eyebrow">ShiftNear</p>
              <p className="mt-2 leading-relaxed text-muted">Product questions, early access and the December webinar.</p>
            </div>
            <div className="border-t border-line pt-5">
              <p className="eyebrow">Dreamshifter</p>
              <p className="mt-2 leading-relaxed text-muted">Design, websites, technical support, training and the DSHFT Challenge.</p>
            </div>
            <div className="border-t border-line pt-5">
              <p className="eyebrow">Response</p>
              <p className="mt-2 leading-relaxed text-muted">
                This preview stores the note on this device for the team desk. Use it to shape the enquiry. A live mailbox will replace it before a public campaign.
              </p>
            </div>
          </div>
          <div className="border border-line bg-card p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </Wrap>
    </SiteShell>
  );
}
