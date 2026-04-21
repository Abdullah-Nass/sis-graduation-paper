# Yarmouk University SIS — Bilingual Localization Prototype

> This site was adapted from the original Student Information System (SIS) of Yarmouk University as partial fulfillment of the requirements for the Bachelor's degree in Translation and Interpretation, Faculty of Arts, Yarmouk University, Irbid, Jordan.

---

## Overview

This project is a bilingual (Arabic–English) web application that replicates and adapts a Student Information System (SIS) interface. Built with React, TypeScript, and `react-intl`, it serves as a localization-focused case study demonstrating how real-world UI systems handle multilingual and technical localization challenges — including dynamic placeholders, Arabic pluralization rules, SEO metadata, character limits, and contextual ambiguity.

The application was developed as the primary dataset for an academic research paper on website localization, using a genuine institutional interface as its foundation.

---

## Features

- **Full i18n support** via JSON message files for Arabic (`ar`) and English (`en`)
- **Dynamic language switching** persisted in `localStorage`
- **Automatic RTL/LTR switching** — updates `dir`, `lang`, page title, and meta description on locale change
- **Arabic pluralization** handled through `react-intl`'s ICU message syntax (6 plural forms)
- **Dynamic placeholders** in translated strings with correct runtime rendering
- **Custom SVG progress gauge** that mirrors visually for RTL/LTR layouts
- **Client-side routing** with a login page, sidebar navigation, dashboard, header, and footer
- **SEO-adapted metadata** — titles and meta descriptions are independently localized per locale

---

## Tech Stack

| Layer                | Technology                           |
| -------------------- | ------------------------------------ |
| Framework            | React + TypeScript                   |
| Internationalization | `react-intl` (ICU message format)    |
| Translation Files    | JSON (key-value message files)       |
| Routing              | React Router (client-side)           |
| Styling              | CSS with RTL/LTR layout support      |
| State Persistence    | `localStorage` (language preference) |
| Version Control      | Git / GitHub                         |

---

## Project Structure

```
sis-localized/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Footer.tsx
│   │   └── ProgressGauge.tsx   # RTL/LTR-aware SVG gauge
│   ├── messages/
│   │   ├── ar.json             # Arabic translation file
│   │   └── en.json             # English translation file
│   ├── App.tsx                 # Language switching + i18n provider
│   └── index.tsx
├── package.json
└── README.md
```

---

## Localization Notes

### Placeholders

Dynamic variables (e.g., `{name}`) embedded in ICU message strings and tested for correct runtime rendering in both locales without string breakage.

### Pluralization

Arabic has six grammatical plural forms (zero, one, two, few, many, other). All count-sensitive strings use `react-intl`'s `{count, plural, ...}` syntax and are verified against edge cases: 0, 1, 2, 3–10, 11–99, and 100+.

### Directionality

Language switching triggers a full document update — `document.dir`, `document.documentElement.lang`, and the SVG gauge orientation — ensuring layout integrity in both RTL and LTR modes.

### SEO Metadata

Page titles and meta descriptions are independently localized to reflect natural search behavior in each locale, not literal translations of one another.

### Character Limits

UI strings (button labels, table headers, nav items) are adapted to fit constrained spaces in both scripts. Arabic often expands relative to English equivalents, which was factored into component design.

### Contextual Ambiguity

Terms with multiple meanings in academic contexts — such as _course_, _term_, _credit_, and _load_ — are disambiguated using surrounding UI context and user role, not resolved by dictionary default.

---

## Dataset

The translation dataset consists of structured JSON key-value pairs covering:

- UI labels and navigation items
- Dashboard notifications and status messages
- Login and form strings
- SEO metadata (titles, descriptions)
- Plural-sensitive messages
- Placeholder-bearing dynamic strings

The dataset was intentionally expanded beyond a minimal SIS translation to include examples of each localization challenge addressed in the research paper.

---

## Academic Context

**Degree**: Bachelor of Translation and Interpretation  
**Faculty**: Faculty of Arts, Yarmouk University  
**Institution**: Yarmouk University, Irbid, Jordan  
**Research Paper**: _Website Localization: Handling Placeholders, Pluralization, SEO, Character Limits, and Contextual Ambiguity_  
**Research Question**: How should translators handle key website localization challenges?

---

## Author

**Abdullah Naser**  
Translation and Interpretation Graduate  
Yarmouk University — Irbid, Jordan  
[GitHub](https://github.com/Abdullah-Nass) · [LinkedIn](https://www.linkedin.com/in/abdullah-naser-556537348/)

---

## License

This project is intended for academic and educational purposes. The original SIS design belongs to Yarmouk University. This adaptation is not affiliated with or endorsed by the university.
