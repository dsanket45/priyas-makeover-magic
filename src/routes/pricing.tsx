import { createFileRoute } from "@tanstack/react-router";

import { ActionLink, PageHero, SiteFooter, SiteHeader } from "../components/site-chrome";
import { DetailList, Section, SectionHead } from "../components/page-parts";
import dressesImage from "../assets/priya-dresses.jpg";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Packages & Pricing | Priya Makeover" },
      {
        name: "description",
        content:
          "Bridal, party and rental packages at Priya Makeover — indicative pricing for makeup, hair, draping, jewellery and outfit rental.",
      },
      { property: "og:title", content: "Packages & pricing — Priya Makeover" },
      {
        property: "og:description",
        content: "Indicative pricing for bridal packages, party makeup, family styling and rental collections.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const packages = [
  {
    name: "Party & guest",
    price: "From ₹3,500",
    text: "For a single function where you want polished makeup and hair without a full bridal plan.",
    includes: ["Makeup & base", "Hair styling", "Saree or dupatta pinning", "Studio session, 90 minutes"],
  },
  {
    name: "Bridal signature",
    price: "From ₹18,000",
    text: "The most-booked package — the wedding-day look planned properly from trial to final touch-up.",
    includes: [
      "Makeup trial included",
      "HD or airbrush bridal base",
      "Hair set with ornaments",
      "Saree or lehenga draping",
      "Touch-up kit for the day",
      "One family member styled free",
    ],
    featured: true,
  },
  {
    name: "Complete wedding",
    price: "From ₹45,000",
    text: "Multiple functions covered end to end, with rentals bundled in and the whole family styled.",
    includes: [
      "Up to four functions",
      "Bridal jewellery set rental",
      "One outfit rental included",
      "Family styling for four",
      "On-location travel in city",
      "Dedicated assistant on the day",
    ],
  },
];

const rentalPricing = [
  { term: "Jewellery sets", detail: "From ₹2,500 per set for light festive pieces; heavy bridal sets from ₹6,000 for the rental window." },
  { term: "Hair ornaments", detail: "From ₹800, and included free with any bridal makeup package." },
  { term: "Festive outfits", detail: "Anarkalis, shararas and light lehengas from ₹3,000 for three days." },
  { term: "Bridal lehengas", detail: "From ₹8,000, including two fittings, alterations and professional cleaning." },
  { term: "Silk sarees", detail: "From ₹2,500, with pre-pleating and regional draping available." },
  { term: "Reception gowns", detail: "From ₹6,000, with trail pinning and shapewear guidance on the day." },
];

const notes = [
  { term: "Travel", detail: "In-city travel is included in bridal packages. Outstation travel and stay are quoted separately." },
  { term: "Advance", detail: "A booking advance confirms the date; the balance is settled on the day of the function." },
  { term: "Peak dates", detail: "Festive and peak wedding dates may carry a seasonal supplement — always confirmed before booking." },
  { term: "Group bookings", detail: "Four or more people styled in one session receive a reduced per-person rate." },
];

function PricingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader overlay />
      <PageHero
        eyebrow="Packages"
        title={
          <>
            Honest pricing, <em className="font-normal">before you book.</em>
          </>
        }
        intro="Indicative starting prices so you can plan. Every final quote is confirmed after we know your functions, venue and rental choices."
        image={dressesImage}
        alt="Rental outfits arranged in the studio"
      />

      <Section>
        <SectionHead
          eyebrow="Beauty packages"
          title={
            <>
              Three ways to <em>book the studio.</em>
            </>
          }
          intro="Packages can be combined or trimmed. If none of them fit your calendar, we build a custom quote instead."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.name}
              className={`flex h-full flex-col border p-8 ${
                item.featured ? "border-terracotta bg-soft-sage" : "border-border bg-card"
              }`}
            >
              {item.featured && <p className="eyebrow text-terracotta">Most booked</p>}
              <h3 className="mt-3 font-display text-3xl">{item.name}</h3>
              <p className="mt-2 font-display text-4xl text-terracotta">{item.price}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {item.includes.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-terracotta" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-2">
                <ActionLink to="/contact">Enquire</ActionLink>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          These figures are indicative examples for the site and should be replaced with the studio's confirmed rate card.
        </p>
      </Section>

      <Section tone="sage">
        <SectionHead
          eyebrow="Rental rates"
          title={
            <>
              Jewellery, ornaments <em>& outfits.</em>
            </>
          }
        />
        <DetailList items={rentalPricing} />
      </Section>

      <Section tone="forest">
        <SectionHead
          eyebrow="Good to know"
          muted
          title={
            <>
              Travel, advance <em>& peak dates.</em>
            </>
          }
        />
        <DetailList items={notes} />
        <div className="mt-10">
          <ActionLink to="/contact" light>
            Request a full quote
          </ActionLink>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}
