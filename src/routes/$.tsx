import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/$")({
  head: () => ({ meta: [{ title: "Page not found — ShiftNear" }] }),
  component: MissingPage,
});

function MissingPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <p className="eyebrow">404</p>
        <h1 className="title mt-4">That page is not on ShiftNear.</h1>
        <Link to="/" className="mt-6 inline-flex min-h-11 items-center bg-brand px-4 text-sm font-semibold text-paper">
          Back home
        </Link>
      </div>
    </SiteShell>
  );
}
