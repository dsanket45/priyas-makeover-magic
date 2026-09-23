import { createFileRoute, Link } from "@tanstack/react-router";

import { ActionLink, PageHero, SiteFooter, SiteHeader } from "../components/site-chrome";
import { CardGrid, Section, SectionHead, Stat } from "../components/page-parts";
import { useLanguage } from "../lib/language";
import heroImage from "../assets/priya-bridal-hero.jpg";
import hairImage from "../assets/priya-hair-look.jpg";
import jewelleryImage from "../assets/priya-jewellery.jpg";
import dressesImage from "../assets/priya-dresses.jpg";
import mehndiImage from "../assets/priya-mehndi-detail.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Priya Makeover | Bridal Makeup, Hair & Rental Atelier" },
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
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const services = [
  {
    meta: "01",
    title: "Bridal artistry",
    text: "Makeup shaped around your features, outfit, jewellery and every ceremony on your wedding calendar.",
    points: ["HD & airbrush base", "Trial before the day", "Multi-function packages"],
  },
  {
    meta: "02",
    title: "Hair & draping",
    text: "Floral braids, sculpted buns, saree and dupatta setting — finished to last through long celebrations.",
    points: ["Traditional & modern styles", "Saree and lehenga draping", "Hair ornament setting"],
  },
  {
    meta: "03",
    title: "Cultural looks",
    text: "Regional bridal styling approached with care — honouring the details while still feeling entirely like you.",
    points: ["South Indian & North Indian", "Festive and puja looks", "Family styling"],
  },
  {
    meta: "04",
    title: "Jewellery rental",
    text: "Kundan, polki, temple and pearl sets matched to your outfit, without buying pieces you wear once.",
    points: ["Bridal necklace sets", "Maang tikka & jhumkas", "Waist belts & bangles"],
  },
  {
    meta: "05",
    title: "Ornaments & accessories",
    text: "Hair ornaments, floral work, veils and finishing pieces that complete a bridal silhouette.",
    points: ["Jadai billai & flowers", "Kamarbandh & payal", "Dupatta pins and veils"],
  },
  {
    meta: "06",
    title: "Dress rental",
    text: "Lehengas, sarees, gowns and reception wear, fitted in-house before your function.",
    points: ["Bridal & reception wear", "In-house alterations", "Three-day rental window"],
  },
];

const journeySteps = [
  { meta: "Step 01", title: "Consultation", text: "Share your dates, functions and outfit so the look can be planned as one whole." },
  { meta: "Step 02", title: "Trial & selection", text: "Settle the base, eyes and hair, then choose jewellery, ornaments and rental outfits." },
  { meta: "Step 03", title: "Celebration day", text: "Priya arrives with a planned timeline so you are ready calmly, never rushed." },
];

const valueReasons = [
  {
    meta: "One vision",
    title: "Everything matches",
    text: "Makeup, hair, drape, jewellery and outfit are planned together, so no detail competes with another.",
  },
  {
    meta: "Less coordination",
    title: "Fewer vendors to manage",
    text: "One consultation can shape the full look, reducing repeated calls, separate trials and wedding-morning confusion.",
  },
  {
    meta: "Try before deciding",
    title: "See the complete combination",
    text: "Compare finishes, ornaments and rental pieces against your outfit before reserving what truly suits you.",
  },
  {
    meta: "Clear preparation",
    title: "Know what happens next",
    text: "A planned sequence for consultation, trial, fitting and celebration day helps everyone arrive prepared.",
  },
];

const valueReasonsKn = [
  { meta: "ಒಂದೇ ದೃಷ್ಟಿ", title: "ಎಲ್ಲವೂ ಹೊಂದಾಣಿಕೆ", text: "ಮೇಕಪ್, ಹೇರ್, ಡ್ರೇಪ್, ಆಭರಣ ಮತ್ತು ಉಡುಪನ್ನು ಒಟ್ಟಿಗೆ ಯೋಜಿಸುವುದರಿಂದ ಪ್ರತಿ ವಿವರ ಸಮತೋಲನದಲ್ಲಿರುತ್ತದೆ." },
  { meta: "ಕಡಿಮೆ ಗೊಂದಲ", title: "ಕಡಿಮೆ ಜನರೊಂದಿಗೆ ಸಂಯೋಜನೆ", text: "ಒಂದೇ ಸಮಾಲೋಚನೆಯಲ್ಲಿ ಪೂರ್ಣ ಲುಕ್ ರೂಪಿಸಬಹುದು; ಬೇರೆ ಬೇರೆ ಕರೆ, ಟ್ರಯಲ್ ಮತ್ತು ಮದುವೆ ದಿನದ ಗೊಂದಲ ಕಡಿಮೆಯಾಗುತ್ತದೆ." },
  { meta: "ನಿರ್ಧಾರಕ್ಕೂ ಮುನ್ನ ಟ್ರಯಲ್", title: "ಪೂರ್ಣ ಕಾಂಬಿನೇಷನ್ ನೋಡಿ", text: "ಕಾಯ್ದಿರಿಸುವ ಮುನ್ನ ನಿಮ್ಮ ಉಡುಪಿನೊಂದಿಗೆ ಫಿನಿಷ್, ಆಭರಣ ಮತ್ತು ಬಾಡಿಗೆ ವಸ್ತುಗಳನ್ನು ಹೋಲಿಸಿ ನೋಡಿ." },
  { meta: "ಸ್ಪಷ್ಟ ತಯಾರಿ", title: "ಮುಂದಿನ ಹಂತ ತಿಳಿಯಿರಿ", text: "ಸಮಾಲೋಚನೆ, ಟ್ರಯಲ್, ಫಿಟಿಂಗ್ ಮತ್ತು ಸಮಾರಂಭದ ದಿನದ ಸ್ಪಷ್ಟ ಕ್ರಮ ಎಲ್ಲರನ್ನೂ ಸಿದ್ಧವಾಗಿರಿಸುತ್ತದೆ." },
];

const occasionPaths = [
  { to: "/bridal-makeup", en: "Wedding day", kn: "ಮದುವೆಯ ದಿನ", detailEn: "Bridal makeup, trial and long-wear planning", detailKn: "ವಧು ಮೇಕಪ್, ಟ್ರಯಲ್ ಮತ್ತು ದೀರ್ಘಕಾಲದ ಯೋಜನೆ" },
  { to: "/cultural-looks", en: "Muhurtham & rituals", kn: "ಮುಹೂರ್ತ ಮತ್ತು ಶಾಸ್ತ್ರ", detailEn: "Kannada and regional styling with cultural care", detailKn: "ಕನ್ನಡ ಮತ್ತು ಪ್ರಾದೇಶಿಕ ಸಂಪ್ರದಾಯದ ಸ್ಟೈಲಿಂಗ್" },
  { to: "/hair-draping", en: "Engagement & reception", kn: "ನಿಶ್ಚಿತಾರ್ಥ ಮತ್ತು ರಿಸೆಪ್ಷನ್", detailEn: "Hair, saree, lehenga and dupatta finishing", detailKn: "ಹೇರ್, ಸೀರೆ, ಲೆಹೆಂಗಾ ಮತ್ತು ದುಪಟ್ಟಾ ಫಿನಿಷಿಂಗ್" },
  { to: "/rental-guide", en: "Outfit & jewellery rental", kn: "ಉಡುಪು ಮತ್ತು ಆಭರಣ ಬಾಡಿಗೆ", detailEn: "Selection, fittings, care, collection and return", detailKn: "ಆಯ್ಕೆ, ಫಿಟಿಂಗ್, ಕಾಳಜಿ, ಪಡೆಯುವಿಕೆ ಮತ್ತು ಹಿಂತಿರುಗಿಸುವಿಕೆ" },
] as const;

function Index() {
  const { pick } = useLanguage();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader overlay />

      <section className="hero-section relative min-h-[760px] text-hero-foreground">
        <img
          src={heroImage}
          alt="Bride styled in terracotta bridal wear with kundan jewellery"
          width={1200}
          height={1504}
          className="absolute inset-0 h-full w-full object-cover object-[58%_28%]"
        />
        <div className="hero-wash absolute inset-0" />
        <div className="relative mx-auto flex min-h-[760px] max-w-screen-2xl items-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12">
          <div className="max-w-4xl animate-fade-in">
            <p className="mb-5 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-wide">
              <span className="h-px w-10 bg-current" /> {pick("Bridal beauty · Hair · Rental atelier", "ವಧು ಸೌಂದರ್ಯ · ಹೇರ್ · ಬಾಡಿಗೆ ಅಟೆಲಿಯರ್")}
            </p>
            <h1 className="max-w-[13ch] font-display text-[clamp(4.5rem,9vw,9rem)] leading-[0.8]">
              {pick(<>Your beauty, <em className="font-normal">beautifully</em> remembered.</>, <>ನಿಮ್ಮ ಸೌಂದರ್ಯ, <em className="font-normal">ಸುಂದರ ನೆನಪಾಗಿ.</em></>)}
            </h1>
            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
              <ActionLink to="/contact" light>
                {pick("Plan your complete look", "ಪೂರ್ಣ ಲುಕ್ ಯೋಜಿಸಿ")}
              </ActionLink>
              <p className="max-w-sm text-sm leading-relaxed text-hero-foreground/80">
                {pick("Complete Indian bridal styling, thoughtfully composed from the first brushstroke to the final ornament.", "ಮೊದಲ ಮೇಕಪ್ ಸ್ಪರ್ಶದಿಂದ ಕೊನೆಯ ಆಭರಣದವರೆಗೆ, ಸಂಪೂರ್ಣ ಭಾರತೀಯ ವಧು ಸ್ಟೈಲಿಂಗ್.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="eyebrow text-terracotta">The artistry</p>
            <h2 className="section-title mt-5">
              A look that still feels like <em>you.</em>
            </h2>
          </div>
          <div className="lg:pt-6">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Priya Makeover brings makeup, hair, draping and adornment into one considered vision — so every detail feels
              connected, comfortable and made for your celebration.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
               <Stat value="01" label={pick("Plan the look", "ಲುಕ್ ಯೋಜನೆ")} />
               <Stat value="02" label={pick("Try & coordinate", "ಟ್ರಯಲ್ ಮತ್ತು ಹೊಂದಾಣಿಕೆ")} />
               <Stat value="03" label={pick("Reserve your date", "ದಿನಾಂಕ ಕಾಯ್ದಿರಿಸಿ")} />
            </div>
          </div>
        </div>
        <CardGrid items={services} />
        <div className="mt-12 flex flex-wrap gap-8">
          <ActionLink to="/services">All services in detail</ActionLink>
          <ActionLink to="/pricing">Packages & pricing</ActionLink>
        </div>
      </Section>

      <Section tone="forest">
        <SectionHead
          eyebrow={pick("Why choose the complete studio", "ಪೂರ್ಣ ಸ್ಟುಡಿಯೋ ಆಯ್ಕೆ ಯಾಕೆ")}
          muted
          title={pick(<>One celebration. <em>One considered plan.</em></>, <>ಒಂದೇ ಸಂಭ್ರಮ. <em>ಒಂದೇ ಸಮಗ್ರ ಯೋಜನೆ.</em></>)}
          intro={pick("Instead of coordinating makeup, hair, draping and rentals separately, build one look with every decision connected.", "ಮೇಕಪ್, ಹೇರ್, ಡ್ರೇಪಿಂಗ್ ಮತ್ತು ಬಾಡಿಗೆಯನ್ನು ಬೇರೆ ಬೇರೆ ಆಯೋಜಿಸುವ ಬದಲು, ಎಲ್ಲ ನಿರ್ಧಾರಗಳನ್ನು ಒಟ್ಟಿಗೆ ಜೋಡಿಸಿ ಒಂದೇ ಲುಕ್ ರೂಪಿಸಿ.")}
        />
        <CardGrid items={pick(valueReasons, valueReasonsKn)} />
        <div className="mt-10"><ActionLink to="/contact" light>{pick("Start with your event date", "ನಿಮ್ಮ ದಿನಾಂಕದಿಂದ ಆರಂಭಿಸಿ")}</ActionLink></div>
      </Section>

      <Section>
        <SectionHead
          eyebrow={pick("Find your starting point", "ನಿಮ್ಮ ಆರಂಭದ ಸೇವೆ ಆಯ್ಕೆಮಾಡಿ")}
          title={pick(<>What are you <em>planning?</em></>, <>ನೀವು ಏನು <em>ಯೋಜಿಸುತ್ತಿದ್ದೀರಿ?</em></>)}
          intro={pick("Choose the moment that is closest to yours. Each guide explains options, preparation and the next step.", "ನಿಮ್ಮ ಸಮಾರಂಭಕ್ಕೆ ಹತ್ತಿರವಾದ ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ. ಪ್ರತಿ ಮಾರ್ಗದರ್ಶಿಯಲ್ಲಿ ಆಯ್ಕೆಗಳು, ತಯಾರಿ ಮತ್ತು ಮುಂದಿನ ಹಂತವಿದೆ.")}
        />
        <div className="mt-12 grid border-l border-t border-border sm:grid-cols-2">
          {occasionPaths.map((item) => (
            <Link key={item.to} to={item.to} className="group flex min-h-40 items-end justify-between gap-6 border-b border-r border-border bg-card p-7 transition-colors hover:bg-soft-sage">
              <div><p className="font-display text-3xl leading-tight">{pick(item.en, item.kn)}</p><p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">{pick(item.detailEn, item.detailKn)}</p></div>
              <span className="shrink-0 text-terracotta transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="sage">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Selected details"
            title={
              <>
                Made for every <em>ritual.</em>
              </>
            }
          />
          <Link to="/lookbook" className="text-xs uppercase tracking-wide text-muted-foreground underline">
            View full lookbook
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-12 md:items-start">
          <figure className="group md:col-span-5">
            <div className="image-frame aspect-[3/4]">
              <img
                src={hairImage}
                alt="Traditional bridal braid with jasmine flowers"
                loading="lazy"
                width={912}
                height={1200}
                className="gallery-image"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between gap-4">
              <span className="font-display text-2xl">Jasmine & silk</span>
              <span className="text-xs uppercase tracking-wide text-muted-foreground">Hair artistry</span>
            </figcaption>
          </figure>
          <figure className="group md:col-span-4 md:mt-28">
            <div className="image-frame aspect-[3/4]">
              <img
                src={mehndiImage}
                alt="Mehndi hands with bridal bangles and a flower"
                loading="lazy"
                width={912}
                height={1200}
                className="gallery-image"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between gap-4">
              <span className="font-display text-2xl">Quiet details</span>
              <span className="text-xs uppercase tracking-wide text-muted-foreground">Bridal edit</span>
            </figcaption>
          </figure>
          <aside className="md:col-span-3 md:pl-5 md:pt-10">
            <span className="font-display text-7xl text-sage">“</span>
            <p className="-mt-5 font-display text-3xl leading-tight">
              Tradition isn’t a costume. It is a story, carried with grace.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Every look begins with your outfit, your rituals and the way you want to feel when the room turns toward you.
            </p>
          </aside>
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-6">
          <div className="lg:pr-20">
            <p className="eyebrow text-terracotta">The rental edit</p>
            <h2 className="section-title mt-5">
              The finishing pieces, <em>curated together.</em>
            </h2>
            <p className="mt-7 max-w-lg leading-relaxed text-muted-foreground">
              Explore jewellery, ornaments and occasion wear selected to complement your complexion, ceremony and styling —
              without the pressure of buying every piece.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-wide">
              <span>Kundan & polki</span>
              <span>Hair ornaments</span>
              <span>Lehengas</span>
              <span>Sarees</span>
              <span>Occasion dresses</span>
            </div>
            <div className="mt-10 flex flex-wrap gap-8">
              <ActionLink to="/rentals">Dress rentals</ActionLink>
              <ActionLink to="/ornaments">Jewellery & ornaments</ActionLink>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <figure>
              <div className="image-frame aspect-[3/4]">
                <img
                  src={jewelleryImage}
                  alt="Kundan jewellery available in the rental collection"
                  loading="lazy"
                  width={912}
                  height={1200}
                  className="gallery-image"
                />
              </div>
              <figcaption className="mt-3 font-display text-xl">Jewellery & ornaments</figcaption>
            </figure>
            <figure className="mt-16">
              <div className="image-frame aspect-[3/4]">
                <img
                  src={dressesImage}
                  alt="Terracotta lehenga and sage sari available for rent"
                  loading="lazy"
                  width={912}
                  height={1200}
                  className="gallery-image"
                />
              </div>
              <figcaption className="mt-3 font-display text-xl">Dresses & drapes</figcaption>
            </figure>
          </div>
        </div>
      </Section>

      <Section tone="sage">
        <SectionHead
          eyebrow="How it works"
          title={
            <>
              From first message to <em>celebration day.</em>
            </>
          }
        />
        <CardGrid items={journeySteps} />
      </Section>

      <section className="border-y border-border bg-terracotta text-primary-foreground">
        <div className="mx-auto grid max-w-screen-2xl lg:grid-cols-2">
          <div className="min-h-[480px] overflow-hidden lg:min-h-[680px]">
            <img
              src={heroImage}
              alt="Priya Makeover bridal makeup finish"
              loading="lazy"
              width={1200}
              height={1504}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex items-center px-6 py-16 sm:px-12 lg:px-20">
            <div className="max-w-xl">
              <p className="eyebrow opacity-70">Priya Makeover</p>
              <h2 className="mt-5 font-display text-[clamp(3.3rem,6vw,6rem)] leading-[0.9]">
                One studio.
                <br />
                <em>Every detail.</em>
              </h2>
              <p className="mt-8 text-base leading-relaxed text-primary-foreground/80">
                From wedding mornings to festive evenings, Priya Makeover is a calm place to shape your complete look. Makeup,
                hair, draping, jewellery and dress rentals come together with one clear eye and personal attention.
              </p>
              <div className="mt-10 flex flex-wrap gap-8">
                <ActionLink to="/about" light>
                  Meet Priya
                </ActionLink>
                <ActionLink to="/location" light>
                  Visit the studio
                </ActionLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest px-5 py-24 text-hero-foreground sm:px-8 sm:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow text-hero-foreground/65">Your date · Your look · Your story</p>
          <h2 className="mx-auto mt-6 max-w-[12ch] font-display text-[clamp(4rem,8vw,8rem)] leading-[0.82]">
            Let’s create something <em>unforgettable.</em>
          </h2>
          <p className="mx-auto mt-7 max-w-lg text-sm leading-relaxed text-hero-foreground/70">
            Share your event date, functions and the style you love. Priya will help shape the complete look with you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            <ActionLink to="/contact" light>
              Send an enquiry
            </ActionLink>
            <ActionLink to="/faq" light>
              Read the FAQ
            </ActionLink>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
