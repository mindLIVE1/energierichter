# 📝 Inhalte bearbeiten – Anleitung

Diese Anleitung erklärt, wie Sie Inhalte auf der Energierichter-Website selbst hinzufügen oder ändern können, ohne einen Entwickler kontaktieren zu müssen.

---

## 📁 Wo liegen die Inhalte?

Alle bearbeitbaren Inhalte befinden sich in zwei Ordnern:

| Ordner | Was liegt dort? |
|---|---|
| `src/data/` | JSON-Dateien für strukturierte Inhalte (FAQs, Leistungen, Referenzen, etc.) |
| `src/content/blog/` | Blog-Artikel als Markdown-Dateien (`.md`) |
| `src/content/glossar/` | Glossar-Einträge als Markdown-Dateien (`.md`) |

> ⚠️ **Wichtig:** Nach jeder Änderung muss die Website neu gebaut und deployed werden (`npm run build`).

---

## 🔧 JSON-Dateien bearbeiten

### Allgemeine Regeln für JSON

- Texte stehen immer in **doppelten Anführungszeichen**: `"Text hier"`
- Einträge werden durch **Kommas** getrennt
- Der letzte Eintrag in einer Liste hat **kein Komma** am Ende
- Sonderzeichen: `&` → `&amp;`, `"` im Text → `\"`

### 📊 Referenzen / Kundenstimmen

**Datei:** `src/data/testimonials.json`

So fügen Sie eine neue Kundenbewertung hinzu:

```json
{
  "quote": "Der Text der Bewertung",
  "name": "Vorname N.",
  "role": "Position, Unternehmen",
  "rating": 5
}
```

Fügen Sie den neuen Eintrag am Ende der Liste ein (vor der schließenden eckigen Klammer `]`), mit einem Komma nach dem vorherigen Eintrag.

---

### ❓ FAQ (Häufig gestellte Fragen)

**Datei:** `src/data/faqs.json`

```json
{
  "question": "Ihre Frage hier?",
  "answer": "Die Antwort auf die Frage."
}
```

---

### ⚡ Leistungen / Services

**Datei:** `src/data/services.json`

Die Datei hat zwei Bereiche:
- `"highlight"` – Die 3 Hauptleistungen, die auf der Startseite gezeigt werden
- `"all"` – Alle Leistungen, die auf der Leistungsseite gezeigt werden

```json
{
  "icon": "⚡",
  "title": "Titel der Leistung",
  "description": "Beschreibung der Leistung."
}
```

> 💡 **Tipp:** Für Icons können Sie beliebige Emojis verwenden.

---

### 📈 Statistiken & Trust-Badges

**Datei:** `src/data/stats.json`

- `"trustBadges"` – Vertrauens-Badges auf der Startseite (z.B. "TÜV-geprüft")
- `"referenzenStats"` – Statistiken auf der Referenzen-Seite

---

### 🔍 Transparenz-Seite

**Datei:** `src/data/transparenz.json`

- `"coreMessage"` – Hauptbotschaft oben auf der Seite
- `"cards"` – Die 3 Prozesskarten
- `"questions"` – Fragen und Antworten im unteren Bereich

---

### 🎯 Zielgruppen-Seiten

**Datei:** `src/data/zielgruppen.json`

Jeder Eintrag erzeugt automatisch eine eigene Unterseite und einen Navigationslink.

**So fügen Sie eine neue Zielgruppe hinzu:**

```json
{
  "slug": "handwerk",
  "navLabel": "Handwerksbetriebe",
  "seo": {
    "title": "Energieberatung für Handwerksbetriebe | Energierichter",
    "description": "Beschreibung für Suchmaschinen..."
  },
  "hero": {
    "badge": "Für Handwerksbetriebe",
    "title": "Energiekosten im <span class=\"text-brand-400\">Handwerk</span> senken",
    "subtitle": "Kurze Beschreibung für den Header-Bereich."
  },
  "heroImageText": "Beschreibung für das Platzhalterbild",
  "painPoints": [
    { "icon": "🔧", "title": "Problem 1", "description": "Beschreibung des Problems." },
    { "icon": "📋", "title": "Problem 2", "description": "Beschreibung des Problems." },
    { "icon": "⏰", "title": "Problem 3", "description": "Beschreibung des Problems." }
  ],
  "benefits": [
    { "icon": "✅", "title": "Vorteil 1", "description": "Beschreibung des Vorteils." },
    { "icon": "💰", "title": "Vorteil 2", "description": "Beschreibung des Vorteils." },
    { "icon": "🤝", "title": "Vorteil 3", "description": "Beschreibung des Vorteils." }
  ],
  "faqs": [
    { "question": "Eine häufige Frage?", "answer": "Die Antwort darauf." }
  ]
}
```

> ⚠️ Der `"slug"` bestimmt die URL: `slug: "handwerk"` → Seite erreichbar unter `/zielgruppen/handwerk`

---

### 🏢 Firmendaten

**Datei:** `src/data/company.json`

Hier können Sie zentral Telefonnummer, E-Mail, Adresse und Öffnungszeiten ändern. Diese Daten werden automatisch auf allen Seiten aktualisiert (Kontakt, Anfrage, Footer).

---

### 📝 Prozess-Schritte

**Datei:** `src/data/process-steps.json`

- `"homepage"` – Die 3 Schritte auf der Startseite
- `"leistungen"` – Die 4 Schritte auf der Leistungsseite

---

## ✍️ Blog-Artikel hinzufügen

**Ordner:** `src/content/blog/`

1. Erstellen Sie eine neue `.md`-Datei (z.B. `mein-neuer-artikel.md`)
2. Beginnen Sie mit dem Frontmatter-Block:

```markdown
---
title: "Titel des Artikels"
description: "Kurze Beschreibung für die Übersicht und SEO."
pubDate: 2026-05-15
author: "Ihr Name"
tags: ["Energie", "Spartipps"]
---

Hier beginnt der Artikeltext. Sie können **Markdown-Formatierung** verwenden.

## Zwischenüberschrift

Weiterer Text mit [Links](https://beispiel.de) und Listen:

- Punkt 1
- Punkt 2
- Punkt 3
```

> 💡 Der Dateiname wird zur URL: `mein-neuer-artikel.md` → `/blog/mein-neuer-artikel`

---

## 📖 Glossar-Eintrag hinzufügen

**Ordner:** `src/content/glossar/`

1. Erstellen Sie eine neue `.md`-Datei (z.B. `grundlast.md`)
2. Frontmatter:

```markdown
---
title: "Grundlast"
description: "Kurze Definition des Begriffs."
letter: "G"
---

Hier folgt die ausführliche Erklärung des Begriffs...
```

---

## 🔄 Abschnitte ein-/ausschalten

In der `.env`-Datei können Sie einzelne Bereiche der Website aktivieren oder deaktivieren:

```
PUBLIC_ENABLE_BLOG=true
PUBLIC_ENABLE_REFERENZEN=true
PUBLIC_ENABLE_GLOSSAR=true
PUBLIC_ENABLE_ZIELGRUPPEN=true
PUBLIC_ENABLE_FAQ=true
PUBLIC_ENABLE_STATS=true
PUBLIC_ENABLE_LEISTUNGEN=true
PUBLIC_ENABLE_TRANSPARENZ=true
```

Setzen Sie einen Wert auf `false`, um den entsprechenden Bereich auszublenden.

---

## ❗ Häufige Fehler

| Problem | Lösung |
|---|---|
| Seite zeigt Fehler nach JSON-Änderung | Prüfen Sie auf fehlende Kommas oder Anführungszeichen |
| Neue Seite erscheint nicht | Stellen Sie sicher, dass die Website neu gebaut wurde |
| Sonderzeichen werden falsch angezeigt | Verwenden Sie `&amp;` statt `&` in JSON-Texten |
