import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/dreamshifter", label: "About" },
  { to: "/services", label: "What we do" },
  { to: "/projects", label: "Products & projects" },
  { to: "/initiatives", label: "Initiatives" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-[4.5rem] md:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex size-9 items-center justify-center bg-ink text-lg font-extrabold tracking-[-.08em] text-orange-400">D.</span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold tracking-tight">DREAMSHIFTER</span>
            <span className="block text-[0.62rem] font-bold tracking-[.19em] text-muted">TECH HUB</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-sm font-extrabold text-ink" }}
              inactiveProps={{ className: "text-sm font-semibold text-muted hover:text-ink" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden min-h-11 items-center bg-brand px-4 text-sm font-bold text-white hover:bg-brand-deep sm:inline-flex">
            Work with us
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-paper px-5 py-3 lg:hidden">
          {LINKS.map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setOpen(false)}
              activeProps={{ className: "flex min-h-11 items-center border-b border-line text-sm font-bold text-brand-deep last:border-0" }}
              inactiveProps={{ className: "flex min-h-11 items-center border-b border-line text-sm font-semibold text-ink last:border-0" }}>
              {item.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="mt-3 flex min-h-11 items-center justify-center bg-brand text-sm font-bold text-white">Work with us</Link>
        </nav>
      ) : null}
    </header>
  );
}
