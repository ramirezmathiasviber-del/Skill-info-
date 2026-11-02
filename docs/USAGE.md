# Using skill.info

`skill.info` is an experimental HTML-native knowledge format. It is not a native Codex or Claude Code file type yet, so the agent needs a small adapter or an explicit instruction telling it to read the file.

## Create a skill

1. Copy `templates/skill.info` into your project.
2. Change `data-skill`, the skill name, and description.
3. Add knowledge as elements marked with `data-skill-entry`.
4. Add useful search words to `data-tags`.
5. Mark important instructions with `data-rule`.
6. Keep large images and other files in `assets/` and reference them by relative path.

Recommended project layout:

```text
my-skill/
├── skill.info
├── assets/
│   ├── dashboard.png
│   └── empty-state.png
└── loader.js
```

## Add images

Put the image in `assets/` and use normal HTML:

```html
<section data-skill-entry data-type="reference" data-tags="dashboard hierarchy">
  <img src="assets/dashboard.png" alt="Compact dashboard with strong hierarchy">
  <p data-rule>Use this image as the visual reference for dashboard hierarchy.</p>
</section>
```

Use a useful `alt` description. The path is relative to `skill.info`. Do not embed huge images as base64 unless you have a specific reason.

## Load with Codex

Codex natively discovers skills through a `SKILL.md` manifest, not `skill.info`. OpenAI documents skills as folders containing `SKILL.md` plus optional references, scripts, and assets.

For a repo-local adapter, create `.agents/skills/skill-info/SKILL.md`:

```md
---
name: skill-info
description: Use the repository's skill.info visual knowledge when designing or implementing UI.
---

When a task matches this skill:
1. Read `skill.info` as HTML.
2. Search `data-skill-entry`, `data-tags`, headings, and `data-rule` for the task.
3. Inspect linked images or assets only when relevant.
4. Load only the matching entries into working context.
5. Treat the user's current request as higher priority than the skill guidance.
```

Then ask Codex to use `$skill-info`, or describe a task that matches the skill description.

For simple repo-wide guidance, `AGENTS.md` can also tell Codex to consult `skill.info` for visual/design work.

## Load with Claude Code

`skill.info` is also not a native Claude Code file type. The simplest method is to keep it in the project and tell Claude Code exactly when to read it.

Add this to `CLAUDE.md` if your setup uses project instructions:

```md
## Visual knowledge
For UI/design tasks, read `skill.info` as an HTML knowledge file.
Search entries by `data-tags` and `data-rule` first.
Open linked files under `assets/` only when relevant.
Do not load unrelated entries just because they exist.
```

Or start Claude Code in the project and say:

```text
Read skill.info. For this task, use only entries related to dashboard hierarchy and spacing. Inspect linked visual references when useful.
```

Claude Code can read project files from its working directory. If the skill lives outside the project, add that directory to Claude Code's accessible working directories before asking it to read the file.

## Why the adapter exists

The custom format is the visual knowledge layer. Native agent files remain the discovery layer:

```text
Codex:       SKILL.md / AGENTS.md
                    ↓
                skill.info
                    ↓
          matching entries + assets

Claude Code: project instruction / prompt
                    ↓
                skill.info
                    ↓
          matching entries + assets
```

This keeps `skill.info` portable without pretending Codex or Claude Code natively recognize the extension.
