import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ActionLink, PageHero, SiteFooter, SiteHeader } from "../components/site-chrome";
import { CardGrid, DetailList, Section, SectionHead } from "../components/page-parts";
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
        eyebrow="Contact & booking"
        title={
          <>
            Let’s hold your <em className="font-normal">date.</em>
          </>
        }
        intro="Tell Priya about your celebration — the dates, the functions and the look you're dreaming of — and get a clear answer on availability."
        image={jewelleryImage}
        alt="Kundan bridal jewellery from the rental collection"
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHead
              eyebrow="Enquiry"
              title={
                <>
                  Share your <em>details.</em>
                </>
              }
              intro="Fill this in and the studio will get back with availability, packages and rental suggestions."
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
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Your name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(event) => update("name", event.target.value)}
                    className="mt-2 w-full border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-terracotta"
                    placeholder="Full name"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Phone or email</span>
                  <input
                    required
                    value={form.contact}
                    onChange={(event) => update("contact", event.target.value)}
                    className="mt-2 w-full border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-terracotta"
                    placeholder="How Priya can reach you"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Event date</span>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(event) => update("date", event.target.value)}
                    className="mt-2 w-full border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-terracotta"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Occasion</span>
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
                  Functions, outfit & look
                </span>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(event) => update("message", event.target.value)}
                  className="mt-2 w-full border border-border bg-card px-4 py-3 text-sm leading-relaxed outline-none transition-colors focus:border-terracotta"
                  placeholder="Number of functions, venue city, outfit colours, jewellery you own, and any look you love."
                />
              </label>
              <button type="submit" className="action-link">
                <span>Send enquiry</span>
              </button>
              {sent && (
                <p role="status" className="text-sm text-terracotta">
                  Thank you, {form.name || "friend"} — your details are ready to send. The studio’s phone, WhatsApp and email
                  still need to be added before this enquiry can be delivered.
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
