import { createFileRoute } from "@tanstack/react-router";

import { ActionLink, PageHero, SiteFooter, SiteHeader } from "../components/site-chrome";
import { CardGrid, DetailList, Section, SectionHead } from "../components/page-parts";
import dressesImage from "../assets/priya-dresses.jpg";

export const Route = createFileRoute("/location")({
  component: LocationPage,
  head: () => ({
    meta: [
      { title: "Studio Location & Hours | Priya Makeover" },
      {
        name: "description",
        content:
          "Find the Priya Makeover studio, opening hours, parking guidance and the areas covered for on-location bridal makeup and rentals.",
      },
      { property: "og:title", content: "Visit the Priya Makeover studio" },
      {
        property: "og:description",
        content: "Studio hours, directions, parking and on-location coverage for bridal makeup, hair and rentals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const hours = [
  { term: "Monday — Friday", detail: "9:00am — 8:00pm, by appointment. Trials are best booked on weekday afternoons." },
  { term: "Saturday & Sunday", detail: "7:00am — 9:00pm. Wedding-morning slots start early and fill first." },
  { term: "Bridal mornings", detail: "Early slots from 4:00am are available on request for muhurtham timings." },
  { term: "Festive season", detail: "Extended hours during wedding and festival months; walk-ins are not accepted." },
];

const visiting = [
  {
    meta: "In studio",
    title: "The studio space",
    text: "A private styling room, a rental rail and a jewellery display — enough room for the bride plus three family members.",
    points: ["Private bridal room", "Fitting area with full mirrors", "Seating for family"],
  },
  {
    meta: "Getting here",
    title: "Directions & parking",
    text: "Street parking is available beside the building, with autos and cabs easy to find at the main road junction.",
    points: ["Ground-floor access", "Two-wheeler parking in front", "Cab drop at the main gate"],
  },
  {
    meta: "On location",
    title: "We travel to you",
    text: "The team can bring the full kit and rentals to your home, hotel or venue for wedding-day styling.",
    points: ["City-wide travel included", "Outstation quoted separately", "Early-morning setup"],
  },
];

function LocationPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader overlay />
      <PageHero
        eyebrow="Visit us"
        title={
          <>
            Find the <em className="font-normal">studio.</em>
          </>
        }
        intro="Come in for a consultation, a trial or a rental fitting — or have the team travel to your venue on the day."
        image={dressesImage}
        alt="The Priya Makeover studio rental rail"
      />

      <Section>
        <SectionHead
          eyebrow="The address"
          title={
            <>
              Studio details <em>& hours.</em>
            </>
          }
          intro="The exact street address, map pin and phone number still need to be supplied by the studio — send them over and they will appear here."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="border border-border bg-card p-8">
            <p className="eyebrow text-terracotta">Address</p>
            <p className="mt-4 font-display text-3xl leading-snug">Priya Makeover Studio</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Street address, area and city to be added.
              <br />
              Landmark and map pin to be added.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">Phone & WhatsApp: to be added</p>
          </div>
          <div className="border border-border bg-card p-8">
            <p className="eyebrow text-terracotta">Appointments</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Every visit is by appointment so the studio stays private for one bride at a time. Bring your outfit, or a
              photo of it, and any jewellery you already own.
            </p>
            <div className="mt-8">
              <ActionLink to="/contact">Request an appointment</ActionLink>
            </div>
          </div>
        </div>
        <DetailList items={hours} />
      </Section>

      <Section tone="sage">
        <SectionHead
          eyebrow="Planning your visit"
          title={
            <>
              What to expect <em>when you arrive.</em>
            </>
          }
        />
        <CardGrid items={visiting} />
      </Section>

      <Section tone="forest">
        <SectionHead
          eyebrow="Areas covered"
          muted
          title={
            <>
              On-location <em>service.</em>
            </>
          }
          intro="City-wide bridal styling with the full kit, plus outstation weddings when travel and stay are arranged in advance."
        />
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-wide text-hero-foreground/80">
          <span>Home styling</span>
          <span>Hotel suites</span>
          <span>Banquet halls</span>
          <span>Temple weddings</span>
          <span>Resort venues</span>
          <span>Outstation (on request)</span>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}
