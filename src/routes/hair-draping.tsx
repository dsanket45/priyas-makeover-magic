import { createFileRoute } from "@tanstack/react-router";
import { ActionLink, PageHero, SiteFooter, SiteHeader } from "../components/site-chrome";
import { CardGrid, DetailList, Section, SectionHead } from "../components/page-parts";
import { useLanguage } from "../lib/language";
import hairImage from "../assets/priya-hair-look.jpg";
import dressesImage from "../assets/priya-dresses.jpg";

export const Route = createFileRoute("/hair-draping")({ component: HairDrapingPage, head: () => ({ meta: [
  { title: "Bridal Hair & Saree Draping | Priya Makeover" }, { name: "description", content: "Bridal buns, braids, flowers, extensions, saree pleating and dupatta draping at Priya Makeover." },
  { property: "og:title", content: "Hair and draping by Priya Makeover" }, { property: "og:description", content: "Traditional and modern bridal hair with secure saree, lehenga and dupatta draping." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }) });

function HairDrapingPage() { const { pick } = useLanguage();
  const styles = pick([
    { meta: "Traditional", title: "Jasmine bridal braid", text: "A structured long braid finished with fresh flowers, jada pieces and temple ornaments.", points: ["Extension colour match", "Jada billai placement", "Fresh or fabric gajra"] },
    { meta: "Classic", title: "Sculpted bridal bun", text: "A secure low or mid bun built to support veils, flowers and head jewellery comfortably.", points: ["Volume padding", "Pin-hidden structure", "Veil anchor points"] },
    { meta: "Modern", title: "Waves & soft texture", text: "Polished movement for engagements, receptions and gowns without losing hold in humidity.", points: ["Hollywood waves", "Half-up styles", "Pearl and crystal pins"] },
    { meta: "Saree", title: "Regional draping", text: "Neat, movement-friendly drapes shaped for your saree, body and ceremony.", points: ["Nivi and seedha pallu", "Karnataka and Coorg styles", "Pre-pleating available"] },
    { meta: "Lehenga", title: "Dupatta placement", text: "One or two dupattas balanced across head and shoulder without pulling the hairstyle.", points: ["Veil setting", "Pleated shoulder drape", "Hidden security pins"] },
    { meta: "Finishing", title: "Ornament setting", text: "Every pin, flower and ornament is mapped so the final silhouette looks intentional from every side.", points: ["Maang tikka alignment", "Hair accessory balance", "Comfort check"] },
  ], [
    { meta: "ಸಾಂಪ್ರದಾಯಿಕ", title: "ಮಲ್ಲಿಗೆ ವಧು ಜಡೆ", text: "ತಾಜಾ ಹೂವು, ಜಡೆ ಬಿಲ್ಲೆ ಮತ್ತು ಟೆಂಪಲ್ ಆಭರಣಗಳಿಂದ ಅಲಂಕರಿಸಿದ ಉದ್ದ ಜಡೆ.", points: ["ಎಕ್ಸ್ಟೆನ್ಷನ್ ಬಣ್ಣ ಹೊಂದಾಣಿಕೆ", "ಜಡೆ ಬಿಲ್ಲೆ ಅಳವಡಿಕೆ", "ತಾಜಾ ಅಥವಾ ಫ್ಯಾಬ್ರಿಕ್ ಗಜ್ರಾ"] },
    { meta: "ಕ್ಲಾಸಿಕ್", title: "ವಧು ಬನ್", text: "ವೇಲ್, ಹೂವು ಮತ್ತು ತಲೆಯ ಆಭರಣವನ್ನು ಆರಾಮವಾಗಿ ಹಿಡಿಯುವ ಭದ್ರವಾದ ಬನ್.", points: ["ವಾಲ್ಯೂಮ್ ಪ್ಯಾಡಿಂಗ್", "ಕಾಣದ ಪಿನ್ ರಚನೆ", "ವೇಲ್ ಆಂಕರ್ ಪಾಯಿಂಟ್"] },
    { meta: "ಆಧುನಿಕ", title: "ವೇವ್ಸ್ ಮತ್ತು ಸಾಫ್ಟ್ ಟೆಕ್ಸ್ಚರ್", text: "ಎಂಗೇಜ್‌ಮೆಂಟ್, ರಿಸೆಪ್ಷನ್ ಮತ್ತು ಗೌನ್‌ಗಳಿಗೆ ತೇವಾಂಶದಲ್ಲೂ ಉಳಿಯುವ ಮೃದುವಾದ ಸ್ಟೈಲ್.", points: ["ಹಾಲಿವುಡ್ ವೇವ್ಸ್", "ಹಾಫ್-ಅಪ್ ಸ್ಟೈಲ್", "ಪರ್ಲ್ ಮತ್ತು ಕ್ರಿಸ್ಟಲ್ ಪಿನ್"] },
    { meta: "ಸೀರೆ", title: "ಪ್ರಾದೇಶಿಕ ಡ್ರೇಪಿಂಗ್", text: "ನಿಮ್ಮ ಸೀರೆ, ದೇಹ ಮತ್ತು ಶಾಸ್ತ್ರಕ್ಕೆ ಸರಿಯಾದ, ಸುಲಭ ಚಲನೆಯ ಡ್ರೇಪ್.", points: ["ನಿವಿ ಮತ್ತು ಸೀಧಾ ಪಲ್ಲು", "ಕರ್ನಾಟಕ ಮತ್ತು ಕೊಡವ ಶೈಲಿ", "ಪ್ರೀ-ಪ್ಲೀಟಿಂಗ್ ಲಭ್ಯ"] },
    { meta: "ಲೆಹೆಂಗಾ", title: "ದುಪಟ್ಟಾ ಅಳವಡಿಕೆ", text: "ಹೇರ್ ಸ್ಟೈಲ್‌ಗೆ ಭಾರವಾಗದಂತೆ ಒಂದು ಅಥವಾ ಎರಡು ದುಪಟ್ಟಾಗಳ ಸಮತೋಲನ.", points: ["ವೇಲ್ ಸೆಟ್ಟಿಂಗ್", "ಪ್ಲೀಟೆಡ್ ಶೋಲ್ಡರ್ ಡ್ರೇಪ್", "ಮರೆಮಾಡಿದ ಸೆಫ್ಟಿ ಪಿನ್"] },
    { meta: "ಫಿನಿಷಿಂಗ್", title: "ಆಭರಣ ಅಳವಡಿಕೆ", text: "ಎಲ್ಲ ದಿಕ್ಕಿನಿಂದಲೂ ಸುಂದರವಾಗಿ ಕಾಣಲು ಪ್ರತಿಯೊಂದು ಹೂವು, ಪಿನ್ ಮತ್ತು ಆಭರಣದ ಯೋಜನೆ.", points: ["ಮಾಂಗ್ ಟಿಕ್ಕಾ ಹೊಂದಾಣಿಕೆ", "ಹೇರ್ ಆಕ್ಸೆಸರಿ ಸಮತೋಲನ", "ಆರಾಮ ಪರಿಶೀಲನೆ"] },
  ]);
  const care = pick([
    { term: "Wash timing", detail: "Wash hair the previous evening unless your stylist advises otherwise; avoid heavy oil or serum." }, { term: "Extensions", detail: "Human-hair extensions and padding are colour-matched at the consultation and reserved for your date." }, { term: "Fresh flowers", detail: "Seasonal flowers can be sourced or supplied by your florist; quantities are agreed after the trial." }, { term: "Drape preparation", detail: "Sarees can be pre-pleated in advance. Bring footwear and the exact petticoat or shapewear for correct length." },
  ], [
    { term: "ಕೂದಲು ತೊಳೆಯುವುದು", detail: "ಸ್ಟೈಲಿಸ್ಟ್ ಬೇರೆ ಸೂಚಿಸದಿದ್ದರೆ ಹಿಂದಿನ ಸಂಜೆ ಕೂದಲು ತೊಳೆಯಿರಿ; ಹೆಚ್ಚು ಎಣ್ಣೆ ಅಥವಾ ಸೀರಮ್ ಬೇಡ." }, { term: "ಎಕ್ಸ್ಟೆನ್ಷನ್", detail: "ಕನ್ಸಲ್ಟೇಷನ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಕೂದಲಿನ ಬಣ್ಣಕ್ಕೆ ಹೊಂದಿಸಿ ಎಕ್ಸ್ಟೆನ್ಷನ್ ಮತ್ತು ಪ್ಯಾಡಿಂಗ್ ಕಾಯ್ದಿರಿಸಲಾಗುತ್ತದೆ." }, { term: "ತಾಜಾ ಹೂವು", detail: "ಋತುಮಾನಕ್ಕೆ ತಕ್ಕ ಹೂವುಗಳನ್ನು ನಾವು ಅಥವಾ ನಿಮ್ಮ ಫ್ಲೋರಿಸ್ಟ್ ತರಬಹುದು; ಪ್ರಮಾಣವನ್ನು ಟ್ರಯಲ್ ನಂತರ ನಿರ್ಧರಿಸುತ್ತೇವೆ." }, { term: "ಡ್ರೇಪ್ ತಯಾರಿ", detail: "ಸೀರೆಯನ್ನು ಮೊದಲೇ ಪ್ಲೀಟ್ ಮಾಡಬಹುದು. ಸರಿಯಾದ ಉದ್ದಕ್ಕೆ ಪಾದರಕ್ಷೆ ಮತ್ತು ಪೆಟ್ಟಿಕೋಟ್ ತರಿರಿ." },
  ]);
  return <main className="min-h-screen bg-background text-foreground"><SiteHeader overlay /><PageHero eyebrow={pick("Hair · Flowers · Draping", "ಕೂದಲು · ಹೂವು · ಡ್ರೇಪಿಂಗ್")} title={pick(<>Built to move, <em>made to last.</em></>, <>ಚಲನೆಗೆ ಸುಂದರ, <em>ದಿನವಿಡೀ ಭದ್ರ.</em></>)} intro={pick("Hair and draping planned as part of the complete look — secure, comfortable and beautiful from every angle.", "ಪೂರ್ಣ ಲುಕ್‌ನ ಭಾಗವಾಗಿ ಯೋಜಿಸಿದ ಹೇರ್ ಮತ್ತು ಡ್ರೇಪಿಂಗ್ — ಭದ್ರ, ಆರಾಮದಾಯಕ ಮತ್ತು ಎಲ್ಲ ದಿಕ್ಕಿನಿಂದ ಸುಂದರ.")} image={hairImage} alt={pick("Bridal braid with jasmine", "ಮಲ್ಲಿಗೆಯ ವಧು ಜಡೆ")} /><Section><SectionHead eyebrow={pick("Style menu", "ಸ್ಟೈಲ್ ಮೆನು")} title={pick(<>From first pin to <em>final flower.</em></>, <>ಮೊದಲ ಪಿನ್‌ನಿಂದ <em>ಕೊನೆಯ ಹೂವಿನವರೆಗೆ.</em></>)} /><CardGrid items={styles} /></Section><Section tone="sage"><div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20"><div><SectionHead eyebrow={pick("Before your appointment", "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಮುನ್ನ")} title={pick(<>Come prepared, <em>leave composed.</em></>, <>ತಯಾರಾಗಿ ಬನ್ನಿ, <em>ಸುಂದರವಾಗಿ ಹೊರಡಿ.</em></>)} /><DetailList items={care} /></div><div className="image-frame group aspect-[4/5]"><img src={dressesImage} alt={pick("Sarees ready for draping", "ಡ್ರೇಪಿಂಗ್‌ಗೆ ಸಿದ್ಧವಾದ ಸೀರೆಗಳು")} className="gallery-image" loading="lazy" /></div></div></Section><Section tone="forest"><SectionHead eyebrow={pick("Complete the look", "ಪೂರ್ಣ ಲುಕ್")} muted title={pick(<>Hair, drape and ornaments, <em>in one appointment.</em></>, <>ಹೇರ್, ಡ್ರೇಪ್ ಮತ್ತು ಆಭರಣ, <em>ಒಂದೇ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ನಲ್ಲಿ.</em></>)} /><div className="mt-10 flex flex-wrap gap-8"><ActionLink to="/ornaments" light>{pick("Explore ornaments", "ಆಭರಣಗಳನ್ನು ನೋಡಿ")}</ActionLink><ActionLink to="/contact" light>{pick("Check your date", "ದಿನಾಂಕ ವಿಚಾರಿಸಿ")}</ActionLink></div></Section><SiteFooter /></main>;
}
