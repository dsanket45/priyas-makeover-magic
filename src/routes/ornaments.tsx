import { createFileRoute } from "@tanstack/react-router";

import { ActionLink, PageHero, SiteFooter, SiteHeader } from "../components/site-chrome";
import { CardGrid, DetailList, Section, SectionHead } from "../components/page-parts";
import jewelleryImage from "../assets/priya-jewellery.jpg";
import hairImage from "../assets/priya-hair-look.jpg";

export const Route = createFileRoute("/ornaments")({
  component: OrnamentsPage,
  head: () => ({
    meta: [
      { title: "Ornaments & Jewellery Rental | Priya Makeover" },
      {
        name: "description",
        content:
          "Rent kundan, polki, temple and antique bridal jewellery, hair ornaments, waist belts and accessory sets from Priya Makeover.",
      },
      { property: "og:title", content: "Ornaments & jewellery rental" },
      {
        property: "og:description",
        content: "Kundan, polki, temple and antique bridal jewellery sets available for rent and styled on the day.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const sets = [
  {
    meta: "Bridal set",
    title: "Kundan & polki",
    text: "Classic uncut-stone sets with pearl drops — the safest choice for red, maroon and rust lehengas.",
    points: ["Choker + long haar", "Matching jhumkas", "Maang tikka & nath"],
  },
  {
    meta: "South Indian",
    title: "Temple jewellery",
    text: "Antique-gold Lakshmi motifs, kasu malai and vanki for Kanjeevaram and muhurtham looks.",
    points: ["Kasu malai layers", "Vanki armlet", "Jada billai for braids"],
  },
  {
    meta: "Statement",
    title: "Antique & victorian",
    text: "Matte gold with soft stones for brides who want depth rather than sparkle.",
    points: ["Layered rani haar", "Chandbali earrings", "Antique waist belt"],
  },
  {
    meta: "Hair",
    title: "Hair ornaments",
    text: "Braid ornaments, gajra, pins and tiaras that hold heavy hair styling in place all day.",
    points: ["Jada & braid strings", "Fresh or fabric gajra", "Pearl and stone pins"],
  },
  {
    meta: "Waist & hands",
    title: "Belts & bangles",
    text: "Kamarbandh, bangle stacks, haath phool and rings to finish the silhouette.",
    points: ["Adjustable kamarbandh", "Bangle stacks by colour", "Haath phool sets"],
  },
  {
    meta: "Light wear",
    title: "Festive & guest sets",
    text: "Lighter oxidised, pearl and floral pieces for mehndi, sangeet and guest styling.",
    points: ["Oxidised silver", "Pearl chokers", "Floral jewellery sets"],
  },
];

const care = [
  { term: "Trial with the outfit", detail: "Jewellery is tried on with your outfit so metal tone, neckline and layering are matched properly." },
  { term: "Placement on the day", detail: "Every piece is pinned and secured by the team — nothing slips during the ceremony." },
  { term: "Skin-safe", detail: "Pieces are cleaned between clients, and nickel-sensitive skin can be flagged in advance." },
  { term: "Rental duration", detail: "Ornaments follow the same three-day rental window as outfits." },
  { term: "Deposit", detail: "A refundable deposit applies to heavy bridal sets and is returned on safe return." },
  { term: "Photo checklist", detail: "The team notes which pieces suit close-up photography so nothing disappears on camera." },
];

function OrnamentsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader overlay />
      <PageHero
        eyebrow="Ornamental collection"
        title={
          <>
            The pieces that <em className="font-normal">complete the story.</em>
          </>
        }
        intro="Kundan, polki, temple gold, antique sets and hair ornaments — chosen and placed to suit your face, neckline and tradition."
        image={jewelleryImage}
        alt="Kundan bridal jewellery set from the rental collection"
      />

      <Section>
        <SectionHead
          eyebrow="Sets available"
          title={
            <>
              Ornaments by <em>style and ritual.</em>
            </>
          }
          intro="Every set can be mixed — a temple haar with kundan earrings is often the look that photographs best."
        />
        <CardGrid items={sets} />
      </Section>

      <Section tone="sage">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHead
              eyebrow="Care & handling"
              title={
                <>
                  Handled like <em>heirlooms.</em>
                </>
              }
            />
            <DetailList items={care} />
            <div className="mt-10 flex flex-wrap gap-8">
              <ActionLink to="/rentals">See outfit rentals</ActionLink>
              <ActionLink to="/contact">Reserve a set</ActionLink>
            </div>
          </div>
          <div className="image-frame group aspect-[3/4]">
            <img src={hairImage} alt="Braid ornaments and jasmine styled into bridal hair" loading="lazy" className="gallery-image" />
          </div>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}
