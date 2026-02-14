# EnergieMakler – Astro + Tailwind Website

Moderne, SEO-optimierte Energiemakler-Website. Gebaut mit **Astro 5**, **Tailwind CSS** und **TypeScript**.

## Setup

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktions-Build erstellen
npm run build

# Build-Vorschau
npm run preview
```

## Projektstruktur

```
src/
├─ layouts/
│   ├─ BaseLayout.astro          # HTML-Grundgerüst, SEO, JSON-LD
│   └─ ZielgruppeLayout.astro    # Wiederverwendbar für Landingpages
├─ components/
│   ├─ Header.astro              # Sticky Header, Mobile-Menü
│   ├─ Footer.astro              # Footer mit CTA-Banner
│   ├─ ContactForm.astro         # Kontaktformular + DOI-Flow
│   ├─ FileUpload.astro          # Drag & Drop Upload
│   ├─ DoubleOptIn.astro         # Bestätigungs-UI (Backend-Platzhalter)
│   ├─ ConsentBanner.astro       # Cookie-Consent mit Kategorien
│   └─ ui/
│       ├─ Button.astro          # Varianten: primary/secondary/outline/ghost
│       ├─ Card.astro            # Feature-/Service-Karten
│       ├─ SectionHeading.astro  # Einheitliche Überschriften
│       ├─ Hero.astro            # Hero-Bereich mit CTAs
│       ├─ CtaBanner.astro       # Farbiger CTA-Streifen
│       ├─ Testimonial.astro     # Bewertungskarte mit Sternen
│       └─ FaqAccordion.astro    # Akkordeon mit <details>
├─ pages/                        # 18 Seiten (statisch generiert)
├─ content/
│   ├─ config.ts                 # Content Collection Schemas (blog, glossar)
│   ├─ blog/                     # Blog-Artikel (Markdown)
│   └─ glossar/                  # Glossar-Einträge (Markdown)
└─ styles/
    └─ global.css                # Tailwind-Direktiven, Custom Tokens
```

## Seiten

| URL | Seite |
|---|---|
| `/` | Startseite |
| `/leistungen` | Leistungsübersicht |
| `/anfrage` | Anfrageformular mit Upload |
| `/termin` | Terminbuchung (Calendly-Platzhalter) |
| `/zielgruppen/privat` | Landingpage Privatkunden |
| `/zielgruppen/kmu` | Landingpage KMU |
| `/zielgruppen/industrie` | Landingpage Industrie |
| `/zielgruppen/immobilienverwalter` | Landingpage Immobilienverwalter |
| `/blog` | Blog-Übersicht |
| `/blog/[slug]` | Blog-Artikel (Content Collection) |
| `/glossar` | Glossar-Übersicht |
| `/glossar/[slug]` | Glossar-Eintrag (Content Collection) |
| `/kontakt` | Kontaktseite |
| `/transparenz` | Vergütungsmodell |
| `/referenzen` | Kundenbewertungen |
| `/impressum` | Impressum |
| `/datenschutz` | Datenschutzerklärung |
| `/cookie-richtlinie` | Cookie-Richtlinie |

## Features

- **SEO**: Schema.org LocalBusiness JSON-LD, Open Graph, Sitemap, robots.txt
- **Consent Management**: Cookie-Banner mit Kategorien (analytics/marketing/embeds), blockiert Scripts/Iframes bis zur Zustimmung
- **Double-Opt-in**: UI-Flow nach Formular-Absendung (Backend-Platzhalter)
- **Content Collections**: Blog & Glossar mit Zod-validiertem Schema
- **Mobile-first**: Hamburger-Menü, responsive Grids, große CTAs
- **Performance**: Statische Generierung, minimales JS

## Nächste Schritte

1. **Echte Inhalte** einfügen (Texte, Bilder, Kontaktdaten)
2. **Calendly** in `/termin` einbinden (iframe-src in `data-consent-src`)
3. **Backend** für Formular + Double-Opt-in anbinden
4. **Analytics** einbauen (z.B. `<script data-consent="analytics">`)
5. **Legal-Texte** durch echte Vorlagen vom Anwalt ersetzen
6. **Hosting** deployen (Vercel, Netlify, etc.)
