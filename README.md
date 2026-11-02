# Skill Info

`skill.info` is a proposed format for giving AI agents large, structured skill libraries without dumping the whole library into the model context.

A skill can contain instructions, UI rules, code examples, design patterns, references, and pointers to assets such as images, icons, and fonts.

## The idea

Normal AI skill files can become one giant wall of text. That wastes context and becomes hard to search.

Skill Info separates **storage** from **context**.

The full skill can be very large. A loader reads the file, searches its entries, and sends only the useful pieces to the AI.

```text
User request
    ↓
Skill loader
    ↓
Read skill.info metadata
    ↓
Search tags + text
    ↓
Select useful entries
    ↓
Build small context packet
    ↓
AI model
```

## `skill.info`

The root `skill.info` file is JSON. It contains metadata, global instructions, searchable entries, and asset references.

An entry can describe a component, layout, rule, example, reference, or other piece of knowledge.

Example:

```json
{
  "type": "component",
  "name": "Primary Button",
  "tags": ["button", "action"],
  "html": "<button class=\"primary\">Continue</button>",
  "css": ".primary { min-height:36px; padding:0 14px; }",
  "tips": ["Use for the main action."]
}
```

## Loader

`loader.js` is the reference loader in this repo.

It does four basic things:

1. Opens `skill.info`.
2. Breaks the user's request into search words.
3. Scores entries using their name, type, tags, rules, tips, and code.
4. Returns only the best matching entries plus the global instructions.

This returned object is the **context packet**. An AI app can put that packet into its system/developer context before asking the model to complete the task.

## Run it

Node.js 18+ is enough. No packages are required.

```bash
node loader.js "design a dashboard with a primary button"
```

The command prints JSON containing only the relevant skill knowledge.

## Why this matters

A 2 GB skill should not mean sending 2 GB to an AI model. The loader should search the skill first. Only a small amount of relevant information reaches the model.

For truly large skills, the same format can later use a real search index, embeddings, SQLite, or another database. The loader API can stay mostly the same.

## Assets

Do not normally place large images or fonts directly inside JSON. Reference them using a path, URI, or content hash. A future `.skill` container can package `skill.info`, the index, code, images, fonts, icons, and references into one portable file.

## Status

This repository is an early format proposal and reference implementation. It is not an industry standard yet.
