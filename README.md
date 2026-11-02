<div align="center">

<br />

# ☾ Skill Info

### A visual skill format for AI

**A wrapped `index.html` that can teach AI with text, code, images, charts, and real visual references.**

<br />

<img alt="Skill Info" src="https://capsule-render.vercel.app/api?type=soft&height=180&text=skill.info&fontSize=58&fontAlignY=46&desc=HTML-native%20knowledge%20for%20AI&descAlignY=70&color=0:2b174d,45:6d3cc7,100:b78cff&fontColor=ffffff&animation=fadeIn" width="100%" />

<br />

![HTML](https://img.shields.io/badge/HTML-native-7c4dff?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-visual-9b6dff?style=flat-square&logo=css&logoColor=white)
![AI](https://img.shields.io/badge/AI-readable-b58cff?style=flat-square)
![Status](https://img.shields.io/badge/status-experimental-34234f?style=flat-square)

`text` · `UI` · `images` · `charts` · `diagrams` · `code` · `references`

</div>

<br />

## ☾ What is Skill Info?

`skill.info` is basically an **HTML page made for AI knowledge**.

Instead of putting everything into a giant Markdown file, you can build the skill using normal HTML and CSS. The skill can show real layouts, screenshots, charts, components, examples, diagrams, and rules.

The browser can render it. The AI loader can search it.

```html
<section data-skill-entry data-tags="dashboard hierarchy spacing">
  <h2>Dashboard hierarchy</h2>
  <img src="assets/dashboard.png" alt="Dashboard example" />
  <p data-tip>Keep the main action easy to find.</p>
</section>
```

<br />

## How it works

<div align="center">

```text
╭──────────────────────────────╮
│          skill.info          │
│                              │
│  HTML · CSS · CODE · MEDIA   │
╰──────────────┬───────────────╯
               │
               ▼
╭──────────────────────────────╮
│            loader            │
│                              │
│  search · rank · retrieve    │
╰──────────────┬───────────────╯
               │
               ▼
╭──────────────────────────────╮
│           AI model           │
│                              │
│     useful pieces only       │
╰──────────────────────────────╯
```

</div>

The loader does **not** dump the entire skill into the AI context. It finds the sections related to the current task and loads only those pieces.

<br />

## Visual knowledge

A normal text skill might say:

> Use good dashboard hierarchy.

A Skill Info file can actually include the dashboard reference, CSS, layout code, spacing rules, chart example, and explanation together.

```html
<figure data-skill-entry data-type="reference">
  <img src="assets/reference.png" alt="UI reference" />
  <figcaption>Reference showing the intended hierarchy.</figcaption>
</figure>
```

Images and other large assets can stay in an `assets/` folder while `skill.info` points to them.

<br />

## One file, two readers

<table>
<tr>
<td width="50%" valign="top">

### Browser

Renders the skill like a webpage.

- HTML layouts
- CSS styling
- images
- SVG
- charts
- demos

</td>
<td width="50%" valign="top">

### AI loader

Reads the skill as knowledge.

- searches tags
- finds sections
- reads rules
- follows assets
- ranks matches
- builds context

</td>
</tr>
</table>

<br />

## ☾ Project structure

```text
my-skill/
│
├── skill.info          main HTML skill
├── loader.js           AI retrieval loader
│
└── assets/
    ├── images/         screenshots + references
    ├── diagrams/       visual explanations
    ├── icons/          icon examples
    ├── fonts/          typography
    └── data/           chart data
```

<br />

## Retrieval

For a request like:

```text
Build a compact analytics dashboard
```

The loader might find:

```text
dashboard-layout     ████████████████████  98%
metric-card          ██████████████████    91%
chart-spacing        █████████████████     86%
primary-action       ██████████████        72%
```

Only those useful sections need to reach the model.

<br />

## Files

| File | Purpose |
| --- | --- |
| `skill.info` | Main wrapped HTML skill |
| `index.html` | Browser-friendly example |
| `loader.js` | Searches and retrieves knowledge |
| `README.md` | Explains the format |

<br />

<div align="center">

### ☾ Store rich knowledge. Send small context.

A huge skill should **not** become a huge prompt.

<br />

> [!NOTE]
> Skill Info is currently an experimental format proposal, not an industry standard.

<br />

**`skill.info`**

*HTML for humans · visual knowledge for AI*

☾

</div>
