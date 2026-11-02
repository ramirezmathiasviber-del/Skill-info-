<div align="center">

<br />

<pre>
███████╗██╗  ██╗██╗██╗     ██╗         ██╗███╗   ██╗███████╗ ██████╗
██╔════╝██║ ██╔╝██║██║     ██║         ██║████╗  ██║██╔════╝██╔═══██╗
███████╗█████╔╝ ██║██║     ██║         ██║██╔██╗ ██║█████╗  ██║   ██║
╚════██║██╔═██╗ ██║██║     ██║         ██║██║╚██╗██║██╔══╝  ██║   ██║
███████║██║  ██╗██║███████╗███████╗    ██║██║ ╚████║██║     ╚██████╔╝
╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝    ╚═╝╚═╝  ╚═══╝╚═╝      ╚═════╝
</pre>

### A webpage that teaches AI how to do something.

`skill.info` is a wrapped **index.html** file for AI skills.

![HTML](https://img.shields.io/badge/HTML-native-0d1117?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-visual_knowledge-0d1117?style=for-the-badge&logo=css&logoColor=white)
![Node](https://img.shields.io/badge/Loader-Node.js-0d1117?style=for-the-badge&logo=nodedotjs&logoColor=white)

**text · UI · images · charts · diagrams · code · references**

</div>

---

### The idea

Most AI skill files are walls of text. **Skill Info is visual.**

You write the skill like a webpage. The browser can render it, while an AI loader can understand its sections and retrieve only what matters.

<table>
<tr>
<td width="33%" valign="top">

#### 01 — Write

Use normal HTML + CSS.

```html
<section data-skill-entry
  data-tags="button ui">
  ...
</section>
```

</td>
<td width="33%" valign="top">

#### 02 — Retrieve

The loader searches tags, text, code, and metadata.

It skips unrelated sections.

</td>
<td width="33%" valign="top">

#### 03 — Build

The AI receives a small packet with the useful rules, visuals, and examples.

</td>
</tr>
</table>

### One file. Two readers.

```text
                         ┌───────────────────────────────┐
                         │          skill.info           │
                         │                               │
                         │   HTML   CSS   DATA   MEDIA   │
                         └───────────────┬───────────────┘
                                         │
                         ┌───────────────┴───────────────┐
                         │                               │
                         ▼                               ▼
                 ┌───────────────┐               ┌───────────────┐
                 │    Browser    │               │   AI Loader   │
                 │               │               │               │
                 │ renders skill │               │ finds context │
                 └───────────────┘               └───────┬───────┘
                                                         │
                                                         ▼
                                                 ┌───────────────┐
                                                 │   AI model    │
                                                 │ useful pieces │
                                                 │     only      │
                                                 └───────────────┘
```

### Visual knowledge is first-class

A skill does not have to *describe* every visual. It can contain or reference the visual itself.

```html
<figure
  data-skill-entry
  data-type="reference"
  data-tags="dashboard hierarchy spacing"
>
  <img src="assets/dashboard.png" alt="Dashboard reference" />
  <figcaption>
    Keep the title, key metric, and primary action easy to scan.
  </figcaption>
</figure>
```

That same idea works for screenshots, SVG diagrams, chart data, UI states, icons, fonts, animations, and code demos.

> **The point:** stop teaching visual work using only paragraphs.

### What the AI actually sees

The entire skill might be huge. The context should stay small.

```text
"Build a compact analytics dashboard"

                  ↓ search

┌─────────────────────────────────────────────┐
│ MATCHES                                     │
│                                             │
│  dashboard-layout        98%                │
│  metric-card             91%                │
│  chart-spacing           86%                │
│  primary-action          72%                │
└─────────────────────────────────────────────┘

                  ↓ retrieve

        small AI context packet
```

The loader can search `data-tags`, headings, text, code, asset metadata, and other machine-readable attributes.

### Anatomy of a Skill Info project

```text
my-skill/
│
├── skill.info              ← wrapped index.html
├── loader.js               ← retrieval layer
│
└── assets/
    ├── images/             ← screenshots + references
    ├── diagrams/           ← flows + explanations
    ├── icons/              ← visual vocabulary
    ├── fonts/              ← typography references
    └── data/               ← chart + example data
```

### Why HTML

<table>
<tr><td><b>Structure</b></td><td>Headings, sections, figures, tables, code and metadata already exist.</td></tr>
<tr><td><b>Visuals</b></td><td>Images, SVG, CSS, canvas and media can live beside the knowledge.</td></tr>
<tr><td><b>Preview</b></td><td>The same skill can be opened and inspected visually.</td></tr>
<tr><td><b>Extensible</b></td><td><code>data-*</code> attributes add AI metadata without replacing HTML.</td></tr>
<tr><td><b>Portable</b></td><td>The core format is plain text and uses web standards.</td></tr>
</table>

### Repository

| | File | Role |
|:--:|---|---|
| ◈ | `skill.info` | The skill document |
| ◫ | `index.html` | HTML example / preview |
| ↳ | `loader.js` | Finds relevant knowledge |
| ? | `README.md` | The format explained |

### Design rule

<div align="center">

## Store rich knowledge.<br/>Send small context.

A 2 GB skill should **not** become a 2 GB prompt.

</div>

The skill stays on disk. The loader retrieves the few sections the model needs. Larger implementations can later use search indexes, embeddings, SQLite, or other retrieval systems without changing the basic idea.

---

> [!NOTE]
> **Skill Info is an experimental format proposal.** It is not an industry standard yet.

<div align="center">

<br />

`<skill.info>`

**HTML for humans. Structured knowledge for AI.**

`</skill.info>`

<br />

</div>
