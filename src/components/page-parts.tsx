import type { ReactNode } from "react";

export function Section({
  id,
  tone = "plain",
  children,
}: {
  id?: string;
  tone?: "plain" | "sage" | "forest" | "terracotta";
  children: ReactNode;
}) {
  const toneClass =
    tone === "sage"
      ? "bg-soft-sage"
      : tone === "forest"
        ? "bg-forest text-hero-foreground"
        : tone === "terracotta"
          ? "bg-terracotta text-primary-foreground"
          : "bg-background";

  return (
    <section id={id} className={`section-space ${toneClass}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  muted = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  muted?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={muted ? "eyebrow opacity-70" : "eyebrow text-terracotta"}>{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      {intro && (
        <p className={`mt-6 text-lg leading-relaxed ${muted ? "opacity-80" : "text-muted-foreground"}`}>{intro}</p>
      )}
    </div>
  );
}

export function DetailList({ items }: { items: { term: string; detail: string }[] }) {
  return (
    <dl className="mt-10 divide-y divide-current/15 border-y border-current/15">
      {items.map((item) => (
        <div key={item.term} className="grid gap-2 py-6 sm:grid-cols-[0.7fr_1.3fr] sm:gap-10">
          <dt className="font-display text-2xl">{item.term}</dt>
          <dd className="text-sm leading-relaxed opacity-80">{item.detail}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CardGrid({
  items,
}: {
  items: { title: string; text: string; meta?: string; points?: string[] }[];
}) {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="group flex h-full flex-col border border-border bg-card p-7 transition-colors hover:border-terracotta"
        >
          {item.meta && <p className="eyebrow text-terracotta">{item.meta}</p>}
          <h3 className="mt-3 font-display text-3xl leading-tight">{item.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          {item.points && (
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-terracotta" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-5xl leading-none">{value}</p>
      <p className="mt-2 text-xs uppercase tracking-wide opacity-70">{label}</p>
    </div>
  );
}
