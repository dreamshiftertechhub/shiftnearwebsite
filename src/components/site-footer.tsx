import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-lg font-extrabold tracking-tight">
              Shift<span className="text-brand">Near</span>
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
              A local discovery marketplace in pre-launch. Built by Dreamshifter Tech Hub.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-muted">
            <Link to="/about" className="hover:text-ink">
              About
            </Link>
            <Link to="/customers" className="hover:text-ink">
              Customers
            </Link>
            <Link to="/vendors" className="hover:text-ink">
              Vendors
            </Link>
            <Link to="/webinar" className="hover:text-ink">
              Webinar
            </Link>
            <Link to="/contact" className="hover:text-ink">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5 text-xs text-faint">
          <span>© 2026 ShiftNear. All rights reserved.</span>
          <Link to="/admin" className="font-semibold hover:text-ink">
            Team desk
          </Link>
        </div>
      </div>
    </footer>
  );
}
