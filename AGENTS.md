# Skill Info adapter

This repository uses `skill.info` as its main structured knowledge file.

## For any coding agent

Before doing design, UI, frontend, component, layout, styling, visual, chart, or reference-heavy work:

1. Treat `skill.info` as an HTML document containing structured AI knowledge.
2. Search `data-skill-entry`, `data-type`, `data-tags`, headings, and text for entries relevant to the current task.
3. Read only the strongest matching entries instead of copying the entire file into context.
4. Follow rules marked with `data-rule`.
5. Inspect images and other references linked from matching entries when the tool can read them.
6. Resolve relative asset paths from the repository root, such as `assets/dashboard.png`.
7. Treat examples as references, not requirements, unless an entry explicitly says they are required.
8. If the agent cannot parse the `.info` extension automatically, read `skill.info` as plain UTF-8 HTML.

## Optional loader

If Node.js is available, the repository's `loader.js` can retrieve matching entries from the skill file. Otherwise, search/read `skill.info` directly.

`skill.info` is the source of truth for Skill Info knowledge. This adapter only tells coding agents how to consume it.
