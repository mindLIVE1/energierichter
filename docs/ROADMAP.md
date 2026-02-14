# Energierichter – Roadmap: Von der Demo zur Production-Website

> **Stand:** 14.02.2026  
> **Status:** Die Website ist aktuell eine funktionale Demo, die Struktur, Design und Seitenarchitektur zeigt. Alle nachfolgenden Punkte müssen umgesetzt werden, bevor die Seite live gehen kann.

---

## Legende

| Symbol | Bedeutung |
|--------|-----------|
| 🔴 | **Kritisch** – Muss vor Go-Live erledigt sein |
| 🟡 | **Wichtig** – Sollte vor Go-Live erledigt sein |
| 🟢 | **Nice-to-have** – Kann nach Go-Live nachgezogen werden |

---

## 1. 🔴 Formulare & Backend

### 1.1 Kontaktformular – Backend-Anbindung
- **Datei:** `src/components/ContactForm.astro`
- **Ist-Zustand:** Das Formular verhindert den Submit (`e.preventDefault()`) und zeigt nur eine UI-Bestätigung. Es werden **keine Daten versendet**.
- **To-Do:**
  - [ ] Backend-Endpunkt für Formular-Daten einrichten (z.B. Netlify Forms, Formspree, eigene API)
  - [ ] Formulardaten per `fetch()` an den Endpunkt senden
  - [ ] Serverseitige Validierung implementieren
  - [ ] Fehlerbehandlung & Benutzer-Feedback bei Netzwerkfehlern
  - [ ] Rate-Limiting / Spam-Schutz (Honeypot-Feld oder Captcha)
  - [ ] DSGVO-konforme Datenspeicherung sicherstellen

### 1.2 Datei-Upload – Backend-Anbindung
- **Datei:** `src/components/FileUpload.astro`
- **Ist-Zustand:** Dateien werden nur lokal im Browser gesammelt, aber **nirgendwohin hochgeladen**.
- **To-Do:**
  - [ ] Upload-Endpunkt einrichten (z.B. S3-Bucket, Cloudflare R2, o.ä.)
  - [ ] Dateien zusammen mit dem Formular an das Backend senden
  - [ ] Dateityp- und Größenvalidierung serverseitig
  - [ ] Upload-Fortschrittsanzeige im Frontend

### 1.3 Double-Opt-In – E-Mail-Versand
- **Datei:** `src/components/DoubleOptIn.astro`
- **Ist-Zustand:** Zeigt nur eine UI-Bestätigung, es wird **keine E-Mail versendet**.
- **To-Do:**
  - [ ] E-Mail-Service anbinden (siehe Punkt 3)
  - [ ] Bestätigungsmail mit Verifizierungslink versenden
  - [ ] Verifizierungslogik implementieren (Token-basiert)
  - [ ] Ablauf-Timer für den Bestätigungslink

---

## 2. 🔴 Terminvereinbarung (Calendly)

- **Datei:** `src/pages/termin.astro`
- **Ist-Zustand:** Calendly-`<iframe>` ist **auskommentiert** (Zeile 48–57). Es wird nur ein Platzhalter mit Hinweistext angezeigt.
- **To-Do:**
  - [ ] Calendly-Account erstellen und Buchungslink konfigurieren
  - [ ] `YOUR-LINK` in Zeile 51 durch echten Calendly-Link ersetzen
  - [ ] `<iframe>` entkommentieren und aktivieren
  - [ ] Consent-Integration testen: Calendly darf erst nach Cookie-Zustimmung (Kategorie `embeds`) laden
  - [ ] Fallback-Ansicht beibehalten für Nutzer ohne Consent
  - [ ] Telefonnummer im Fallback aktualisieren (aktuell `+49 123 456789`)

---

## 3. 🔴 Mailing-Service anbinden

- **Ist-Zustand:** Nirgends im Projekt ist ein E-Mail-Service konfiguriert.
- **To-Do:**
  - [ ] E-Mail-Service-Provider auswählen (z.B. Resend, SendGrid, Postmark, Mailgun)
  - [ ] API-Key sicher hinterlegen (Umgebungsvariablen)
  - [ ] Transaktions-E-Mails implementieren:
    - Bestätigungs-E-Mail nach Formularabsendung (Double-Opt-In)
    - Benachrichtigung an das Energierichter-Team bei neuer Anfrage
  - [ ] E-Mail-Templates erstellen (HTML + Plain-Text)
  - [ ] Absenderadresse & Domain authentifizieren (SPF, DKIM, DMARC)
  - [ ] Optional: Newsletter-Funktion mit Mailing-Liste

---

## 4. 🔴 Platzhalter-Daten durch echte Daten ersetzen

### 4.1 Kontaktdaten
Folgende Platzhalter-Daten sind **durchgehend** im Projekt verteilt und müssen überall ersetzt werden:

| Platzhalter | Dateien |
|---|---|
| `Musterstraße 42, 80331 München` | `kontakt.astro`, `impressum.astro`, `datenschutz.astro`, `BaseLayout.astro` (Schema.org) |
| `+49 123 456789` | `kontakt.astro`, `anfrage.astro`, `termin.astro`, `Footer.astro`, `BaseLayout.astro` |
| `info@energierichter-beispiel.de` | `kontakt.astro`, `anfrage.astro`, `DoubleOptIn.astro`, `impressum.astro` |
| `datenschutz@energierichter-beispiel.de` | `datenschutz.astro` |
| `Max Mustermann, Geschäftsführer` | `impressum.astro` |
| `HRB 123456` / `DE 123 456 789` | `impressum.astro` |

### 4.2 Site-URL
- **Datei:** `astro.config.mjs`
- **Ist-Zustand:** `site: 'https://www.energiemakler-beispiel.de'` ← alter Name + Platzhalter-Domain
- **To-Do:**
  - [ ] Durch die echte Domain ersetzen

### 4.3 Schema.org Daten
- **Datei:** `src/layouts/BaseLayout.astro` (Zeile 49–77)
- **To-Do:**
  - [ ] Echte Adresse, Telefon, E-Mail eintragen
  - [ ] Geo-Koordinaten prüfen/anpassen
  - [ ] `sameAs`-Array mit Social-Media-Profilen befüllen

---

## 5. 🔴 Branding-Inkonsistenz beheben

- **Datei:** `src/components/Footer.astro`, Zeile 62
- **Ist-Zustand:** Logo-Text zeigt noch `Energie<span>Makler</span>` statt `Energie<span>richter</span>`
- **To-Do:**
  - [ ] `EnergieMakler` → `Energierichter` im Footer korrigieren

---

## 6. 🔴 Rechtliche Seiten finalisieren

### 6.1 Impressum
- **Datei:** `src/pages/impressum.astro`
- **To-Do:**
  - [ ] Echte Firmendaten eintragen (Name, Adresse, Geschäftsführer, HRB, USt-ID)
  - [ ] Von einem Rechtsanwalt prüfen lassen

### 6.2 Datenschutzerklärung
- **Datei:** `src/pages/datenschutz.astro`
- **Ist-Zustand:** Enthält einen Hinweis: *"Dies ist eine Platzhalter-Datenschutzerklärung."*
- **To-Do:**
  - [ ] An die tatsächlich eingesetzten Tools und Datenverarbeitungsprozesse anpassen
  - [ ] Alle Drittanbieter-Dienste auflisten (Calendly, Hosting, Analytics, Mailing, etc.)
  - [ ] Von einem Rechtsanwalt prüfen lassen

### 6.3 Cookie-Richtlinie
- **Datei:** `src/pages/cookie-richtlinie.astro`
- **Ist-Zustand:** Enthält einen Hinweis: *"Dies ist eine Platzhalter-Cookie-Richtlinie."*
- **To-Do:**
  - [ ] Alle tatsächlich eingesetzten Cookies auflisten
  - [ ] Tabellen für Analyse-, Marketing- und Embed-Cookies ergänzen
  - [ ] Von einem Rechtsanwalt prüfen lassen

---

## 7. 🟡 Content: Glossar befüllen

- **Dateien:** `src/content/glossar/`, `src/pages/glossar/`
- **Ist-Zustand:** Nur **1 Eintrag** vorhanden (`energieausweis.md`)
- **To-Do:**
  - [ ] Mindestens 15–20 relevante Glossar-Einträge erstellen, z.B.:
    - Grundversorgung, Arbeitspreis, Grundpreis, kWh, Netzentgelt
    - EEG-Umlage, Stromzähler, Nachtstrom, Wärmepumpe
    - Anbieterwechsel, Sonderkündigungsrecht, Preisgarantie
    - Gewerbestrom, Industriestrom, Lastgang
  - [ ] Alphabetische Navigation auf der Glossar-Übersichtsseite prüfen/verbessern

---

## 8. 🟡 Content: Blog ausbauen

- **Dateien:** `src/content/blog/`, `src/pages/blog/`
- **Ist-Zustand:** Nur **1 Beitrag** vorhanden (`energiekosten-senken-tipps.md`)
- **To-Do:**
  - [ ] Mindestens 5–10 Blog-Artikel erstellen
  - [ ] Themenbeispiele: Energiemarkt-Trends, Wechsel-Ratgeber, Saisonale Tipps, Gewerbe-Spezial
  - [ ] Bilder/Illustrationen für Blog-Posts beschaffen
  - [ ] Blog-Detailseite (`[...slug].astro`) auf korrekte Darstellung prüfen

---

## 9. 🟡 Analytics & Tracking einrichten

- **Datei:** `src/components/ConsentBanner.astro`
- **Ist-Zustand:** Consent-Banner funktioniert technisch (localStorage), aber es gibt **keine echten Analytics-Scripts** zum Freischalten.
- **To-Do:**
  - [ ] Analytics-Tool auswählen (z.B. Google Analytics 4, Plausible, Fathom, Matomo)
  - [ ] Analytics-Script mit `data-consent="analytics"` einbinden
  - [ ] Optional: Marketing-Pixel (Facebook, LinkedIn) mit `data-consent="marketing"` einbinden
  - [ ] Conversion-Tracking für Formular-Absendungen und Terminbuchungen
  - [ ] Cookie-Richtlinie entsprechend aktualisieren

---

## 10. 🟡 Google Maps Integration

- **Datei:** `src/pages/kontakt.astro`, Zeile 69–74
- **Ist-Zustand:** Nur ein grauer Platzhalter: *"Kartenansicht (nach Cookie-Zustimmung)"*
- **To-Do:**
  - [ ] Google Maps Embed oder Alternative (OpenStreetMap) einbinden
  - [ ] Consent-Integration (Kategorie `embeds`) korrekt anwenden
  - [ ] Fallback-Ansicht für Nutzer ohne Consent beibehalten

---

## 11. 🟡 Testimonials & Referenzen durch echte Daten ersetzen

- **Dateien:** `src/pages/index.astro`, `src/pages/referenzen.astro`
- **Ist-Zustand:** Alle Testimonials sind **fiktiv** (Thomas K., Maria S., Andreas W., etc.)
- **To-Do:**
  - [ ] Echte Kundenstimmen einholen (mit schriftlicher Einwilligung)
  - [ ] Zahlen verifizieren (5.000+ Kunden, 420 € Ersparnis, 4.9/5 Bewertung)
  - [ ] Trust-Badges verifizieren (z.B. "TÜV-geprüft" – nur verwenden wenn tatsächlich zertifiziert)
  - [ ] Optional: Google Reviews oder Trustpilot-Widget integrieren

---

## 12. 🟡 SEO & Meta-Assets

- **To-Do:**
  - [ ] Open Graph Bild erstellen (`/public/og-default.jpg` fehlt)
  - [ ] Social Media Profile verlinken (`sameAs` in Schema.org)
  - [ ] `robots.txt` prüfen und anpassen
  - [ ] Sitemap generieren und bei Google Search Console einreichen
  - [ ] Favicon prüfen / ggf. eigenes Logo einsetzen

---

## 13. 🟡 Fehlende Seiten

- **To-Do:**
  - [ ] **404-Seite** erstellen (`src/pages/404.astro`) – aktuell nicht vorhanden
  - [ ] Optional: **Über-Uns**-Seite mit Team-Vorstellung (aktuell leitet "Über uns" auf `/transparenz`)

---

## 14. 🟡 Hosting & Deployment

- **Ist-Zustand:** Kein Hosting/Deployment konfiguriert
- **To-Do:**
  - [ ] Hosting-Provider auswählen (z.B. Vercel, Netlify, Cloudflare Pages)
  - [ ] Deployment-Pipeline einrichten (z.B. Git-Push → Auto-Deploy)
  - [ ] Eigene Domain konfigurieren und SSL-Zertifikat einrichten
  - [ ] Umgebungsvariablen für API-Keys hinterlegen

---

## 15. 🟢 Weitere Optimierungen

### 15.1 Performance
- [ ] Bilder optimieren (WebP/AVIF-Format, Lazy Loading)
- [ ] Font-Loading optimieren (Preload für Heading-Font)
- [ ] Lighthouse-Score prüfen und optimieren

### 15.2 Accessibility
- [ ] Kontrastverhältnisse prüfen
- [ ] Screenreader-Tests durchführen
- [ ] Fokus-Styles für Keyboard-Navigation prüfen

### 15.3 Social Media
- [ ] Social-Media-Icons im Footer hinzufügen (aktuell keine vorhanden)
- [ ] Social-Media-Profile verlinken

### 15.4 Zielgruppen-Seiten erweitern
- **Dateien:** `src/pages/zielgruppen/*.astro`
- [ ] Inhalte der 4 Zielgruppen-Seiten erweitern und individualisieren
- [ ] Branchenspezifische Case-Studies oder Beispielrechnungen hinzufügen

---

## Empfohlene Reihenfolge

| Phase | Aufgaben | Priorität |
|-------|----------|-----------|
| **Phase 1** | Platzhalter-Daten ersetzen, Branding fixen, Site-URL korrigieren | 🔴 |
| **Phase 2** | Formular-Backend + Mailing-Service anbinden | 🔴 |
| **Phase 3** | Calendly einrichten + Consent testen | 🔴 |
| **Phase 4** | Rechtliche Seiten finalisieren (Anwalt) | 🔴 |
| **Phase 5** | Glossar + Blog befüllen | 🟡 |
| **Phase 6** | Analytics, Maps, Testimonials | 🟡 |
| **Phase 7** | 404-Seite, SEO-Assets, Hosting einrichten | 🟡 |
| **Phase 8** | Performance, Accessibility, Social Media | 🟢 |
