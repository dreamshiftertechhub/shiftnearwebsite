import { useState, type FormEvent, type ReactNode } from "react";
import { addLead, STATES, validEmail, validPhone, type LeadKind } from "@/lib/leads";

type Role = "Vendor" | "Customer" | "Both";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block text-sm font-semibold text-ink">
      {label}
      <span className="mt-2 block font-medium">{children}</span>
    </label>
  );
}

const control =
  "mt-0 w-full border border-line bg-paper px-3 py-3 text-sm font-medium text-ink outline-none placeholder:text-faint focus:border-brand focus:bg-card";

function Success({ title, body, reference }: { title: string; body: string; reference: string }) {
  return (
    <div className="border border-line bg-tint px-6 py-8" role="status">
      <p className="eyebrow">Saved</p>
      <h3 className="mt-3 text-2xl font-extrabold tracking-tight">{title}</h3>
      <p className="mt-3 font-mono text-sm text-brand-deep">Reference {reference}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}

function Note() {
  return (
    <p className="text-xs leading-relaxed text-faint">
      This preview keeps your details on this device and shows them in the team desk. A secure list will be used before any live campaign.
    </p>
  );
}

export function EarlyAccessForm() {
  return (
    <LeadForm
      kind="early"
      submitLabel="Join early access"
      successTitle="you’re on the early list."
      successBody="We’ll use this interest to shape the first neighbourhoods and the founding vendor group."
      fields={["name", "phone", "email", "state", "role", "business", "consent"]}
      consent="I agree that ShiftNear may contact me about early access and the December webinar."
    />
  );
}

export function WebinarForm() {
  return (
    <LeadForm
      kind="webinar"
      submitLabel="Reserve my seat"
      successTitle="your seat is reserved."
      successBody="The start time and joining link will be shared on the contact you provided once arrangements are confirmed."
      fields={["name", "phone", "email", "state", "area", "role", "business", "pitch", "consent"]}
      consent="I agree that ShiftNear may store my details and contact me about the webinar and founding vendor onboarding."
    />
  );
}

export function VendorForm() {
  return (
    <LeadForm
      kind="vendor"
      submitLabel="Register vendor interest"
      successTitle="your vendor interest is saved."
      successBody="Founding onboarding is free and subject to a completed profile and review. This is not a published listing yet."
      fields={["name", "phone", "email", "state", "area", "business", "message", "consent"]}
      roleFixed="Vendor"
      consent="I agree that ShiftNear may contact me about founding vendor onboarding."
      messageLabel="What do you offer, and who is it for?"
    />
  );
}

export function CustomerForm() {
  return (
    <LeadForm
      kind="customer"
      submitLabel="Tell us what you need nearby"
      successTitle="we’ll keep you posted."
      successBody="Customer discovery opens in stages. Your note helps us decide which categories and areas to prepare first."
      fields={["name", "phone", "state", "area", "message", "consent"]}
      roleFixed="Customer"
      consent="I agree that ShiftNear may contact me when discovery opens in my area."
      messageLabel="What would you like to find near you?"
    />
  );
}

export function ContactForm() {
  return (
    <LeadForm
      kind="contact"
      submitLabel="Send enquiry"
      successTitle="your enquiry is saved."
      successBody="Partnerships, press and support notes are collected here for the ShiftNear team to review."
      fields={["name", "email", "phone", "topic", "message", "consent"]}
      consent="I agree that ShiftNear may reply to this enquiry."
      messageLabel="How can we help?"
    />
  );
}

export function ChallengeForm() {
  return (
    <LeadForm
      kind="challenge"
      submitLabel="Notify me"
      successTitle="you’ll hear when it opens."
      successBody="DSHFT Challenge details are not final. This only saves your interest in the announcement."
      fields={["name", "email", "phone", "consent"]}
      consent="I agree to be contacted when DSHFT Challenge participation opens."
    />
  );
}

const TOPICS = ["Partnership", "Press", "Vendor support", "Customer question", "General"];

function LeadForm({
  kind,
  submitLabel,
  successTitle,
  successBody,
  fields,
  consent,
  roleFixed,
  messageLabel = "Message",
}: {
  kind: LeadKind;
  submitLabel: string;
  successTitle: string;
  successBody: string;
  fields: string[];
  consent: string;
  roleFixed?: Role;
  messageLabel?: string;
}) {
  const [error, setError] = useState("");
  const [done, setDone] = useState<{ name: string; id: string } | null>(null);
  const show = (name: string) => fields.includes(name);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const state = String(data.get("state") || "");
    const area = String(data.get("area") || "").trim();
    const role = roleFixed || String(data.get("role") || "");
    const business = String(data.get("business") || "").trim();
    const topic = String(data.get("topic") || "");
    const message = String(data.get("message") || "").trim();
    const pitch = data.get("pitch") === "on";
    const agreed = data.get("consent") === "on";

    if (name.length < 2) return setError("Please enter your name.");
    const phoneRequired = show("phone") && kind !== "contact";
    if (phoneRequired && !validPhone(phone)) return setError("Enter a valid WhatsApp number.");
    if (!phoneRequired && phone && !validPhone(phone)) return setError("Enter a valid WhatsApp number.");
    if (show("email") && kind !== "early" && kind !== "webinar" && !email) return setError("Please enter your email.");
    if (!validEmail(email)) return setError("That email doesn’t look right.");
    if (show("message") && message.length < 8) return setError("Add a short note so we know how to help.");
    if (!agreed) return setError("Please tick the consent box to continue.");

    const lead = addLead({
      kind,
      name,
      phone,
      email,
      state,
      area,
      role,
      business,
      pitch,
      topic,
      message,
    });
    setError("");
    setDone({ name: name.split(" ")[0] || name, id: lead.id });
  }

  if (done) {
    return <Success title={`${done.name}, ${successTitle}`} body={successBody} reference={done.id} />;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {show("name") ? (
          <Field label="Full name">
            <input className={control} name="name" autoComplete="name" placeholder="Your name" />
          </Field>
        ) : null}
        {show("phone") ? (
          <Field label={kind === "contact" ? "WhatsApp (optional)" : "WhatsApp number"}>
            <input className={control} name="phone" type="tel" autoComplete="tel" placeholder="0801 234 5678" />
          </Field>
        ) : null}
      </div>
      {show("email") ? (
        <Field label={kind === "early" || kind === "webinar" ? "Email (optional)" : "Email"}>
          <input className={control} name="email" type="email" autoComplete="email" placeholder="you@example.com" />
        </Field>
      ) : null}
      {show("state") || show("area") ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {show("state") ? (
            <Field label="State">
              <select className={control} name="state" defaultValue="Lagos">
                {STATES.map((state) => (
                  <option key={state}>{state}</option>
                ))}
              </select>
            </Field>
          ) : null}
          {show("area") ? (
            <Field label="Area or town">
              <input className={control} name="area" placeholder="e.g. Yaba" />
            </Field>
          ) : null}
        </div>
      ) : null}
      {show("role") ? (
        <fieldset>
          <legend className="text-sm font-semibold">I am joining as</legend>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {(["Vendor", "Customer", "Both"] as const).map((role) => (
              <label key={role} className="cursor-pointer">
                <input className="peer sr-only" type="radio" name="role" value={role} defaultChecked={role === "Vendor"} />
                <span className="flex min-h-11 items-center justify-center border border-line text-center text-xs font-bold peer-checked:border-brand peer-checked:bg-tint peer-checked:text-brand-deep peer-focus-visible:outline peer-focus-visible:outline-brand">
                  {role}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}
      {show("topic") ? (
        <Field label="Topic">
          <select className={control} name="topic" defaultValue="Partnership">
            {TOPICS.map((topic) => (
              <option key={topic}>{topic}</option>
            ))}
          </select>
        </Field>
      ) : null}
      {show("business") ? (
        <Field label="Your business or skill">
          <input className={control} name="business" placeholder="e.g. Makeup artist, plumber, caterer" />
        </Field>
      ) : null}
      {show("message") ? (
        <Field label={messageLabel}>
          <textarea className={`${control} min-h-28 resize-y`} name="message" />
        </Field>
      ) : null}
      {show("pitch") ? (
        <label className="flex items-start gap-3 text-sm text-muted">
          <input name="pitch" type="checkbox" className="mt-1 size-4 accent-brand" />
          <span>
            I am ready to <strong className="text-ink">pitch my business</strong> during the Live Connection Spotlight.
          </span>
        </label>
      ) : null}
      <label className="flex items-start gap-3 text-sm text-muted">
        <input name="consent" type="checkbox" className="mt-1 size-4 accent-brand" />
        <span>{consent}</span>
      </label>
      {error ? (
        <p className="text-sm font-semibold text-danger" role="alert">
          {error}
        </p>
      ) : null}
      <button type="submit" className="min-h-12 bg-brand px-5 text-sm font-semibold text-paper hover:bg-brand-deep">
        {submitLabel}
      </button>
      <Note />
    </form>
  );
}
