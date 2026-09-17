import { createFileRoute } from "@tanstack/react-router";

import { ActionLink, PageHero, SiteFooter, SiteHeader } from "../components/site-chrome";
import { DetailList, Section, SectionHead, Stat } from "../components/page-parts";
import heroImage from "../assets/priya-bridal-hero.jpg";
import hairImage from "../assets/priya-hair-look.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Priya | The Studio Behind Priya Makeover" },
      {
        name: "description",
        content:
          "Meet Priya — the artist behind Priya Makeover — and learn how the studio approaches Indian bridal makeup, hair, draping and rentals.",
      },
      { property: "og:title", content: "About Priya Makeover" },
      {
        property: "og:description",
        content: "The story, philosophy and studio practice behind Priya Makeover's bridal beauty and rental atelier.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const philosophy = [
  { term: "Skin first", detail: "Prep, tone-matching and comfort come before product. A base that suits your skin lasts longer and photographs kinder." },
  { term: "Tradition, respected", detail: "Regional details are researched, not improvised — from drape style to the placement of a maang tikka." },
  { term: "One vision", detail: "Because makeup, hair, jewellery and outfit are handled together, nothing clashes on the day." },
  { term: "Calm mornings", detail: "Timings are planned backwards from your muhurtham so no one is rushed into a photograph." },
  { term: "Hygiene", detail: "Disposable applicators, sanitised brushes between clients and freshly cleaned ornaments as standard." },
];

const journey = [
  ["Beginnings", "A home studio with a single kit, styling friends and neighbourhood brides for festive functions."],
  ["Training", "Formal HD and airbrush training, followed by specialised study in regional bridal hair and draping."],
  ["The atelier", "The rental rail begins — jewellery first, then outfits — so brides could book one complete look."],
  ["Today", "A full studio for bridal beauty, family styling and rentals, working across weddings and festive seasons."],
];

function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader overlay />
      <PageHero
        eyebrow="The studio"
        title={
          <>
            Behind the brush, <em className="font-normal">Priya.</em>
          </>
        }
        intro="A studio built on the belief that a bride should recognise herself in the mirror — elevated, comfortable and completely at ease."
        image={heroImage}
        alt="Bridal look created at Priya Makeover studio"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <SectionHead
              eyebrow="Our story"
              title={
                <>
                  A studio grown <em>one bride at a time.</em>
                </>
              }
              intro="Priya Makeover began with a single makeup kit and word-of-mouth bookings. It grew because brides kept asking for one more thing — hair, then draping, then jewellery, then the outfit itself."
            />
            <div className="mt-12 space-y-8">
              {journey.map(([title, text]) => (
                <div key={title} className="border-l-2 border-terracotta pl-6">
                  <h3 className="font-display text-2xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="image-frame group aspect-[4/5]">
            <img src={hairImage} alt="Bridal hair styling in progress" loading="lazy" className="gallery-image" />
          </div>
        </div>
      </Section>

      <Section tone="terracotta">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <Stat value="500+" label="Looks created" />
          <Stat value="9" label="Years styling brides" />
          <Stat value="200+" label="Rental pieces" />
          <Stat value="7" label="Days a week, by appointment" />
        </div>
      </Section>

      <Section tone="sage">
        <SectionHead
          eyebrow="How we work"
          title={
            <>
              The studio <em>philosophy.</em>
            </>
          }
        />
        <DetailList items={philosophy} />
        <div className="mt-10 flex flex-wrap gap-8">
          <ActionLink to="/services">See the services</ActionLink>
          <ActionLink to="/contact">Meet Priya</ActionLink>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}
