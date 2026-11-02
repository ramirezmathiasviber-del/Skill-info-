<div align="center">

<img alt="Skill Info" src="https://capsule-render.vercel.app/api?type=waving&height=210&text=☾%20skill.info&fontSize=56&fontAlignY=40&desc=Visual%20knowledge%20for%20AI&descAlignY=61&color=0:160b2d,42:4b237d,75:7651c9,100:b99cff&fontColor=ffffff" width="100%" />

### HTML-native knowledge for AI

`skill.info` supercharges AI agents with reusable design taste, images, charts, examples, rules and important context without making you paste the same stuff into every chat thread.

![HTML](https://img.shields.io/badge/HTML-native-6D45C7?style=flat-square&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-visual-825ED4?style=flat-square&logo=css&logoColor=white) ![Node](https://img.shields.io/badge/loader-Node.js-9876E2?style=flat-square&logo=nodedotjs&logoColor=white) ![Status](https://img.shields.io/badge/status-experimental-3B255B?style=flat-square)

[![Support Development](https://img.shields.io/badge/Support%20Development-Donate-7651C9?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://nowpayments.io/donation/Support.Devs)

</div>

---

## The idea

Most AI skills are text. `skill.info` is HTML underneath, so one skill can hold rules, UI references, images, charts, code, examples and other useful knowledge in one place.

Instead of pasting screenshots, design references, charts, examples or long explanations into every new thread, the agent can pull the useful parts from the skill when it needs them.

That means the agent can keep stronger visual context and better design taste while the chat stays shorter and cleaner.

The loader searches the file and sends only the useful parts to the model.

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

```html
<section data-skill-entry data-tags="dashboard hierarchy spacing">
  <img src="assets/dashboard.png" alt="Dashboard reference">
  <p data-rule>Keep the main action easy to scan.</p>
</section>
```

---

## Start building

**[Use the starter template](templates/skill.info)** — copy it and replace the example entries with your own knowledge.

**[Read the usage guide](docs/USAGE.md)** — creating a skill, adding images, and using the format with coding agents.

```text
my-skill/
├── skill.info
├── assets/
│   └── dashboard.png
└── loader.js
```

Images are normal files. Put them in `assets/`, then reference them from `skill.info` with a relative `<img src="assets/...">` path.

### Native adapter

**[`adapter/skill-info-adapter.js`](adapter/skill-info-adapter.js)** turns `skill.info` into the discovery format the coding app already understands while keeping `skill.info` as the source of truth.

```bash
node adapter/skill-info-adapter.js . auto
```

`auto` detects the project when possible. You can also choose `codex`, `claude`, `cursor`, `copilot`, `gemini`, `opencode`, or `generic`.

The adapter can generate native `SKILL.md`, Claude skill/instruction files, Cursor rules, Copilot instructions, Gemini instructions, OpenCode instructions, or a portable `AGENTS.md` fallback.

This means a new desktop coding app only needs a small target mapping added to the adapter instead of changing the `skill.info` format.

> `skill.info` is experimental. Coding tools do not natively recognize the extension itself yet; this adapter installs the native discovery layer for them.

---

## What it can hold

![Text](https://img.shields.io/badge/text-rules-4A2A70?style=flat-square) ![Images](https://img.shields.io/badge/images-references-624093?style=flat-square) ![UI](https://img.shields.io/badge/UI-layouts-7854AE?style=flat-square) ![Charts](https://img.shields.io/badge/charts-data-8C69C5?style=flat-square) ![Code](https://img.shields.io/badge/code-examples-A080DB?style=flat-square)

A visual reference can sit beside the rule that explains it. The AI gets the real example instead of only a text description.

You can keep screenshots, UI references, diagrams, charts and other visual material inside the skill once, then reuse that knowledge across future agent work without pasting it again and again.

---

## Retrieval

**Build a compact analytics dashboard**

`dashboard layout` **98%** · `metric cards` **91%** · `chart spacing` **86%** · `primary action` **72%**

Only matching knowledge reaches the model.

---

## Files

`skill.info` — main knowledge  
`adapter/skill-info-adapter.js` — native coding-agent installer  
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
