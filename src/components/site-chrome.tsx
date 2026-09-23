import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { useLanguage } from "../lib/language";
import { Button } from "./ui/button";

export const navItems = [
  { label: "Bridal", labelKn: "ವಧು ಮೇಕಪ್", to: "/bridal-makeup" },
  { label: "Hair & draping", labelKn: "ಹೇರ್ ಮತ್ತು ಡ್ರೇಪಿಂಗ್", to: "/hair-draping" },
  { label: "Cultural looks", labelKn: "ಸಾಂಸ್ಕೃತಿಕ ಲುಕ್", to: "/cultural-looks" },
  { label: "Rentals", labelKn: "ಬಾಡಿಗೆ", to: "/rentals" },
  { label: "Lookbook", labelKn: "ಲುಕ್‌ಬುಕ್", to: "/lookbook" },
] as const;

const moreItems = [
  { label: "All services", labelKn: "ಎಲ್ಲ ಸೇವೆಗಳು", to: "/services" },
  { label: "Jewellery & ornaments", labelKn: "ಆಭರಣಗಳು", to: "/ornaments" },
  { label: "Rental guide", labelKn: "ಬಾಡಿಗೆ ಮಾರ್ಗದರ್ಶಿ", to: "/rental-guide" },
  { label: "Pricing", labelKn: "ಬೆಲೆಗಳು", to: "/pricing" },
  { label: "About", labelKn: "ನಮ್ಮ ಬಗ್ಗೆ", to: "/about" },
  { label: "Location", labelKn: "ಸ್ಥಳ", to: "/location" },
  { label: "FAQ", labelKn: "ಪ್ರಶ್ನೆಗಳು", to: "/faq" },
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
  const { language, setLanguage, pick } = useLanguage();

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
        <nav className="hidden items-center gap-5 text-xs font-medium uppercase tracking-wide xl:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="nav-link" activeProps={{ className: "nav-link font-semibold" }}>
              {pick(item.label, item.labelKn)}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3 xl:ml-0">
          <div className="flex h-9 items-center border border-current/35 p-1 text-[0.65rem] font-bold uppercase" aria-label={pick("Choose language", "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ")}>
            <Button type="button" variant="ghost" size="sm" className={`h-7 rounded-none px-2 ${language === "en" ? "bg-current/15" : ""}`} aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</Button>
            <span aria-hidden="true" className="opacity-40">|</span>
            <Button type="button" variant="ghost" size="sm" className={`h-7 rounded-none px-2 ${language === "kn" ? "bg-current/15" : ""}`} aria-pressed={language === "kn"} onClick={() => setLanguage("kn")}>ಕನ್ನಡ</Button>
          </div>
          <Link to="/contact" className="hidden border-b border-current pb-1 text-xs font-semibold uppercase tracking-wide sm:block">
            {pick("Check your date", "ದಿನಾಂಕ ವಿಚಾರಿಸಿ")}
          </Link>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className={`grid size-10 place-items-center rounded-full border xl:hidden ${overlay ? "border-hero-foreground/40" : "border-border"}`}
          aria-label={menuOpen ? pick("Close menu", "ಮೆನು ಮುಚ್ಚಿ") : pick("Open menu", "ಮೆನು ತೆರೆಯಿರಿ")}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <MenuIcon open={menuOpen} />
        </Button>
      </div>
      {menuOpen && (
        <nav className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-hero-foreground/20 bg-forest px-5 py-6 text-hero-foreground xl:hidden" aria-label="Mobile navigation">
          <div className="grid gap-x-8 gap-y-4 font-display text-2xl sm:grid-cols-2">
            {[...navItems, ...moreItems, { label: "Contact", labelKn: "ಸಂಪರ್ಕ", to: "/contact" }].map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>
                {pick(item.label, item.labelKn)}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  const { pick } = useLanguage();
  return (
    <footer className="bg-forest text-hero-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-4xl">Priya <em>Makeover</em></p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-hero-foreground/70">
            {pick("Indian bridal makeup, hair and draping, with jewellery, ornaments and occasion wear available for rent — all under one roof.", "ಭಾರತೀಯ ವಧು ಮೇಕಪ್, ಹೇರ್, ಡ್ರೇಪಿಂಗ್, ಆಭರಣ ಮತ್ತು ಉಡುಪು ಬಾಡಿಗೆ — ಎಲ್ಲವೂ ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ.")}
          </p>
          <Link to="/contact" className="mt-6 inline-block border-b border-current pb-1 text-xs uppercase tracking-wide">{pick("Check availability", "ಲಭ್ಯತೆ ವಿಚಾರಿಸಿ")}</Link>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-hero-foreground/60">{pick("Explore", "ಅನ್ವೇಷಿಸಿ")}</p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="text-hero-foreground/85">{pick(item.label, item.labelKn)}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-hero-foreground/60">{pick("Plan & book", "ಯೋಜನೆ ಮತ್ತು ಬುಕ್ಕಿಂಗ್")}</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-hero-foreground/85">
            <Link to="/contact">{pick("Enquiry & booking", "ವಿಚಾರಣೆ ಮತ್ತು ಬುಕ್ಕಿಂಗ್")}</Link>
            <Link to="/rental-guide">{pick("Rental guide", "ಬಾಡಿಗೆ ಮಾರ್ಗದರ್ಶಿ")}</Link>
            <Link to="/pricing">{pick("Packages & pricing", "ಪ್ಯಾಕೇಜ್ ಮತ್ತು ಬೆಲೆ")}</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-hero-foreground/20 px-5 py-6 text-xs text-hero-foreground/55 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Priya Makeover.</p>
        <p>{pick("Bridal · Engagement · Reception · Festive · Rentals", "ವಧು · ನಿಶ್ಚಿತಾರ್ಥ · ರಿಸೆಪ್ಷನ್ · ಹಬ್ಬ · ಬಾಡಿಗೆ")}</p>
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
