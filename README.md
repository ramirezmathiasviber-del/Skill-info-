<div align="center">

<br />

<img alt="Skill Info" src="https://capsule-render.vercel.app/api?type=waving&height=250&text=☾%20skill.info&fontSize=58&fontAlignY=39&desc=Rich%20knowledge.%20Small%20context.&descAlignY=59&color=0:160b2d,35:3c176d,70:7147c9,100:c4a5ff&fontColor=ffffff&animation=fadeIn" width="100%" />

<br />

### An HTML-native skill format for AI

A `skill.info` file is a wrapped `index.html` built to hold **visual, structured knowledge** an AI can search and use.

<br />

![HTML](https://img.shields.io/badge/HTML-native-7C4DFF?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-visual-9368E8?style=flat-square&logo=css&logoColor=white)
![Node](https://img.shields.io/badge/loader-Node.js-AD8AFF?style=flat-square&logo=nodedotjs&logoColor=white)
![Status](https://img.shields.io/badge/status-experimental-2B174D?style=flat-square)

`text`　`code`　`UI`　`images`　`charts`　`diagrams`　`references`

<br />

</div>

## ☾ The idea

Most AI skill files are written like long instruction documents. That works for text, but it is weak for things that are visual.

**Skill Info treats the skill like a webpage.**

```html
<section data-skill-entry data-tags="dashboard hierarchy spacing">
  <h2>Dashboard hierarchy</h2>

  <img src="assets/dashboard.png" alt="Dashboard reference" />

  <p data-rule>
    Keep the title, main metric and primary action easy to scan.
  </p>
</section>
```

The same file can contain the explanation **and** the thing being explained.

<br />

<table>
<tr>
<td width="33%" valign="top">

### Write

Build knowledge with normal HTML and CSS.

Add rules, examples, code, screenshots, diagrams, charts and metadata.

</td>
<td width="33%" valign="top">

### Find

The loader searches the skill for sections related to the current task.

Unrelated knowledge stays out.

</td>
<td width="33%" valign="top">

### Use

Only the useful pieces become AI context.

The original skill can stay large and visual.

</td>
</tr>
</table>

<br />

## How it flows

```text
                         skill.info
                  HTML + CSS + visual knowledge
                              │
                              │ search
                              ▼
                         loader.js
                   tags + text + metadata
                              │
                              │ retrieve
                              ▼
                       context packet
                    only useful knowledge
                              │
                              ▼
                           AI model
```

**Storage can be rich. Context stays small.**

<br />

## ☾ Visual knowledge

Instead of writing this:

> Make the dashboard hierarchy good.

A skill can provide the actual reference and its rules together:

```html
<figure
  data-skill-entry
  data-type="reference"
  data-tags="dashboard hierarchy"
>
  <img src="assets/dashboard.png" alt="Dashboard hierarchy reference" />

  <figcaption data-rule>
    The page title leads. Metrics come second. Actions stay obvious.
  </figcaption>
</figure>
```

That pattern can work with screenshots, UI states, SVG diagrams, charts, typography, icons, motion examples and code demos.

<br />

## One file. Two ways to read it.

<table>
<tr>
<td width="50%" valign="top">

### Browser

Opens the skill visually.

You can inspect layouts, CSS, images, charts and examples like a normal webpage.

</td>
<td width="50%" valign="top">

### AI loader

Reads the same document as structured knowledge.

It can search `data-tags`, headings, rules, code and asset metadata.

</td>
</tr>
</table>

<br />

## Retrieval

A request like:

```text
Build a compact analytics dashboard
```

might produce:

```text
MATCH                              RELEVANCE
────────────────────────────────────────────
dashboard-layout                   98%
metric-card                        91%
chart-spacing                      86%
primary-action                     72%
```

The AI receives those useful sections instead of the whole skill.

<br />

## ☾ Structure

```text
my-skill/
│
├── skill.info          wrapped HTML skill
├── loader.js           retrieval layer
│
└── assets/
    ├── images/         screenshots + visual references
    ├── diagrams/       flows + explanations
    ├── icons/          icon references
    ├── fonts/          typography assets
    └── data/           chart + example data
```

<br />

## Files

| File | What it does |
| --- | --- |
| `skill.info` | Main HTML-native skill document |
| `index.html` | Example skill / browser preview |
| `loader.js` | Searches and retrieves useful knowledge |
| `README.md` | Explains the format |

<br />

<div align="center">

## ☾ Store rich knowledge.<br />Send small context.

A large skill should never become a large prompt just because it contains lots of knowledge.

The skill stays rich. The loader decides what the AI actually needs.

<br />

![Skill Info](https://img.shields.io/badge/skill.info-HTML%20for%20knowledge-7C4DFF?style=for-the-badge)

<br />

<sub>Experimental format proposal · not an industry standard</sub>

<br /><br />

☾

</div>
