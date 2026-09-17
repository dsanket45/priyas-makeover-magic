import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ActionLink, PageHero, SiteFooter, SiteHeader } from "../components/site-chrome";
import { Section, SectionHead } from "../components/page-parts";
import heroImage from "../assets/priya-bridal-hero.jpg";
import hairImage from "../assets/priya-hair-look.jpg";
import jewelleryImage from "../assets/priya-jewellery.jpg";
import dressesImage from "../assets/priya-dresses.jpg";
import mehndiImage from "../assets/priya-mehndi-detail.jpg";

export const Route = createFileRoute("/lookbook")({
  component: LookbookPage,
  head: () => ({
    meta: [
      { title: "Bridal Lookbook | Priya Makeover" },
      {
        name: "description",
        content:
          "Browse the Priya Makeover lookbook — bridal makeup, hair artistry, mehndi details, jewellery styling and rental outfits by ceremony.",
      },
      { property: "og:title", content: "Priya Makeover bridal lookbook" },
      {
        property: "og:description",
        content: "Selected bridal makeup, hair, jewellery and outfit looks from the studio, grouped by ceremony.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const filters = ["All", "Bridal", "Hair", "Ornaments", "Rentals"] as const;

const looks = [
  { image: heroImage, title: "Terracotta muhurtham", tag: "Bridal", note: "HD base, warm bronze eye, kundan layering", ratio: "aspect-[3/4]" },
  { image: hairImage, title: "Jasmine & silk braid", tag: "Hair", note: "Traditional braid with fresh gajra", ratio: "aspect-[3/4]" },
  { image: jewelleryImage, title: "Polki choker study", tag: "Ornaments", note: "Choker, rani haar and chandbali set", ratio: "aspect-[4/5]" },
  { image: dressesImage, title: "Rust & sage rail", tag: "Rentals", note: "Bridal lehenga with silk saree pairing", ratio: "aspect-[3/4]" },
  { image: mehndiImage, title: "Mehndi morning", tag: "Bridal", note: "Fresh base, bangle stacks, soft lip", ratio: "aspect-[4/5]" },
  { image: hairImage, title: "Sculpted reception bun", tag: "Hair", note: "Volume padding with pearl pins", ratio: "aspect-[3/4]" },
];

function LookbookPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? looks : looks.filter((look) => look.tag === active);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader overlay />
      <PageHero
        eyebrow="Selected work"
        title={
          <>
            Looks from the <em className="font-normal">studio floor.</em>
          </>
        }
        intro="A growing edit of bridal, hair, ornament and rental styling — each one built around a real ceremony and a real outfit."
        image={mehndiImage}
        alt="Mehndi detail with bridal bangles"
      />

      <Section>
        <SectionHead
          eyebrow="Lookbook"
          title={
            <>
              Browse by <em>what you need.</em>
            </>
          }
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={active === filter}
              className={`border px-5 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                active === filter
                  ? "border-terracotta bg-terracotta text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-terracotta hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((look) => (
            <figure key={look.title} className="group animate-fade-in">
              <div className={`image-frame ${look.ratio}`}>
                <img src={look.image} alt={look.title} loading="lazy" className="gallery-image" />
              </div>
              <figcaption className="mt-4">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-2xl">{look.title}</span>
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">{look.tag}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{look.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section tone="terracotta">
        <SectionHead
          eyebrow="In their words"
          muted
          title={
            <>
              Brides on the <em>morning of.</em>
            </>
          }
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            ["“I looked like myself, only luminous. Nothing felt heavy, even after twelve hours.”", "Bridal makeup & hair"],
            ["“The jewellery and lehenga were styled together, so I never had to think about matching.”", "Rental styling"],
            ["“My mother and sisters were done in the same session, calmly, on time.”", "Family styling"],
          ].map(([quote, meta]) => (
            <blockquote key={meta}>
              <p className="font-display text-2xl leading-snug">{quote}</p>
              <footer className="mt-4 text-xs uppercase tracking-wide opacity-70">{meta}</footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-12">
          <ActionLink to="/contact" light>
            Book your look
          </ActionLink>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}
