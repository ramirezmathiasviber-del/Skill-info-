<div align="center">

<img alt="Skill Info" src="https://capsule-render.vercel.app/api?type=waving&height=250&text=☾%20skill.info&fontSize=58&fontAlignY=39&desc=Rich%20knowledge.%20Small%20context.&descAlignY=59&color=0:160b2d,35:3c176d,70:7147c9,100:c4a5ff&fontColor=ffffff&animation=fadeIn" width="100%" />

### An HTML-native skill format for AI

A `skill.info` file is a wrapped `index.html` built to hold visual knowledge an AI can actually search and use.

![HTML](https://img.shields.io/badge/HTML-native-7C4DFF?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-visual-9368E8?style=flat-square&logo=css&logoColor=white)
![Node](https://img.shields.io/badge/loader-Node.js-AD8AFF?style=flat-square&logo=nodedotjs&logoColor=white)
![Status](https://img.shields.io/badge/status-experimental-2B174D?style=flat-square)

**text · code · UI · images · charts · diagrams · references**

</div>

---

## ☾ Why

AI skills are usually long text files. That is fine for instructions, but bad for visual knowledge.

**Skill Info makes the skill a webpage.**

It can hold the rule, the code, and the visual reference in the same place.

```html
<section data-skill-entry data-tags="dashboard hierarchy spacing">
  <h2>Dashboard hierarchy</h2>
  <img src="assets/dashboard.png" alt="Dashboard reference" />
  <p data-rule>Keep the title, main metric and action easy to scan.</p>
</section>
```

The AI does not need to guess what the design should look like. The reference can be part of the knowledge.

---

## How it works

**1. Write** — Build the skill with normal HTML and CSS. Add rules, examples, screenshots, charts, diagrams, code, and metadata.

**2. Find** — `loader.js` searches tags, headings, text, rules, code, and asset metadata for the current task.

**3. Use** — Only the best matching pieces are sent to the AI. Everything else stays out of context.

```text
skill.info
    ↓
search the skill
    ↓
loader.js
    ↓
select useful knowledge
    ↓
small context packet
    ↓
AI model
```

> **Storage can be rich. Context stays small.**

---

## ☾ Visual knowledge

Instead of only saying:

> Make the dashboard hierarchy good.

The skill can include the real reference beside the rule:

```html
<figure data-skill-entry
        data-type="reference"
        data-tags="dashboard hierarchy">

  <img src="assets/dashboard.png"
       alt="Dashboard hierarchy reference" />

  <figcaption data-rule>
    The page title leads. Metrics come second. Actions stay obvious.
  </figcaption>
</figure>
```

This can work with screenshots, UI states, SVG diagrams, charts, typography, icons, motion examples, and code demos.

---

## Two readers. One file.

### Browser

Open the skill visually like a webpage. See its layouts, CSS, images, charts, and examples.

### AI loader

Read the same file as structured knowledge. Search `data-tags`, headings, rules, code, and assets without loading everything.

---

## Retrieval

If the task is:

```text
Build a compact analytics dashboard
```

The loader can narrow a huge skill down to something like:

```text
dashboard-layout    98%
metric-card         91%
chart-spacing       86%
primary-action      72%
```

Only those matching sections need to reach the model.

---

## ☾ Project structure

```text
my-skill/
│
├── skill.info          main HTML-native skill
├── loader.js           retrieval layer
│
└── assets/
    ├── images/         screenshots + references
    ├── diagrams/       visual explanations
    ├── icons/          icon references
    ├── fonts/          typography assets
    └── data/           charts + example data
```

`skill.info` — the knowledge document  
`loader.js` — finds the useful parts  
`index.html` — optional browser preview  
`README.md` — explains the format

---

<div align="center">

## ☾ Store rich knowledge. Send small context.

A large skill should not become a large prompt.

**Keep the knowledge rich. Keep the context focused.**

![Skill Info](https://img.shields.io/badge/skill.info-HTML%20for%20knowledge-7C4DFF?style=for-the-badge)

<sub>Experimental format proposal · not an industry standard</sub>

<br /><br />

☾

</div>
