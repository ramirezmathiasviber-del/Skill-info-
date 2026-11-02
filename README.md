<div align="center">

# ◇ Skill Info

### An HTML-native skill format for AI

**Write knowledge like a webpage. Let AI read it like a skill.**

![Status](https://img.shields.io/badge/status-experimental-111111?style=flat-square)
![Format](https://img.shields.io/badge/format-HTML5-111111?style=flat-square)
![Runtime](https://img.shields.io/badge/runtime-Node.js-111111?style=flat-square)
![License](https://img.shields.io/badge/spec-open-111111?style=flat-square)

`skill.info` • HTML • CSS • Images • Charts • Code • References

</div>

---

## What is Skill Info?

**Skill Info is a wrapped `index.html` file made for AI skills.**

Instead of forcing a skill into one giant Markdown or JSON wall, the skill is written with normal HTML structure. That means a skill can contain real layouts, CSS, images, diagrams, charts, examples, code, documentation, and machine-readable metadata in one familiar format.

```text
┌─────────────────────────────────────────────┐
│                 skill.info                  │
│                                             │
│  HTML structure      CSS visual knowledge  │
│  Images + diagrams   Charts + examples     │
│  Code patterns       Rules + references    │
│                                             │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
                 ┌──────────┐
                 │  Loader  │
                 └────┬─────┘
                      │ finds relevant sections
                      ▼
                 ┌──────────┐
                 │ AI model │
                 └──────────┘
```

## Why HTML?

HTML already knows how to describe structured information.

A heading is a heading. An image is an image. A code block is code. A figure can explain a layout. CSS can show how something should actually look. `data-*` attributes can add AI-specific tags without inventing another giant syntax.

```html
<section
  data-skill-entry
  data-type="component"
  data-tags="button primary action"
>
  <h2>Primary button</h2>

  <button class="primary">Continue</button>

  <p data-tip>Use one clear primary action per view.</p>
</section>
```

The file can still open like a normal webpage, while a loader can treat the same document as structured AI knowledge.

## How the loader works

The AI should **not** receive the whole skill every time.

```text
USER TASK
   │
   ▼
Parse skill.info
   │
   ▼
Read entry metadata + data-tags
   │
   ▼
Rank matching sections
   │
   ▼
Collect useful HTML, rules and assets
   │
   ▼
Small context packet
   │
   ▼
AI
```

For example, a request for a dashboard button can load the button rules, dashboard layout rules, related CSS, and matching visual references while ignoring unrelated sections.

## Visual knowledge

Because the base format is HTML, a skill can point to visual material directly.

```html
<figure data-skill-entry data-type="reference" data-tags="dashboard hierarchy">
  <img src="assets/dashboard-example.png" alt="Dashboard hierarchy example">
  <figcaption>
    Keep the page title, main metric and primary action visually clear.
  </figcaption>
</figure>
```

Charts can use HTML/SVG/canvas or structured data. Fonts, screenshots, icons, and other large files should normally live in `assets/` and be referenced from the skill instead of being converted into huge text blobs.

## Suggested project structure

```text
my-skill/
├── skill.info          ← HTML-native skill document
├── loader.js           ← reads + retrieves useful knowledge
└── assets/
    ├── images/
    ├── diagrams/
    ├── icons/
    ├── fonts/
    └── data/
```

## Design goal

> Store rich knowledge. Retrieve small context.

A skill may eventually become hundreds of megabytes or more because of screenshots, fonts, references, examples, and datasets. That does **not** mean all of it belongs in the model context.

The loader is the bridge between the large skill and the small amount of information the AI needs right now.

## Files in this repo

| File | Purpose |
| --- | --- |
| `skill.info` | Small format example / metadata prototype |
| `index.html` | HTML-native skill example |
| `loader.js` | Reference loader |
| `README.md` | Format overview |

## Status

> [!IMPORTANT]
> Skill Info is currently an **experimental format proposal**, not an industry standard.

The goal is to keep the format simple enough that a human can write it, a browser can understand it, and an AI tool can retrieve from it.

---

<div align="center">

**◇ skill.info**

*HTML for knowledge. Retrieval for AI.*

</div>
