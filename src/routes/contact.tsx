import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/forms";
import { PageIntro, SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dreamshifter Tech Hub" },
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
        lede="Project enquiries, partnerships and general questions. Tell us what you are looking to build, improve or solve."
      />
      <Wrap>
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-6 text-sm">
            <div className="border-t border-line pt-5">
              <p className="eyebrow">ShiftNear</p>
              <p className="mt-2 leading-relaxed text-muted">Product enquiries and collaboration around ShiftNear.</p>
            </div>
            <div className="border-t border-line pt-5">
              <p className="eyebrow">Dreamshifter</p>
              <p className="mt-2 leading-relaxed text-muted">Product design, software development, ICT support, digital learning and technology collaboration.</p>
            </div>
            <div className="border-t border-line pt-5">
              <p className="eyebrow">Response</p>
              <p className="mt-2 leading-relaxed text-muted">
                The enquiry form is currently in preview mode and does not send messages to Dreamshifter. We are completing the live contact workflow before accepting public enquiries.
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
