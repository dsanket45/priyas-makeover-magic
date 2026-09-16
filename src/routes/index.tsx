import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

import heroImage from "../assets/priya-bridal-hero.jpg";
import hairImage from "../assets/priya-hair-look.jpg";
import jewelleryImage from "../assets/priya-jewellery.jpg";
import dressesImage from "../assets/priya-dresses.jpg";
import mehndiImage from "../assets/priya-mehndi-detail.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Priya Makeover | Bridal Makeup, Hair & Rentals" },
      {
        name: "description",
        content:
          "Priya Makeover creates Indian bridal makeup and hair looks, with jewellery, ornaments and occasion dresses available for rent.",
      },
      { property: "og:title", content: "Priya Makeover | Bridal Beauty & Rentals" },
      {
        property: "og:description",
        content:
          "Indian bridal makeup, hair artistry, jewellery and occasion wear—thoughtfully styled as one complete look.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const services = [
  {
    number: "01",
    title: "Bridal artistry",
    text: "Makeup shaped around your features, outfit, jewellery and every ceremony on your wedding calendar.",
  },
  {
    number: "02",
    title: "Hair & draping",
    text: "From floral braids and sculpted buns to saree and dupatta setting, finished for long celebrations.",
  },
  {
    number: "03",
    title: "Cultural looks",
    text: "Traditional styling approached with care—honouring regional details while still feeling entirely like you.",
  },
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

const MenuIcon = ({ open }: { open: boolean }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6">
    {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
  </svg>
);

function ActionLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <a href={href} className={light ? "action-link action-link-light" : "action-link"}>
      <span>{children}</span>
      <Arrow />
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState(false);

  const showContactNotice = () => {
    setNotice(true);
    window.setTimeout(() => setNotice(false), 4200);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-hero-foreground/20 text-hero-foreground">
        <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="font-display text-[1.7rem] leading-none" aria-label="Priya Makeover home">
            Priya <em className="font-normal">Makeover</em>
          </a>
          <nav className="hidden items-center gap-9 text-xs font-medium uppercase tracking-wide md:flex" aria-label="Main navigation">
            <a href="#artistry" className="nav-link">Artistry</a>
            <a href="#rentals" className="nav-link">Rentals</a>
            <a href="#lookbook" className="nav-link">Lookbook</a>
            <a href="#story" className="nav-link">Studio</a>
          </nav>
          <a href="#enquire" className="hidden border-b border-current pb-1 text-xs font-semibold uppercase tracking-wide sm:block">
            Enquire now
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-hero-foreground/40 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-hero-foreground/20 bg-forest px-5 py-6 md:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-5 font-display text-3xl">
              {[["Artistry", "#artistry"], ["Rentals", "#rentals"], ["Lookbook", "#lookbook"], ["Studio", "#story"], ["Enquire", "#enquire"]].map(([label, href]) => (
                <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <section id="top" className="hero-section relative min-h-[760px] text-hero-foreground">
        <img src={heroImage} alt="Bride styled in terracotta bridal wear with kundan jewellery" width={1200} height={1504} className="absolute inset-0 h-full w-full object-cover object-[58%_28%]" />
        <div className="hero-wash absolute inset-0" />
        <div className="relative mx-auto flex min-h-[760px] max-w-screen-2xl items-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12">
          <div className="max-w-4xl animate-fade-in">
            <p className="mb-5 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-wide">
              <span className="h-px w-10 bg-current" /> Bridal beauty · Hair · Rental atelier
            </p>
            <h1 className="max-w-[13ch] font-display text-[clamp(4.5rem,9vw,9rem)] leading-[0.8]">
              Your beauty, <em className="font-normal">beautifully</em> remembered.
            </h1>
            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
              <ActionLink href="#enquire" light>Plan your look</ActionLink>
              <p className="max-w-sm text-sm leading-relaxed text-hero-foreground/80">
                Complete Indian bridal styling, thoughtfully composed from the first brushstroke to the final ornament.
              </p>
            </div>
          </div>
        </div>
        <p className="absolute bottom-6 right-6 hidden rotate-90 origin-bottom-right text-[0.62rem] uppercase tracking-wide text-hero-foreground/65 lg:block">
          Scroll to discover
        </p>
      </section>

      <section id="artistry" className="section-space">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <p className="eyebrow">The artistry</p>
              <h2 className="section-title mt-5">A look that still feels like <em>you.</em></h2>
            </div>
            <div className="lg:pt-14">
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Priya Makeover brings makeup, hair, draping and adornment into one considered vision—so every detail feels connected, comfortable and made for your celebration.
              </p>
              <div className="mt-12 divide-y divide-border border-y border-border">
                {services.map((service) => (
                  <article key={service.number} className="grid gap-3 py-7 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:items-start">
                    <span className="text-xs font-semibold text-terracotta">{service.number}</span>
                    <h3 className="font-display text-2xl">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lookbook" className="bg-soft-sage py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Selected details</p>
              <h2 className="section-title mt-4">Made for every <em>ritual.</em></h2>
            </div>
            <span className="hidden text-xs uppercase tracking-wide text-muted-foreground sm:block">Lookbook · 01—03</span>
          </div>
          <div className="grid gap-5 md:grid-cols-12 md:items-start">
            <figure className="group md:col-span-5">
              <div className="image-frame aspect-[3/4]">
                <img src={hairImage} alt="Traditional bridal braid with jasmine flowers" loading="lazy" width={912} height={1200} className="gallery-image" />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                <span className="font-display text-2xl">Jasmine & silk</span><span className="text-xs uppercase tracking-wide text-muted-foreground">Hair artistry</span>
              </figcaption>
            </figure>
            <figure className="group md:col-span-4 md:mt-28">
              <div className="image-frame aspect-[3/4]">
                <img src={mehndiImage} alt="Mehndi hands with bridal bangles and a flower" loading="lazy" width={912} height={1200} className="gallery-image" />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                <span className="font-display text-2xl">Quiet details</span><span className="text-xs uppercase tracking-wide text-muted-foreground">Bridal edit</span>
              </figcaption>
            </figure>
            <aside className="md:col-span-3 md:pl-5 md:pt-10">
              <span className="font-display text-7xl text-sage">“</span>
              <p className="-mt-5 font-display text-3xl leading-tight">Tradition isn’t a costume. It is a story, carried with grace.</p>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">Every look begins with your outfit, your rituals and the way you want to feel when the room turns toward you.</p>
            </aside>
          </div>
        </div>
      </section>

      <section id="rentals" className="section-space">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-6">
            <div className="lg:pr-20">
              <p className="eyebrow">The rental edit</p>
              <h2 className="section-title mt-5">The finishing pieces, <em>curated together.</em></h2>
              <p className="mt-7 max-w-lg leading-relaxed text-muted-foreground">
                Explore jewellery, ornaments and occasion wear selected to complement your complexion, ceremony and styling—without the pressure of buying every piece.
              </p>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-wide">
                <span>Kundan & polki</span><span>Hair ornaments</span><span>Lehengas</span><span>Sarees</span><span>Occasion dresses</span>
              </div>
              <div className="mt-10"><ActionLink href="#enquire">Ask about availability</ActionLink></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <figure>
                <div className="image-frame aspect-[3/4]"><img src={jewelleryImage} alt="Kundan jewellery available in the rental collection" loading="lazy" width={912} height={1200} className="gallery-image" /></div>
                <figcaption className="mt-3 font-display text-xl">Jewellery & ornaments</figcaption>
              </figure>
              <figure className="mt-16">
                <div className="image-frame aspect-[3/4]"><img src={dressesImage} alt="Terracotta lehenga and sage sari available for rent" loading="lazy" width={912} height={1200} className="gallery-image" /></div>
                <figcaption className="mt-3 font-display text-xl">Dresses & drapes</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="border-y border-border bg-terracotta text-primary-foreground">
        <div className="mx-auto grid max-w-screen-2xl lg:grid-cols-2">
          <div className="min-h-[480px] overflow-hidden lg:min-h-[680px]">
            <img src={heroImage} alt="Priya Makeover bridal makeup finish" loading="lazy" width={1200} height={1504} className="h-full w-full object-cover object-center" />
          </div>
          <div className="flex items-center px-6 py-16 sm:px-12 lg:px-20">
            <div className="max-w-xl">
              <p className="eyebrow text-primary-foreground/70">Priya Makeover</p>
              <h2 className="mt-5 font-display text-[clamp(3.3rem,6vw,6rem)] leading-[0.9]">One studio.<br /><em>Every detail.</em></h2>
              <p className="mt-8 text-base leading-relaxed text-primary-foreground/80">
                From wedding mornings to festive evenings, Priya Makeover is a calm place to shape your complete look. Makeup, hair, draping, jewellery and dress rentals come together with one clear eye and personal attention.
              </p>
              <div className="mt-10"><ActionLink href="#enquire" light>Meet Priya</ActionLink></div>
            </div>
          </div>
        </div>
      </section>

      <section id="enquire" className="bg-forest px-5 py-24 text-hero-foreground sm:px-8 sm:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow text-hero-foreground/65">Your date · Your look · Your story</p>
          <h2 className="mx-auto mt-6 max-w-[12ch] font-display text-[clamp(4rem,8vw,8rem)] leading-[0.82]">Let’s create something <em>unforgettable.</em></h2>
          <p className="mx-auto mt-7 max-w-lg text-sm leading-relaxed text-hero-foreground/70">
            Share your event date, functions and the style you love. Priya will help shape the complete look with you.
          </p>
          <button type="button" onClick={showContactNotice} className="action-link action-link-light mx-auto mt-10">
            <span>Enquire on WhatsApp</span><Arrow />
          </button>
          {notice && <p role="status" className="mt-5 text-sm text-peach">The studio’s WhatsApp number needs to be added before enquiries can open.</p>}
        </div>
      </section>

      <footer className="bg-forest text-hero-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-hero-foreground/20 px-5 py-9 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div><p className="font-display text-3xl">Priya <em>Makeover</em></p><p className="mt-1 text-xs text-hero-foreground/55">Bridal beauty · Hair · Jewellery & dress rentals</p></div>
          <div className="flex gap-6 text-xs uppercase tracking-wide text-hero-foreground/70"><a href="#artistry">Artistry</a><a href="#rentals">Rentals</a><a href="#top">Top ↑</a></div>
        </div>
      </footer>
    </main>
  );
}