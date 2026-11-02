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

**Skill Info makes the skill a webpage.** It can hold the rule, the code, and the visual reference in the same place.

```html
<section data-skill-entry data-tags="dashboard hierarchy spacing">
  <h2>Dashboard hierarchy</h2>
  <img src="assets/dashboard.png" alt="Dashboard reference" />
  <p data-rule>Keep the title, main metric and action easy to scan.</p>
</section>
```

The AI does not need to guess what the design should look like. The reference can be part of the knowledge.

---

## ☾ How it works

<table>
<tr>
<td align="center" width="24%">
<br />
<strong>01</strong><br /><br />
<code>skill.info</code><br />
<sub>HTML · CSS · visual knowledge</sub>
<br /><br />
</td>
<td align="center" width="14%"><strong>→</strong><br /><sub>search</sub></td>
<td align="center" width="24%">
<br />
<strong>02</strong><br /><br />
<code>loader.js</code><br />
<sub>tags · rules · metadata</sub>
<br /><br />
</td>
<td align="center" width="14%"><strong>→</strong><br /><sub>retrieve</sub></td>
<td align="center" width="24%">
<br />
<strong>03</strong><br /><br />
<strong>AI context</strong><br />
<sub>only useful knowledge</sub>
<br /><br />
</td>
</tr>
</table>

<br />

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
  <img src="assets/dashboard.png" alt="Dashboard hierarchy reference" />
  <figcaption data-rule>
    The page title leads. Metrics come second. Actions stay obvious.
  </figcaption>
</figure>
```

This can work with screenshots, UI states, SVG diagrams, charts, typography, icons, motion examples, and code demos.

---

## ☾ Two readers. One file.

<table>
<tr>
<td width="50%" valign="top">
<br />
<strong>Browser</strong>
<br /><br />
See the skill as a real visual document.<br /><br />
<sub>layouts · CSS · images · charts · examples</sub>
<br /><br />
</td>
<td width="50%" valign="top">
<br />
<strong>AI loader</strong>
<br /><br />
Search the same file as structured knowledge.<br /><br />
<sub>tags · headings · rules · code · assets</sub>
<br /><br />
</td>
</tr>
</table>

---

## ☾ Retrieval

For a task like **“Build a compact analytics dashboard”**, the loader can narrow a huge skill down to the strongest matches.

<table>
<tr><td><strong>dashboard-layout</strong></td><td width="65%">████████████████████</td><td align="right"><strong>98%</strong></td></tr>
<tr><td><strong>metric-card</strong></td><td>██████████████████</td><td align="right"><strong>91%</strong></td></tr>
<tr><td><strong>chart-spacing</strong></td><td>█████████████████</td><td align="right"><strong>86%</strong></td></tr>
<tr><td><strong>primary-action</strong></td><td>██████████████</td><td align="right"><strong>72%</strong></td></tr>
</table>

Only those matching sections need to reach the model.

---

## ☾ Project structure

<table>
<tr><td><code>skill.info</code></td><td><strong>Main knowledge</strong><br /><sub>HTML-native skill with rules, visuals and examples</sub></td></tr>
<tr><td><code>loader.js</code></td><td><strong>Retrieval layer</strong><br /><sub>finds and ranks useful parts</sub></td></tr>
<tr><td><code>assets/</code></td><td><strong>Visual library</strong><br /><sub>images, diagrams, icons, fonts and chart data</sub></td></tr>
<tr><td><code>index.html</code></td><td><strong>Preview</strong><br /><sub>optional browser-friendly view</sub></td></tr>
</table>

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
