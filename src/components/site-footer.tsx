import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return <footer className="border-t border-line bg-paper"><div className="mx-auto max-w-6xl px-5 py-10 md:px-8">
    <div className="grid gap-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
      <div><p className="text-lg font-black tracking-tight">DREAMSHIFTER <span className="text-brand">TECH HUB</span></p><p className="mt-3 max-w-sm text-sm leading-7 text-muted">We design digital products, build technology solutions and help people develop practical skills for the digital world.</p></div>
      <div><p className="text-xs font-extrabold tracking-[.14em] text-ink">EXPLORE</p><div className="mt-4 grid gap-3 text-sm font-semibold text-muted"><Link to="/dreamshifter" className="hover:text-brand">About</Link><Link to="/services" className="hover:text-brand">Services</Link><Link to="/projects" className="hover:text-brand">Our work</Link><Link to="/academy" className="hover:text-brand">Academy</Link><Link to="/contact" className="hover:text-brand">Contact</Link></div></div>
      <div><p className="text-xs font-extrabold tracking-[.14em] text-ink">OUR ECOSYSTEM</p><div className="mt-4 grid gap-3 text-sm font-semibold text-muted"><Link to="/shiftnear" className="hover:text-brand">Shiftnear</Link><Link to="/challenge" className="hover:text-brand">The DShift Challenge</Link><Link to="/initiatives" className="hover:text-brand">Other initiatives</Link></div></div>
    </div>
    <div className="mt-9 flex flex-wrap justify-between gap-3 border-t border-line pt-5 text-xs text-faint"><span>Built with purpose. Driven by possibility.</span><span>© {new Date().getFullYear()} Dreamshifter Tech Hub. All rights reserved.</span></div>
  </div></footer>;
}
