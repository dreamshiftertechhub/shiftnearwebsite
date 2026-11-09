import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-lg font-extrabold tracking-tight">DREAMSHIFTER <span className="text-brand">TECH HUB</span></p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">Empowering Dreams, Driving Change. Building digital products and technology-led solutions with purpose.</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-muted">
            <Link to="/dreamshifter" className="hover:text-ink">About</Link>
            <Link to="/customers" className="hover:text-ink">ShiftNear</Link>
            <Link to="/challenge" className="hover:text-ink">Initiatives</Link>
            <Link to="/contact" className="hover:text-ink">Contact</Link>
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5 text-xs text-faint">
          <span>© {new Date().getFullYear()} Dreamshifter Tech Hub. All rights reserved.</span>
          <Link to="/admin" className="font-semibold hover:text-ink">Team desk</Link>
        </div>
      </div>
    </footer>
  );
}
