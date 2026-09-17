import { createFileRoute } from "@tanstack/react-router";

import { ActionLink, PageHero, SiteFooter, SiteHeader } from "../components/site-chrome";
import { CardGrid, DetailList, Section, SectionHead } from "../components/page-parts";
import heroImage from "../assets/priya-bridal-hero.jpg";
import hairImage from "../assets/priya-hair-look.jpg";
import mehndiImage from "../assets/priya-mehndi-detail.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services | Bridal Makeup, Hair & Draping — Priya Makeover" },
      {
        name: "description",
        content:
          "Bridal, engagement, reception and festive makeup, hair styling, saree draping and cultural looks at Priya Makeover studio.",
      },
      { property: "og:title", content: "Services at Priya Makeover" },
      {
        property: "og:description",
        content: "Complete Indian bridal beauty — makeup, hair, draping and cultural styling for every ceremony.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const coreServices = [
  {
    meta: "Signature",
    title: "Full bridal look",
    text: "The complete wedding-day transformation, planned in advance with a trial and finished on the morning itself.",
    points: ["HD or airbrush base", "Eye styling & lashes", "Hair set & draping", "Touch-up kit for the day"],
  },
  {
    meta: "Ceremony",
    title: "Engagement & roka",
    text: "Softer, camera-friendly glam for smaller family functions where you still want to look luminous.",
    points: ["Dewy or satin finish", "Hair styling", "Jewellery placement"],
  },
  {
    meta: "Ceremony",
    title: "Reception glam",
    text: "Bolder eyes, sculpted contour and evening-light finish that holds through a full night of photos.",
    points: ["Smokey or metallic eye", "Body & neck balancing", "Gown or saree draping"],
  },
  {
    meta: "Ritual",
    title: "Haldi & mehndi",
    text: "Fresh, breathable looks for daytime rituals with floral hair styling and comfortable long-wear base.",
    points: ["Minimal base", "Floral braid or bun", "Sweat-resistant setting"],
  },
  {
    meta: "Family",
    title: "Guest & family styling",
    text: "Makeup and hair for mothers, sisters and friends, booked alongside the bride in the same session.",
    points: ["Party makeup", "Blow-dry & curls", "Saree pleating"],
  },
  {
    meta: "Cultural",
    title: "Regional bridal looks",
    text: "South Indian, Bengali, Marathi, Punjabi and Gujarati bridal styling with correct traditional details.",
    points: ["Regional hair & ornaments", "Bindi & sindoor detailing", "Drape per tradition"],
  },
];

const addOns = [
  { term: "Makeup trial", detail: "A full practice look before the wedding so nothing is decided in a rush on the day." },
  { term: "Saree & dupatta draping", detail: "Nivi, Bengali, Gujarati, mermaid and lehenga-style drapes, pinned to hold all day." },
  { term: "Hair extensions & padding", detail: "Volume, length and structure for braids and buns, colour-matched to your hair." },
  { term: "Nail & finishing touches", detail: "Simple nail prep, brow shaping and skin prep before the base goes on." },
  { term: "On-location service", detail: "The team travels to your home, hotel or venue with full studio kit." },
  { term: "Second-day styling", detail: "Return styling for reception or post-wedding functions at a reduced rate." },
];

function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader overlay />
      <PageHero
        eyebrow="Makeup · Hair · Draping"
        title={
          <>
            Every ceremony, <em className="font-normal">styled with care.</em>
          </>
        }
        intro="From the first haldi morning to the last reception photo, each service is planned around your outfit, your rituals and how you want to feel."
        image={heroImage}
        alt="Bride with completed bridal makeup and jewellery"
      />

      <Section>
        <SectionHead
          eyebrow="What we do"
          title={
            <>
              Services for the <em>whole wedding week.</em>
            </>
          }
          intro="Book a single look or the full calendar. Every booking includes a consultation about skin, outfit colours and jewellery before the date."
        />
        <CardGrid items={coreServices} />
      </Section>

      <Section tone="sage">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHead
              eyebrow="Add to any booking"
              title={
                <>
                  The details that <em>finish a look.</em>
                </>
              }
            />
            <DetailList items={addOns} />
            <div className="mt-10">
              <ActionLink to="/pricing">See package pricing</ActionLink>
            </div>
          </div>
          <div className="grid gap-5">
            <div className="image-frame group aspect-[4/5]">
              <img src={hairImage} alt="Bridal braid styled with jasmine flowers" loading="lazy" className="gallery-image" />
            </div>
            <div className="image-frame group aspect-[16/10]">
              <img src={mehndiImage} alt="Mehndi hands with bridal bangles" loading="lazy" className="gallery-image" />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="forest">
        <SectionHead
          eyebrow="How a booking works"
          muted
          title={
            <>
              Four calm steps, <em>no guesswork.</em>
            </>
          }
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Enquiry", "Share your dates, functions and venue. We check availability and hold the date."],
            ["02", "Consultation", "Outfit photos, jewellery and inspiration are reviewed together to shape the look."],
            ["03", "Trial", "An optional practice look, adjusted until the finish feels right for you."],
            ["04", "The day", "The team arrives early with the full kit, rentals and touch-up essentials."],
          ].map(([step, title, text]) => (
            <li key={step}>
              <p className="font-display text-5xl text-peach">{step}</p>
              <h3 className="mt-3 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-hero-foreground/75">{text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <ActionLink to="/contact" light>
            Start your enquiry
          </ActionLink>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}
