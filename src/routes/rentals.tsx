import { createFileRoute } from "@tanstack/react-router";

import { ActionLink, PageHero, SiteFooter, SiteHeader } from "../components/site-chrome";
import { CardGrid, DetailList, Section, SectionHead } from "../components/page-parts";
import dressesImage from "../assets/priya-dresses.jpg";
import jewelleryImage from "../assets/priya-jewellery.jpg";

export const Route = createFileRoute("/rentals")({
  component: RentalsPage,
  head: () => ({
    meta: [
      { title: "Dress Rentals | Lehengas, Sarees & Gowns — Priya Makeover" },
      {
        name: "description",
        content:
          "Rent bridal lehengas, silk sarees, reception gowns and festive outfits from the Priya Makeover collection, styled with matching jewellery.",
      },
      { property: "og:title", content: "Dress & outfit rentals at Priya Makeover" },
      {
        property: "og:description",
        content: "Bridal lehengas, sarees, gowns and festive wear available for rent with fitting and styling included.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const collection = [
  {
    meta: "Bridal",
    title: "Wedding lehengas",
    text: "Heavy zardosi, gota and sequin lehengas in terracotta, rust, ivory, deep green and classic red.",
    points: ["Sizes XS–XXL with alteration", "Matching dupatta options", "Blouse padding & hooks adjusted"],
  },
  {
    meta: "Traditional",
    title: "Silk sarees",
    text: "Kanjeevaram, Banarasi, Paithani and soft silks for muhurtham, pooja and family functions.",
    points: ["Pre-pleating available", "Fall & pico checked", "Draped in your regional style"],
  },
  {
    meta: "Evening",
    title: "Reception gowns",
    text: "Trailing gowns, corset bodices and Indo-western drapes for reception and cocktail evenings.",
    points: ["Trail pinning", "Shapewear guidance", "Photo-friendly fabrics"],
  },
  {
    meta: "Festive",
    title: "Anarkalis & shararas",
    text: "Lighter festive sets for haldi, mehndi and sangeet where you need to move and dance.",
    points: ["Breathable linings", "Colour-coordinated sets", "Family sets available"],
  },
  {
    meta: "Groom & family",
    title: "Sherwanis & kurta sets",
    text: "A small curated men's rail so couple and family looks stay in one palette.",
    points: ["Sherwani with stole", "Bandhgala jackets", "Mojari styling advice"],
  },
  {
    meta: "Little ones",
    title: "Kids' festive wear",
    text: "Miniature lehengas and kurta sets for flower girls, page boys and cousins in the procession.",
    points: ["Ages 2–12", "Soft, non-scratch linings", "Simple ornament sets"],
  },
];

const rentalTerms = [
  { term: "Rental period", detail: "Standard rental covers three days — one before the function, the day itself and one for return." },
  { term: "Fittings", detail: "Two fittings are included: one at selection and one final adjustment close to the date." },
  { term: "Security deposit", detail: "A refundable deposit is held against damage and returned after the outfit is checked." },
  { term: "Cleaning", detail: "Professional cleaning is handled by the studio and included in the rental fee." },
  { term: "Reservations", detail: "Peak wedding dates are best reserved two to three months in advance." },
  { term: "Alterations", detail: "Minor length, waist and blouse adjustments are done in-house without damaging the garment." },
];

function RentalsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader overlay />
      <PageHero
        eyebrow="Rental atelier"
        title={
          <>
            Wear the outfit, <em className="font-normal">skip the closet.</em>
          </>
        }
        intro="A curated rail of bridal and festive wear, fitted and styled in studio so the outfit, jewellery and makeup all speak the same language."
        image={dressesImage}
        alt="Terracotta lehenga and sage saree from the rental collection"
      />

      <Section>
        <SectionHead
          eyebrow="The collection"
          title={
            <>
              Outfits for every <em>function on the card.</em>
            </>
          }
          intro="Pieces are chosen for how they photograph, how they move and how they sit with Indian jewellery — not just for the label."
        />
        <CardGrid items={collection} />
      </Section>

      <Section tone="sage">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="image-frame group aspect-[3/4]">
            <img src={jewelleryImage} alt="Kundan jewellery styled with a rental outfit" loading="lazy" className="gallery-image" />
          </div>
          <div>
            <SectionHead
              eyebrow="How renting works"
              title={
                <>
                  Clear terms, <em>no surprises.</em>
                </>
              }
            />
            <DetailList items={rentalTerms} />
            <div className="mt-10 flex flex-wrap gap-8">
              <ActionLink to="/ornaments">Browse jewellery</ActionLink>
              <ActionLink to="/contact">Check availability</ActionLink>
            </div>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}
