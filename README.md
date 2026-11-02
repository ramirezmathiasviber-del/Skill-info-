<div align="center">

<img alt="Skill Info" src="https://capsule-render.vercel.app/api?type=waving&height=210&text=☾%20skill.info&fontSize=56&fontAlignY=40&desc=Visual%20knowledge%20for%20AI&descAlignY=61&color=0:160b2d,42:4b237d,75:7651c9,100:b99cff&fontColor=ffffff" width="100%" />

### HTML-native knowledge for AI

`skill.info` keeps instructions, visuals, examples and code together, then retrieves only what the model needs.

![HTML](https://img.shields.io/badge/HTML-native-6D45C7?style=flat-square&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-visual-825ED4?style=flat-square&logo=css&logoColor=white) ![Node](https://img.shields.io/badge/loader-Node.js-9876E2?style=flat-square&logo=nodedotjs&logoColor=white) ![Status](https://img.shields.io/badge/status-experimental-3B255B?style=flat-square)

</div>

---

## The idea

Most AI skills are text. `skill.info` is HTML underneath, so the same skill can hold rules, UI references, images, charts and working examples.

The loader searches that file and sends only the useful parts to the model.

---

## How it works

<div align="center">

<table>
<tr>
<td align="center"><strong>skill.info</strong><br><sub>rich knowledge</sub></td>
<td align="center">→</td>
<td align="center"><strong>loader.js</strong><br><sub>search + retrieve</sub></td>
<td align="center">→</td>
<td align="center"><strong>AI context</strong><br><sub>only what matters</sub></td>
</tr>
</table>

</div>

The format stays visual for people while remaining searchable for AI.

```html
<section data-skill-entry data-tags="dashboard hierarchy spacing">
  <img src="assets/dashboard.png" alt="Dashboard reference">
  <p data-rule>Keep the main action easy to scan.</p>
</section>
```

---

## Start building

**[Use the starter template](templates/skill.info)** — copy it and replace the example entries with your own knowledge.

**[Read the usage guide](docs/USAGE.md)** — creating a skill, adding images, and using the format with Codex or Claude Code.

```text
my-skill/
├── skill.info
├── assets/
│   └── dashboard.png
└── loader.js
```

Images are normal files. Put them in `assets/`, then reference them from `skill.info` with a relative `<img src="assets/...">` path.

> `skill.info` is experimental. Codex and Claude Code do not natively discover this extension yet. The usage guide shows how to connect it through their normal project/skill instructions.

---

## What it can hold

![Text](https://img.shields.io/badge/text-rules-4A2A70?style=flat-square) ![Images](https://img.shields.io/badge/images-references-624093?style=flat-square) ![UI](https://img.shields.io/badge/UI-layouts-7854AE?style=flat-square) ![Charts](https://img.shields.io/badge/charts-data-8C69C5?style=flat-square) ![Code](https://img.shields.io/badge/code-examples-A080DB?style=flat-square)

A visual reference can sit beside the rule that explains it. The AI gets the real example instead of only a text description.

---

## Retrieval

**Build a compact analytics dashboard**

`dashboard layout` **98%** · `metric cards` **91%** · `chart spacing` **86%** · `primary action` **72%**

Only matching knowledge reaches the model.

---

## Files

`skill.info` — main knowledge  
`loader.js` — retrieval  
`assets/` — visual references  
`templates/skill.info` — clean starter  
`docs/USAGE.md` — setup + agent guide  
`index.html` — optional preview

---

<div align="center">

### Store more. Send less.

<sub>Experimental format proposal · not an industry standard</sub>

</div>
