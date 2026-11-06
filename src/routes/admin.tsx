import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { removeLead, useLeads, waLink, type Lead, type LeadKind } from "@/lib/leads";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [{ title: "Team desk — ShiftNear" }, { name: "robots", content: "noindex" }],
  }),
  component: AdminPage,
});

const PASS = "shiftnear-live";
const SESSION = "shiftnear.admin";

const FILTERS = ["All", "Webinar", "Vendors", "Customers", "Early access", "Contact", "Challenge", "Pitch"] as const;
type Filter = (typeof FILTERS)[number];

const KIND_LABEL: Record<LeadKind, string> = {
  webinar: "Webinar",
  vendor: "Vendor",
  customer: "Customer",
  early: "Early access",
  contact: "Contact",
  challenge: "Challenge",
};

function matches(lead: Lead, filter: Filter) {
  if (filter === "All") return true;
  if (filter === "Pitch") return lead.pitch;
  if (filter === "Webinar") return lead.kind === "webinar";
  if (filter === "Vendors") return lead.kind === "vendor" || lead.role === "Vendor" || lead.role === "Both";
  if (filter === "Customers") return lead.kind === "customer" || lead.role === "Customer" || lead.role === "Both";
  if (filter === "Early access") return lead.kind === "early";
  if (filter === "Contact") return lead.kind === "contact";
  if (filter === "Challenge") return lead.kind === "challenge";
  return true;
}

function csvEscape(value: string) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function AdminPage() {
  const leads = useLeads();
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  useEffect(() => {
    if (sessionStorage.getItem(SESSION) === "1") setUnlocked(true);
  }, []);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return leads
      .filter((lead) => matches(lead, filter))
      .filter((lead) => {
        if (!q) return true;
        return [lead.id, lead.name, lead.phone, lead.email, lead.area, lead.business, lead.message, lead.state, lead.topic]
          .join(" ")
          .toLowerCase()
          .includes(q);
      });
  }, [leads, filter, query]);

  const stats = [
    ["All notes", leads.length],
    ["Webinar", leads.filter((lead) => lead.kind === "webinar").length],
    ["Vendor interest", leads.filter((lead) => lead.kind === "vendor" || (lead.kind === "early" && lead.role !== "Customer")).length],
    ["Pitch requests", leads.filter((lead) => lead.pitch).length],
  ];

  function unlock(event: FormEvent) {
    event.preventDefault();
    if (password.trim() === PASS) {
      sessionStorage.setItem(SESSION, "1");
      setUnlocked(true);
      setPassError("");
    } else setPassError("That passcode is not right.");
  }

  function lock() {
    sessionStorage.removeItem(SESSION);
    setUnlocked(false);
    setPassword("");
  }

  function exportCsv() {
    const header = ["Reference", "Kind", "Name", "WhatsApp", "Email", "State", "Area", "Role", "Business", "Topic", "Pitch", "Message", "Saved"];
    const body = rows.map((lead) =>
      [lead.id, KIND_LABEL[lead.kind], lead.name, lead.phone, lead.email, lead.state, lead.area, lead.role, lead.business, lead.topic, lead.pitch ? "Yes" : "No", lead.message, lead.at]
        .map(csvEscape)
        .join(","),
    );
    const csv = [header.map(csvEscape).join(","), ...body].join("\n");
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    link.download = "shiftnear-leads.csv";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-line">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          <Link to="/" className="font-extrabold tracking-tight">
            Shift<span className="text-brand">Near</span>
            <span className="ml-2 text-sm font-semibold text-muted">Team desk</span>
          </Link>
          <div className="flex items-center gap-4 text-sm font-semibold">
            <Link to="/" className="text-muted hover:text-ink">
              View site
            </Link>
            {unlocked ? (
              <button type="button" onClick={lock} className="text-muted hover:text-ink">
                Lock
              </button>
            ) : null}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        {!unlocked ? (
          <form onSubmit={unlock} className="mx-auto mt-10 max-w-md border border-line bg-card p-6 md:p-8">
            <p className="eyebrow">Team only</p>
            <h1 className="mt-3 text-2xl font-extrabold tracking-tight">Open the desk</h1>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Preview passcode: <span className="font-bold text-ink">shiftnear-live</span>
            </p>
            <label className="mt-6 block text-sm font-semibold">
              Passcode
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full border border-line bg-paper px-3 py-3 text-sm font-medium outline-none focus:border-brand"
                autoComplete="current-password"
              />
            </label>
            {passError ? (
              <p className="mt-3 text-sm font-semibold text-danger" role="alert">
                {passError}
              </p>
            ) : null}
            <button type="submit" className="mt-5 min-h-12 w-full bg-brand text-sm font-semibold text-paper hover:bg-brand-deep">
              Open
            </button>
          </form>
        ) : (
          <>
            <div className="border border-warn/30 bg-warn-bg px-4 py-3 text-sm leading-relaxed text-warn">
              <strong>Operations preview.</strong> These notes live in this browser only. Connect a secure database before collecting real attendee or vendor data for a public campaign.
            </div>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
              <h1 className="title">Registrations and enquiries</h1>
              <button type="button" onClick={exportCsv} className="min-h-11 border border-line bg-card px-4 text-sm font-semibold hover:bg-tint">
                Export CSV
              </button>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-px bg-line md:grid-cols-4">
              {stats.map(([label, value]) => (
                <div key={String(label)} className="bg-card px-4 py-5">
                  <p className="text-3xl font-extrabold tracking-tight tabular-nums">{value}</p>
                  <p className="mt-1 text-xs font-semibold text-muted">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 md:flex-row">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search name, phone, area, business"
                className="min-h-11 flex-1 border border-line bg-card px-3 text-sm outline-none focus:border-brand"
              />
            </div>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {FILTERS.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={`min-h-10 shrink-0 px-3 text-xs font-bold ${filter === item ? "bg-ink text-paper" : "border border-line bg-card text-ink"}`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="mt-4 overflow-x-auto border border-line bg-card">
              <table className="w-full min-w-[860px] border-collapse text-left text-sm">
                <thead className="bg-paper text-xs tracking-wide text-muted uppercase">
                  <tr>
                    {["Reference", "Person", "WhatsApp", "Where", "Intent", "Note", "Saved", ""].map((heading) => (
                      <th key={heading} className="px-3 py-3 font-bold">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="px-3 py-12 text-center text-muted">
                        Nothing here yet. Registrations from this browser will appear after someone submits a form.
                      </td>
                    </tr>
                  ) : (
                    rows.map((lead) => (
                      <tr key={lead.id} className="border-t border-line align-top">
                        <td className="px-3 py-3 font-mono text-xs font-bold">{lead.id}</td>
                        <td className="px-3 py-3">
                          <span className="font-bold">{lead.name}</span>
                          {lead.email ? <span className="mt-1 block text-xs text-muted">{lead.email}</span> : null}
                        </td>
                        <td className="px-3 py-3">
                          {lead.phone ? (
                            <a href={waLink(lead.phone)} target="_blank" rel="noreferrer" className="font-semibold text-brand-deep">
                              {lead.phone}
                            </a>
                          ) : (
                            "—"
                          )}
                        </td>
                        <td className="px-3 py-3 text-muted">
                          {[lead.area, lead.state].filter(Boolean).join(", ") || "—"}
                        </td>
                        <td className="px-3 py-3">
                          <span className="inline-block bg-tint px-2 py-1 text-xs font-bold text-brand-deep">{KIND_LABEL[lead.kind]}</span>
                          {lead.role ? <span className="mt-1 block text-xs text-muted">{lead.role}</span> : null}
                          {lead.pitch ? <span className="mt-1 block text-xs font-bold text-warn">Pitch requested</span> : null}
                          {lead.topic ? <span className="mt-1 block text-xs text-muted">{lead.topic}</span> : null}
                        </td>
                        <td className="px-3 py-3 text-muted">
                          {lead.business ? <span className="block text-ink">{lead.business}</span> : null}
                          {lead.message ? <span className="mt-1 block">{lead.message}</span> : null}
                          {!lead.business && !lead.message ? "—" : null}
                        </td>
                        <td className="px-3 py-3 text-xs text-muted tabular-nums">
                          {new Date(lead.at).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                        </td>
                        <td className="px-3 py-3">
                          <button
                            type="button"
                            className="text-xs font-bold text-danger"
                            onClick={() => {
                              if (confirm(`Delete ${lead.name}?`)) removeLead(lead.id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
