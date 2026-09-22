# Expand Priya Makeover with bilingual pages

## What will be added
- Add an English / ಕನ್ನಡ language selector to the desktop and mobile navigation.
- Remember the visitor’s choice and update navigation, shared buttons, headings, descriptions, cards, forms, FAQs, and footer text across the site.
- Add four detailed standalone pages:
  - Bridal Makeup — finishes, trials, skin preparation, ceremony planning, and booking flow.
  - Hair & Draping — bridal hair, flowers, extensions, saree and dupatta draping.
  - Cultural Looks — Kannada, South Indian, North Indian, festive, maternity, and family styling.
  - Rental Guide — selection, fittings, deposits, care, collection, return, and damage terms.
- Add the new pages to the main navigation and connect relevant calls to action from existing pages.
- Keep the existing editorial terracotta-and-sage design, photography, and restrained motion.

## Language experience
- A compact `EN | ಕನ್ನಡ` control will appear in the header.
- Switching language will update the current page immediately without changing its URL.
- The chosen language will persist for future visits.
- Kannada text will use a Kannada-capable companion font while preserving the current editorial display style for English.
- Page titles and descriptions will reflect the selected language after the page loads; English remains the default for search previews.

## Technical details
- Create a shared language provider and translation helpers, mounted at the app root.
- Refactor shared site chrome and reusable page sections to consume translated labels.
- Add one TanStack route file per new page, each with unique search and social metadata.
- Use only existing local imagery and semantic design tokens; no database or external service is needed.
- Verify all routes, both languages, mobile navigation, persistence, text fit, and production build health.

## Content note
- Existing unconfirmed prices, opening hours, address, phone number, and studio statistics will remain clearly presented as placeholders until the real details are provided.
