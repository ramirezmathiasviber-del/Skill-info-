<div align="center">

<img alt="Skill Info" src="https://capsule-render.vercel.app/api?type=waving&height=220&text=☾%20skill.info&fontSize=56&fontAlignY=40&desc=Visual%20knowledge%20for%20AI&descAlignY=61&color=0:160b2d,42:4b237d,75:7651c9,100:b99cff&fontColor=ffffff" width="100%" />

### HTML-native knowledge for AI

`skill.info` keeps instructions, visuals, examples and code together — then retrieves only what the model needs.

![HTML](https://img.shields.io/badge/HTML-native-6D45C7?style=flat-square&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-visual-825ED4?style=flat-square&logo=css&logoColor=white) ![Node](https://img.shields.io/badge/loader-Node.js-9876E2?style=flat-square&logo=nodedotjs&logoColor=white) ![Status](https://img.shields.io/badge/status-experimental-3B255B?style=flat-square)

</div>

---

## ☾ The idea

Most AI skills are mostly text. `skill.info` is different: it is HTML underneath, so the knowledge can also be visual.

**Rules + screenshots + layouts + charts + examples + code can live in one skill.**

The model does not need the whole file. The loader searches it and returns only the useful parts.

---

## ☾ How it works

<div align="center">

**`skill.info`**　→　**`loader.js`**　→　**AI context**

<sub>store knowledge　　　　　find what matters　　　　　send only that</sub>

</div>

> **Rich skill. Small context.**

---

## ☾ What it can hold

![Text](https://img.shields.io/badge/text-rules-4A2A70?style=flat-square) ![Images](https://img.shields.io/badge/images-references-624093?style=flat-square) ![UI](https://img.shields.io/badge/UI-layouts-7854AE?style=flat-square) ![Charts](https://img.shields.io/badge/charts-data-8C69C5?style=flat-square) ![Code](https://img.shields.io/badge/code-examples-A080DB?style=flat-square)

A dashboard reference can live beside the rule that explains why it works. A chart can live beside its data. A component can live beside its CSS.

That gives the AI the **actual reference**, not just a sentence describing it.

---

## ☾ Retrieval

When the task is **Build a compact analytics dashboard**, the loader can find things like:

**dashboard layout**　`98%`  
**metric cards**　`91%`  
**chart spacing**　`86%`  
**primary action**　`72%`

Everything unrelated stays out of the model context.

---

## ☾ Files

**`skill.info`** — the main HTML-native knowledge file  
**`loader.js`** — searches and retrieves useful parts  
**`assets/`** — images, diagrams, fonts and data  
**`index.html`** — optional browser preview

---

<div align="center">

### ☾ Store more. Send less.

**Visual knowledge without turning the whole skill into one giant prompt.**

<sub>Experimental format proposal · not an industry standard</sub>

</div>
