# हॉटेल मातोश्री — Hotel Matoshree Franchise Website

A professional, fully responsive, **bilingual (Marathi default / English on toggle)** marketing
& lead-generation website for a hotel and tea franchise business.

Built with **React 18 + Vite + Tailwind CSS + react-i18next + React Hook Form + Zod + Framer Motion**.

---

## Quick start

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build into /dist
npm run preview  # preview the production build
```

---

## Key features

- **Strict bilingual switching** — Marathi is the default. One button in the navbar flips the
  **entire** site to English (and back). No mixed language anywhere — every visible string comes
  from the locale files. The choice is remembered via `localStorage`.
- **Franchise lead form** with validation (Marathi/English error messages) and a success state.
- **Franchise details** (Hotel & Tea) with investment, area, ROI, "what's included" and
  **Terms & Conditions** shown as readable structured text **plus the client's original
  T&C images** in a click-to-zoom lightbox gallery.
- **Branch directory** ("Our Presence") — each branch shows a photo, address, mobile
  (tap-to-call) and a **Get Directions** button (Google Maps).
- **Floating WhatsApp + Call buttons**, animated stat counters, FAQ accordion, testimonials,
  process timeline, and contact section with map embed.

---

## How to edit the content (no coding needed)

### 1. Text — `src/locales/`
- `mr.json` → all Marathi text
- `en.json` → all English text

> ⚠️ Both files **must have the exact same keys**. If you add a key to one, add it to the other,
> otherwise that bit of text could fall back to the other language (mixed language = bug).

### 2. Franchise numbers & terms — `src/data/franchiseData.js`
Edit `FRANCHISE_VALUES` (investment ranges, area, ROI, agreement years). These get inserted into
the translated text automatically. The terms text itself lives in the locale files
(`franchises.hotel.terms` / `franchises.tea.terms`).

### 3. Branches ("Our Presence") — `src/data/branchesData.js`
Replace the samples with the real branches. Each branch has a `photo`, `mobile`, `mapLink`
(Google Maps share link) and bilingual `mr`/`en` name + address.
- **Branch photos** go in `public/branches/` (e.g. `branch-1.jpg`). Missing photos show a
  branded placeholder automatically.
- If `mapLink` is empty, **Get Directions** falls back to a Maps search of the address.

### 3b. Franchise T&C images — `src/data/franchiseData.js` + `public/franchise-terms/`
Each franchise type has a `termsImages` array. Drop the client's original Terms & Conditions
images into `public/franchise-terms/` and list their paths. They render as a zoomable gallery.

### 3c. Outlet locations (legacy list) — `src/data/locationsData.js`
A simple bilingual city/area list is also available if you want a compact chips view.

### 4. Contact details & links — `src/data/siteConfig.js`
Fill in every `{{PLACEHOLDER}}`: phone, WhatsApp number, email, Google Maps embed URL, and
social links. Also `TEXT_VALUES` (owner name, address, testimonial names/cities).

---

## Connecting the form (the one TODO)

Open `src/sections/InquiryForm.jsx` and find the `onSubmit` function (marked with `// TODO`).
Right now it just logs to the console and shows the success message. Wire it to one of:

- **EmailJS** (no backend) — send the form as an email.
- **Formspree** — POST to a Formspree endpoint.
- **Google Apps Script** — append rows to a Google Sheet.

It's a one-function swap; the form data object is already assembled for you.

---

## Placeholders to fill before launch

Search the project for `{{` to find every placeholder. Main ones:

| Placeholder | Where | What |
|---|---|---|
| `{{PHONE_NUMBER}}` / `{{WHATSAPP_NUMBER}}` | `siteConfig.js` | Contact + floating buttons |
| `{{EMAIL}}` / social URLs / `{{GOOGLE_MAP_EMBED_URL}}` | `siteConfig.js` | Contact section |
| `{{OWNER_NAME}}` / `{{ADDRESS_LINE}}` | `siteConfig.js` (`TEXT_VALUES`) | About / contact |
| Investment, area, ROI, agreement years | `franchiseData.js` | Franchise cards |
| Partner names & cities | `siteConfig.js` (`TEXT_VALUES`) | Testimonials |
| `{{BRANCH_n_MOBILE}}` / `{{BRANCH_n_MAP_LINK}}` | `branchesData.js` | Branch cards |
| Branch photos | `public/branches/` | Branch cards |
| T&C images | `public/franchise-terms/` | Franchise terms gallery |
| Hero / owner photos | `src/sections/Hero.jsx`, `About.jsx` | Replace gradients with real images |

---

## Project structure

```
src/
  components/   reusable UI (Navbar, LanguageToggle, Accordion, StatCounter, ...)
  sections/     page sections (Hero, About, Franchises, InquiryForm, ...)
  locales/      mr.json + en.json (all text)
  data/         franchiseData.js, locationsData.js, siteConfig.js
  i18n.js       language setup (Marathi default)
  App.jsx       assembles the sections
```

---

## Theming

Brand colours and fonts live in `tailwind.config.js` under `theme.extend.colors`
(`brand`, `terracotta`, `gold`, `cream`, `ink`). Change them there to rebrand the whole site.
