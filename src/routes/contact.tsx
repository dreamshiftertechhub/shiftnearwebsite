import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/forms";
import { PageIntro, SiteShell, Wrap } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Start a Project — Dreamshifter Tech Hub" },
    { name: "description", content: "Talk to Dreamshifter Tech Hub about digital product design, web development, business technology solutions, training and partnerships." },
  ]}),
  component: ContactPage,
});

function ContactPage() {
  return <SiteShell>
    <PageIntro eyebrow="Contact & get started" title="Tell us what you're trying to build." lede="A website. An application. A digital platform. A better way to run your business. Whatever stage you're at, let's talk about the problem and work out what makes sense."/>
    <Wrap><div className="grid items-start gap-10 lg:grid-cols-[.8fr_1.2fr]">
      <div className="grid gap-6 text-sm">
        <div className="border-t border-line pt-5"><p className="eyebrow">Digital product design</p><p className="mt-2 leading-7 text-muted">You have an idea for a website or app and need the experience designed properly.</p></div>
        <div className="border-t border-line pt-5"><p className="eyebrow">Web development</p><p className="mt-2 leading-7 text-muted">You need a professional website, web application or custom platform.</p></div>
        <div className="border-t border-line pt-5"><p className="eyebrow">Business technology</p><p className="mt-2 leading-7 text-muted">You want to improve a process or find a practical digital solution.</p></div>
        <div className="border-t border-line pt-5"><p className="eyebrow">Training & partnerships</p><p className="mt-2 leading-7 text-muted">You want to learn a digital skill, collaborate or explore an opportunity.</p></div>
      </div>
      <div className="border border-line bg-card p-6 md:p-8"><h2 className="text-xl font-extrabold">Let's get the conversation started.</h2><p className="mt-2 mb-6 text-sm leading-6 text-muted">Tell us a little about what you need. We'll review your enquiry and follow up using the contact details you provide.</p><ContactForm/></div>
    </div></Wrap>
  </SiteShell>;
}
