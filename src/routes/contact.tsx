import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ActionLink, PageHero, SiteFooter, SiteHeader } from "../components/site-chrome";
import { CardGrid, DetailList, Section, SectionHead } from "../components/page-parts";
import { Button } from "../components/ui/button";
import { useLanguage } from "../lib/language";
import jewelleryImage from "../assets/priya-jewellery.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact & Booking | Priya Makeover Studio" },
      {
        name: "description",
        content:
          "Send your wedding dates, functions and styling preferences to Priya Makeover and get availability for bridal makeup, hair and rentals.",
      },
      { property: "og:title", content: "Contact & booking — Priya Makeover" },
      {
        property: "og:description",
        content: "Share your dates and functions to check availability for bridal makeup, hair, jewellery and dress rentals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const occasions = [
  "Bridal (wedding day)",
  "Engagement / reception",
  "Haldi / mehndi",
  "Party / festive makeup",
  "Jewellery & ornament rental",
  "Dress rental only",
];

const howItWorks = [
  {
    meta: "Step 01",
    title: "Send your details",
    text: "Share your dates, functions, venue city and the kind of look you have in mind.",
  },
  {
    meta: "Step 02",
    title: "Availability & quote",
    text: "You receive open slots, a package suggestion and rental options that match your outfit.",
  },
  {
    meta: "Step 03",
    title: "Trial & confirmation",
    text: "A booking advance holds the date, and a trial can be scheduled before the wedding morning.",
  },
];

const goodToKnow = [
  { term: "Response time", detail: "Enquiries are usually answered the same day, within studio hours." },
  { term: "Studio hours", detail: "Monday to Sunday, 9am to 8pm, by appointment only." },
  { term: "Travel", detail: "In-city venue travel is included with bridal packages; outstation travel is quoted separately." },
  { term: "Contact details", detail: "Phone number, WhatsApp and studio address still need to be supplied by the studio." },
];

function ContactPage() {
  const { pick } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    contact: "",
    date: "",
    occasion: occasions[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (key: keyof typeof form, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader overlay />
      <PageHero
        eyebrow={pick("Contact & booking", "ಸಂಪರ್ಕ ಮತ್ತು ಬುಕ್ಕಿಂಗ್")}
        title={
          <>
            {pick(<>Let’s hold your <em className="font-normal">date.</em></>, <>ನಿಮ್ಮ <em className="font-normal">ದಿನಾಂಕ ಕಾಯ್ದಿರಿಸೋಣ.</em></>)}
          </>
        }
        intro={pick("Tell Priya about your celebration — the dates, the functions and the look you're dreaming of — and prepare a complete enquiry.", "ನಿಮ್ಮ ಸಮಾರಂಭ, ದಿನಾಂಕ, ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ನೀವು ಬಯಸುವ ಲುಕ್ ತಿಳಿಸಿ — ಸಂಪೂರ್ಣ ವಿಚಾರಣೆಯನ್ನು ಸಿದ್ಧಪಡಿಸಿ.")}
        image={jewelleryImage}
        alt="Kundan bridal jewellery from the rental collection"
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHead
               eyebrow={pick("Enquiry", "ವಿಚಾರಣೆ")}
              title={
                <>
                   {pick(<>Share your <em>details.</em></>, <>ನಿಮ್ಮ <em>ವಿವರಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ.</em></>)}
                </>
              }
               intro={pick("Fill this in to prepare the exact information the studio needs for availability, packages and rental suggestions.", "ಲಭ್ಯತೆ, ಪ್ಯಾಕೇಜ್ ಮತ್ತು ಬಾಡಿಗೆ ಸಲಹೆಗೆ ಸ್ಟುಡಿಯೋಗೆ ಬೇಕಾದ ಸರಿಯಾದ ಮಾಹಿತಿಯನ್ನು ಇಲ್ಲಿ ಸಿದ್ಧಪಡಿಸಿ.")}
            />

            <form
              className="mt-10 space-y-6"
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                   <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{pick("Your name", "ನಿಮ್ಮ ಹೆಸರು")}</span>
                  <input
                    required
                    value={form.name}
                    onChange={(event) => update("name", event.target.value)}
                    className="mt-2 w-full border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-terracotta"
                     placeholder={pick("Full name", "ಪೂರ್ಣ ಹೆಸರು")}
                  />
                </label>
                <label className="block">
                   <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{pick("Phone or email", "ಫೋನ್ ಅಥವಾ ಇಮೇಲ್")}</span>
                  <input
                    required
                    value={form.contact}
                    onChange={(event) => update("contact", event.target.value)}
                    className="mt-2 w-full border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-terracotta"
                     placeholder={pick("How Priya can reach you", "ಪ್ರಿಯಾ ನಿಮ್ಮನ್ನು ಹೇಗೆ ಸಂಪರ್ಕಿಸಬಹುದು")}
                  />
                </label>
                <label className="block">
                   <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{pick("Event date", "ಕಾರ್ಯಕ್ರಮದ ದಿನಾಂಕ")}</span>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(event) => update("date", event.target.value)}
                    className="mt-2 w-full border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-terracotta"
                  />
                </label>
                <label className="block">
                   <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{pick("Occasion", "ಸಮಾರಂಭ")}</span>
                  <select
                    value={form.occasion}
                    onChange={(event) => update("occasion", event.target.value)}
                    className="mt-2 w-full border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-terracotta"
                  >
                    {occasions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                   {pick("Functions, outfit & look", "ಕಾರ್ಯಕ್ರಮ, ಉಡುಪು ಮತ್ತು ಲುಕ್")}
                </span>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(event) => update("message", event.target.value)}
                  className="mt-2 w-full border border-border bg-card px-4 py-3 text-sm leading-relaxed outline-none transition-colors focus:border-terracotta"
                   placeholder={pick("Number of functions, venue city, outfit colours, jewellery you own, and any look you love.", "ಕಾರ್ಯಕ್ರಮಗಳ ಸಂಖ್ಯೆ, ಸ್ಥಳ, ಉಡುಪಿನ ಬಣ್ಣ, ನಿಮ್ಮ ಆಭರಣ ಮತ್ತು ಇಷ್ಟದ ಲುಕ್ ತಿಳಿಸಿ.")}
                />
              </label>
               <Button type="submit" variant="ghost" className="action-link rounded-none px-0">
                 <span>{pick("Prepare enquiry", "ವಿಚಾರಣೆ ಸಿದ್ಧಪಡಿಸಿ")}</span>
               </Button>
              {sent && (
                <p role="status" className="text-sm text-terracotta">
                   {pick(
                     <>Thank you, {form.name || "friend"} — your details are ready. The studio’s real contact method must be added before this can be delivered.</>,
                     <>ಧನ್ಯವಾದಗಳು, {form.name || "ಸ್ನೇಹಿತರೆ"} — ನಿಮ್ಮ ವಿವರಗಳು ಸಿದ್ಧವಾಗಿವೆ. ಇದನ್ನು ಕಳುಹಿಸಲು ಸ್ಟುಡಿಯೋದ ನಿಜವಾದ ಸಂಪರ್ಕ ವಿಧಾನವನ್ನು ಸೇರಿಸಬೇಕು.</>,
                   )}
                </p>
              )}
            </form>
          </div>

          <aside className="border border-border bg-card p-8">
            <p className="eyebrow text-terracotta">Good to know</p>
            <h3 className="mt-3 font-display text-3xl leading-tight">Before you write</h3>
            <DetailList items={goodToKnow} />
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Bringing a photo of your outfit and any jewellery you already own helps Priya plan the complete look in one
              conversation.
            </p>
            <div className="mt-8">
              <ActionLink to="/pricing">See packages</ActionLink>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="sage">
        <SectionHead
          eyebrow="How booking works"
          title={
            <>
              Three simple <em>steps.</em>
            </>
          }
        />
        <CardGrid items={howItWorks} />
      </Section>

      <Section tone="terracotta">
        <SectionHead
          eyebrow="Visit the studio"
          muted
          title={
            <>
              Come see the <em>collection.</em>
            </>
          }
          intro="Jewellery, ornaments and rental outfits are best chosen in person, against your skin tone and your outfit."
        />
        <div className="mt-10">
          <ActionLink to="/location" light>
            Studio location
          </ActionLink>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}
