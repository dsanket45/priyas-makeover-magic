import { createFileRoute } from "@tanstack/react-router";
import { ActionLink, PageHero, SiteFooter, SiteHeader } from "../components/site-chrome";
import { CardGrid, DetailList, Section, SectionHead } from "../components/page-parts";
import { useLanguage } from "../lib/language";
import heroImage from "../assets/priya-bridal-hero.jpg";
import mehndiImage from "../assets/priya-mehndi-detail.jpg";

export const Route = createFileRoute("/bridal-makeup")({
  component: BridalMakeupPage,
  head: () => ({ meta: [
    { title: "Bridal Makeup & Trials | Priya Makeover" },
    { name: "description", content: "Detailed bridal makeup finishes, skin preparation, trials and wedding-day planning at Priya Makeover." },
    { property: "og:title", content: "Bridal makeup by Priya Makeover" },
    { property: "og:description", content: "HD, airbrush and traditional bridal artistry planned around your skin, outfit and ceremonies." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

const enLooks = [
  { meta: "Wedding day", title: "Signature HD bridal", text: "A skin-like, camera-ready finish balanced for daylight rituals and close-up photography.", points: ["Complexion matching", "Waterproof eye work", "Lashes and lip layering"] },
  { meta: "Long wear", title: "Airbrush bridal", text: "A fine, even veil of coverage for humid days, long ceremonies and brides who prefer a polished finish.", points: ["Lightweight layers", "Transfer-resistant setting", "Neck and shoulder balancing"] },
  { meta: "Evening", title: "Reception glamour", text: "Sculpted features, richer eyes and luminous skin designed for stage lights and evening portraits.", points: ["Smokey or metallic eyes", "Defined contour", "Body glow finishing"] },
  { meta: "Morning ritual", title: "Muhurtham beauty", text: "Fresh golden skin, defined eyes and traditional details that remain comfortable through early ceremonies.", points: ["Early-morning call time", "Kumkum and bindi finish", "Temple jewellery balance"] },
  { meta: "Pre-wedding", title: "Haldi & mehndi", text: "Breathable makeup that survives movement, flowers and outdoor light without looking overdone.", points: ["Fresh minimal base", "Colour-safe setting", "Floral styling coordination"] },
  { meta: "Personal", title: "Custom bridal look", text: "A look developed from your references, skin needs, outfit palette and comfort level.", points: ["Reference review", "Trial adjustments", "Written look plan"] },
];

const knLooks = [
  { meta: "ಮದುವೆಯ ದಿನ", title: "ಸಿಗ್ನೇಚರ್ HD ವಧು ಮೇಕಪ್", text: "ಹಗಲಿನ ಶಾಸ್ತ್ರಗಳು ಮತ್ತು ಕ್ಲೋಸ್-ಅಪ್ ಛಾಯಾಚಿತ್ರಗಳಿಗೆ ಸಹಜವಾಗಿ ಕಾಣುವ ಕ್ಯಾಮೆರಾ-ರೆಡಿ ಫಿನಿಷ್.", points: ["ಚರ್ಮದ ಬಣ್ಣಕ್ಕೆ ಸರಿಯಾದ ಬೇಸ್", "ವಾಟರ್‌ಪ್ರೂಫ್ ಕಣ್ಣಿನ ಮೇಕಪ್", "ಲ್ಯಾಶ್ ಮತ್ತು ಲಿಪ್ ಲೇಯರಿಂಗ್"] },
  { meta: "ದೀರ್ಘಕಾಲ", title: "ಏರ್‌ಬ್ರಶ್ ವಧು ಮೇಕಪ್", text: "ಬಿಸಿಲು, ತೇವಾಂಶ ಮತ್ತು ದೀರ್ಘ ಸಮಾರಂಭಗಳಿಗೆ ಹಗುರವಾದ ಸಮತೋಲಿತ ಕವರೇಜ್.", points: ["ಹಗುರವಾದ ಲೇಯರ್‌ಗಳು", "ಟ್ರಾನ್ಸ್‌ಫರ್-ರೆಸಿಸ್ಟೆಂಟ್ ಸೆಟ್ಟಿಂಗ್", "ಕುತ್ತಿಗೆ ಮತ್ತು ಭುಜದ ಬಣ್ಣ ಸಮತೋಲನ"] },
  { meta: "ಸಂಜೆ", title: "ರಿಸೆಪ್ಷನ್ ಗ್ಲಾಮರ್", text: "ಸ್ಟೇಜ್ ಬೆಳಕು ಮತ್ತು ಸಂಜೆ ಫೋಟೋಗಳಿಗೆ ಸ್ಪಷ್ಟ ಆಕಾರ, ಗಾಢ ಕಣ್ಣು ಮತ್ತು ಹೊಳಪಿನ ಚರ್ಮ.", points: ["ಸ್ಮೋಕಿ ಅಥವಾ ಮೆಟಾಲಿಕ್ ಐ", "ಸ್ಪಷ್ಟ ಕಾಂಟೂರ್", "ಬಾಡಿ ಗ್ಲೋ ಫಿನಿಷ್"] },
  { meta: "ಬೆಳಗಿನ ಶಾಸ್ತ್ರ", title: "ಮುಹೂರ್ತದ ಸೌಂದರ್ಯ", text: "ಬೆಳಗಿನ ವಿಧಿಗಳಾದ್ಯಂತ ಆರಾಮವಾಗಿರುವ ಗೋಲ್ಡನ್ ಸ್ಕಿನ್ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ವಿವರಗಳು.", points: ["ಮುಂಜಾನೆ ಸೇವೆ", "ಕುಂಕುಮ ಮತ್ತು ಬಿಂದಿ ಫಿನಿಷ್", "ಟೆಂಪಲ್ ಆಭರಣ ಸಮತೋಲನ"] },
  { meta: "ಮದುವೆ ಪೂರ್ವ", title: "ಹಲ್ದಿ ಮತ್ತು ಮೆಹೆಂದಿ", text: "ಹೊರಾಂಗಣ ಬೆಳಕು, ಹೂವು ಮತ್ತು ಚಲನೆಗೆ ಹೊಂದುವ ಹಗುರವಾದ ಮೇಕಪ್.", points: ["ತಾಜಾ ಮಿನಿಮಲ್ ಬೇಸ್", "ಬಣ್ಣ ಉಳಿಸುವ ಸೆಟ್ಟಿಂಗ್", "ಹೂವಿನ ಅಲಂಕಾರ ಹೊಂದಾಣಿಕೆ"] },
  { meta: "ವೈಯಕ್ತಿಕ", title: "ನಿಮಗಾಗಿ ವಿಶೇಷ ವಧು ಲುಕ್", text: "ನಿಮ್ಮ ಇಷ್ಟ, ಚರ್ಮ, ಉಡುಪು ಮತ್ತು ಆರಾಮಕ್ಕೆ ಅನುಗುಣವಾಗಿ ರೂಪಿಸುವ ಲುಕ್.", points: ["ರೆಫರೆನ್ಸ್ ಪರಿಶೀಲನೆ", "ಟ್ರಯಲ್ ಬದಲಾವಣೆಗಳು", "ಬರಹದ ಲುಕ್ ಪ್ಲಾನ್"] },
];

function BridalMakeupPage() {
  const { pick } = useLanguage();
  const prep = pick(
    [
      { term: "6–8 weeks before", detail: "Keep skincare steady; avoid experimenting with strong treatments close to the wedding." },
      { term: "At the trial", detail: "Bring outfit photos, jewellery, veil or dupatta, and references showing finishes you like and dislike." },
      { term: "The night before", detail: "Cleanse, moisturise, sleep well and avoid a new facial, bleach or peel." },
      { term: "Wedding morning", detail: "Arrive with a clean face and dry hair. Wear a front-open top so the finished hair remains untouched." },
    ],
    [
      { term: "6–8 ವಾರಗಳ ಮೊದಲು", detail: "ಸ್ಕಿನ್‌ಕೇರ್ ಸರಳವಾಗಿರಲಿ; ಮದುವೆಗೆ ಹತ್ತಿರ ಹೊಸ ತೀವ್ರ ಚಿಕಿತ್ಸೆಯನ್ನು ಪ್ರಯತ್ನಿಸಬೇಡಿ." },
      { term: "ಟ್ರಯಲ್ ಸಮಯದಲ್ಲಿ", detail: "ಉಡುಪು, ಆಭರಣ, ವೇಲ್ ಅಥವಾ ದುಪಟ್ಟಾ ಮತ್ತು ನಿಮಗೆ ಇಷ್ಟವಾದ ಲುಕ್ ಚಿತ್ರಗಳನ್ನು ತರಿರಿ." },
      { term: "ಹಿಂದಿನ ರಾತ್ರಿ", detail: "ಮುಖ ಸ್ವಚ್ಛಗೊಳಿಸಿ, ಮಾಯಿಶ್ಚರೈಸ್ ಮಾಡಿ, ಚೆನ್ನಾಗಿ ನಿದ್ರೆ ಮಾಡಿ; ಹೊಸ ಫೇಶಿಯಲ್ ಅಥವಾ ಪೀಲ್ ಬೇಡ." },
      { term: "ಮದುವೆಯ ಬೆಳಗ್ಗೆ", detail: "ಸ್ವಚ್ಛ ಮುಖ ಮತ್ತು ಒಣ ಕೂದಲಿನೊಂದಿಗೆ ಬನ್ನಿ. ಮುಂದೆ ತೆರೆಯುವ ಉಡುಪು ಧರಿಸಿ." },
    ],
  );
  return <main className="min-h-screen bg-background text-foreground"><SiteHeader overlay />
    <PageHero eyebrow={pick("Bridal artistry", "ವಧು ಸೌಂದರ್ಯ ಕಲೆ")} title={pick(<>Makeup that feels like <em>your best self.</em></>, <>ನಿಮ್ಮದೇ ಸೌಂದರ್ಯದ <em>ಅತ್ಯುತ್ತಮ ರೂಪ.</em></>)} intro={pick("Every finish is planned around your skin, ceremony light, outfit and the hours your celebration will last.", "ನಿಮ್ಮ ಚರ್ಮ, ಶಾಸ್ತ್ರದ ಬೆಳಕು, ಉಡುಪು ಮತ್ತು ಸಮಾರಂಭದ ಅವಧಿಗೆ ತಕ್ಕಂತೆ ಪ್ರತಿಯೊಂದು ಫಿನಿಷ್ ಯೋಜಿಸಲಾಗುತ್ತದೆ.")} image={heroImage} alt={pick("Indian bride with finished makeup", "ಪೂರ್ಣ ಮೇಕಪ್‌ನಲ್ಲಿರುವ ಭಾರತೀಯ ವಧು")} />
    <Section><SectionHead eyebrow={pick("Choose your finish", "ನಿಮ್ಮ ಫಿನಿಷ್ ಆಯ್ಕೆಮಾಡಿ")} title={pick(<>Bridal looks, <em>explained clearly.</em></>, <>ವಧು ಲುಕ್‌ಗಳು, <em>ಸರಳ ವಿವರಣೆ.</em></>)} intro={pick("No trend is applied blindly. The right texture, intensity and colour are chosen after seeing you in person.", "ಯಾವುದೇ ಟ್ರೆಂಡ್ ಅನ್ನು ಹಾಗೆಯೇ ಬಳಸುವುದಿಲ್ಲ. ನಿಮ್ಮನ್ನು ನೇರವಾಗಿ ನೋಡಿ ಸರಿಯಾದ ಟೆಕ್ಸ್ಚರ್, ಬಣ್ಣ ಮತ್ತು ತೀವ್ರತೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡುತ್ತೇವೆ.")} /><CardGrid items={pick(enLooks, knLooks)} /></Section>
    <Section tone="sage"><div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20"><div><SectionHead eyebrow={pick("Preparation guide", "ತಯಾರಿ ಮಾರ್ಗದರ್ಶಿ")} title={pick(<>Beautiful skin begins <em>before the chair.</em></>, <>ಸುಂದರ ಚರ್ಮದ ತಯಾರಿ <em>ಮುಂಚೆಯೇ ಆರಂಭ.</em></>)} /><DetailList items={prep} /></div><div className="image-frame group aspect-[4/5]"><img src={mehndiImage} alt={pick("Bridal preparation details", "ವಧು ತಯಾರಿಯ ವಿವರಗಳು")} className="gallery-image" loading="lazy" /></div></div></Section>
    <Section tone="forest"><SectionHead eyebrow={pick("Your trial", "ನಿಮ್ಮ ಟ್ರಯಲ್")} muted title={pick(<>Decide calmly, <em>before the day.</em></>, <>ಮದುವೆ ದಿನಕ್ಕೂ ಮುನ್ನ <em>ನೆಮ್ಮದಿಯ ನಿರ್ಧಾರ.</em></>)} intro={pick("We test base, eye shape, lip colour and hair direction, photograph the result in natural light, then note every product and adjustment.", "ಬೇಸ್, ಕಣ್ಣಿನ ಆಕಾರ, ಲಿಪ್ ಬಣ್ಣ ಮತ್ತು ಹೇರ್ ಸ್ಟೈಲ್ ಪರೀಕ್ಷಿಸಿ, ನೈಸರ್ಗಿಕ ಬೆಳಕಿನಲ್ಲಿ ಫೋಟೋ ತೆಗೆದು ಎಲ್ಲ ವಿವರಗಳನ್ನು ದಾಖಲಿಸುತ್ತೇವೆ.")} /><div className="mt-10"><ActionLink to="/contact" light>{pick("Plan your bridal trial", "ವಧು ಟ್ರಯಲ್ ಬುಕ್ ಮಾಡಿ")}</ActionLink></div></Section><SiteFooter /></main>;
}
