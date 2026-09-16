import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

export const navItems = [
  { label: "Services", to: "/services" },
  { label: "Rentals", to: "/rentals" },
  { label: "Lookbook", to: "/lookbook" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
] as const;

export const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

const MenuIcon = ({ open }: { open: boolean }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6">
    {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
  </svg>
);

export function ActionLink({
  to,
  children,
  light = false,
}: {
  to: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link to={to} className={light ? "action-link action-link-light" : "action-link"}>
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={
        overlay
          ? "absolute inset-x-0 top-0 z-30 border-b border-hero-foreground/20 text-hero-foreground"
          : "sticky top-0 z-30 border-b border-border bg-background/95 text-foreground backdrop-blur"
      }
    >
      <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" className="font-display text-[1.7rem] leading-none" aria-label="Priya Makeover home">
          Priya <em className="font-normal">Makeover</em>
        </Link>
        <nav className="hidden items-center gap-7 text-xs font-medium uppercase tracking-wide lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="nav-link" activeProps={{ className: "nav-link font-semibold" }}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="hidden border-b border-current pb-1 text-xs font-semibold uppercase tracking-wide sm:block">
          Book a date
        </Link>
        <button
          type="button"
          className={`grid size-10 place-items-center rounded-full border lg:hidden ${overlay ? "border-hero-foreground/40" : "border-border"}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>
      {menuOpen && (
        <nav className="border-t border-hero-foreground/20 bg-forest px-5 py-6 text-hero-foreground lg:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-4 font-display text-3xl">
            {[...navItems, { label: "Contact", to: "/contact" }].map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-forest text-hero-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-4xl">Priya <em>Makeover</em></p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-hero-foreground/70">
            Indian bridal makeup, hair and draping, with jewellery, ornaments and occasion wear available for rent — all under one roof.
          </p>
          <p className="mt-6 text-xs uppercase tracking-wide text-hero-foreground/55">
            Studio hours · Mon—Sun, 9am—8pm (by appointment)
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-hero-foreground/60">Explore</p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="text-hero-foreground/85">{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-hero-foreground/60">Visit & book</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-hero-foreground/85">
            <Link to="/contact">Enquiry & booking</Link>
            <Link to="/lookbook">Bridal lookbook</Link>
            <Link to="/pricing">Packages & pricing</Link>
            <span className="text-hero-foreground/55">Phone & address to be added</span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-hero-foreground/20 px-5 py-6 text-xs text-hero-foreground/55 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Priya Makeover. All looks styled in studio.</p>
        <p>Bridal · Engagement · Reception · Festive · Rentals</p>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  alt,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="hero-section relative min-h-[460px] text-hero-foreground">
      <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover object-[58%_30%]" width={1200} height={1504} />
      <div className="hero-wash absolute inset-0" />
      <div className="relative mx-auto flex min-h-[460px] max-w-screen-2xl items-end px-5 pb-14 pt-28 sm:px-8 lg:px-12">
        <div className="max-w-3xl animate-fade-in">
          <p className="mb-4 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-wide">
            <span className="h-px w-10 bg-current" /> {eyebrow}
          </p>
          <h1 className="font-display text-[clamp(3rem,6.5vw,6rem)] leading-[0.88]">{title}</h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-hero-foreground/80">{intro}</p>
        </div>
      </div>
    </section>
  );
}
