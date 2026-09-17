import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ActionLink, PageHero, SiteFooter, SiteHeader } from "../components/site-chrome";
import { Section, SectionHead } from "../components/page-parts";
import mehndiImage from "../assets/priya-mehndi-detail.jpg";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "FAQ | Bookings, Trials & Rentals — Priya Makeover" },
      {
        name: "description",
        content:
          "Answers about bridal makeup trials, booking advances, rental fittings, jewellery deposits, travel and timings at Priya Makeover.",
      },
      { property: "og:title", content: "Frequently asked questions — Priya Makeover" },
      {
        property: "og:description",
        content: "Everything about trials, bookings, rentals, deposits, travel and wedding-morning timings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const groups = [
  {
    group: "Booking",
    items: [
      ["How far in advance should I book?", "For peak wedding dates, two to three months ahead. Festive-season party makeup can often be arranged within a week."],
      ["How is a date confirmed?", "A booking advance holds the date. Until the advance is received, the slot stays open to other enquiries."],
      ["Can I change my date?", "One date change is usually accommodated if the new date is open. Let the studio know as early as possible."],
    ],
  },
  {
    group: "Trials & the day",
    items: [
      ["Is a trial necessary?", "Not compulsory, but strongly recommended for brides. It settles the base, eye style and hair before the wedding morning."],
      ["How long does bridal makeup take?", "Around two to two and a half hours for makeup and hair, plus 30 minutes for draping and ornaments."],
      ["Do you cover multiple functions?", "Yes — haldi, mehndi, wedding and reception can all be booked together, often at a package rate."],
      ["What should I bring?", "Your outfit or a clear photo of it, any jewellery you own, and inner wear or shapewear you plan to use."],
    ],
  },
  {
    group: "Rentals & ornaments",
    items: [
      ["How long is the rental period?", "Three days as standard — one before, the day itself and one for return."],
      ["Are alterations allowed?", "Minor length, waist and blouse adjustments are done in-house without damaging the garment."],
      ["Is there a deposit?", "Yes, a refundable deposit applies to heavy bridal outfits and jewellery, returned once the pieces are checked."],
      ["What if something is damaged?", "Small wear from normal use is expected. Significant damage or loss is adjusted against the deposit."],
    ],
  },
  {
    group: "Travel & products",
    items: [
      ["Do you travel to venues?", "Yes. In-city travel is included with bridal packages; outstation travel and stay are quoted separately."],
      ["Which products are used?", "Professional HD and airbrush ranges, with sensitive-skin alternatives available on request."],
      ["Is the kit hygienic?", "Brushes are sanitised between clients, applicators are disposable and ornaments are cleaned after every rental."],
    ],
  },
];

function FaqPage() {
  const [open, setOpen] = useState<string | null>("How far in advance should I book?");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader overlay />
      <PageHero
        eyebrow="Questions"
        title={
          <>
            Everything you <em className="font-normal">might ask.</em>
          </>
        }
        intro="Bookings, trials, rentals, deposits, travel and timings — answered before you send your first message."
        image={mehndiImage}
        alt="Bridal bangles and mehndi detail"
      />

      {groups.map((group, index) => (
        <Section key={group.group} tone={index % 2 === 1 ? "sage" : "plain"}>
          <SectionHead eyebrow={group.group} title={<em>{group.group} questions</em>} />
          <div className="mt-10 divide-y divide-border border-y border-border">
            {group.items.map(([question, answer]) => {
              const isOpen = open === question;
              return (
                <div key={question}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : question)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-2xl leading-snug">{question}</span>
                    <span aria-hidden="true" className="font-display text-3xl text-terracotta">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && <p className="-mt-2 max-w-2xl pb-6 text-sm leading-relaxed text-muted-foreground">{answer}</p>}
                </div>
              );
            })}
          </div>
        </Section>
      ))}

      <Section tone="forest">
        <SectionHead
          eyebrow="Still unsure?"
          muted
          title={
            <>
              Ask Priya <em>directly.</em>
            </>
          }
          intro="Send your dates and functions and you'll get a clear answer on availability and pricing."
        />
        <div className="mt-10">
          <ActionLink to="/contact" light>
            Go to contact
          </ActionLink>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}
