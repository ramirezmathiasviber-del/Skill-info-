#!/usr/bin/env node

/**
 * Skill Info reference loader.
 *
 * Reads skill.info and returns a small context packet containing only
 * entries that appear relevant to the user's request.
 *
 * Usage:
 *   node loader.js "design a dashboard with a primary button"
 */

const fs = require("node:fs");
const path = require("node:path");

const STOP_WORDS = new Set([
  "a", "an", "and", "are", "as", "at", "be", "build", "create", "design",
  "for", "from", "i", "in", "is", "it", "make", "of", "on", "or", "the",
  "this", "to", "use", "with"
]);

function words(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, " ")
    .split(/\s+/)
    .filter(word => word.length > 1 && !STOP_WORDS.has(word));
}

function entryText(entry) {
  return [
    entry.type,
    entry.name,
    ...(entry.tags || []),
    ...(entry.rules || []),
    ...(entry.tips || []),
    entry.html,
    entry.css,
    entry.description
  ].filter(Boolean).join(" ");
}

function scoreEntry(entry, queryWords) {
  const textWords = new Set(words(entryText(entry)));
  const tags = new Set((entry.tags || []).flatMap(words));
  const nameWords = new Set(words(entry.name));

  let score = 0;

  for (const word of queryWords) {
    if (tags.has(word)) score += 5;
    if (nameWords.has(word)) score += 4;
    if (textWords.has(word)) score += 1;
  }

  return score;
}

function loadSkill(filePath = path.join(process.cwd(), "skill.info")) {
  const raw = fs.readFileSync(filePath, "utf8");
  const skill = JSON.parse(raw);

  if (!skill.skill_info_version) {
    throw new Error("Invalid skill.info: missing skill_info_version");
  }

  return skill;
}

function retrieve(skill, query, options = {}) {
  const limit = options.limit ?? 8;
  const queryWords = words(query);

  const ranked = (skill.entries || [])
    .map((entry, index) => ({ entry, index, score: scoreEntry(entry, queryWords) }))
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map(result => result.entry);

  return {
    format: "skill.info/context-packet",
    version: skill.skill_info_version,
    skill: {
      name: skill.name,
      description: skill.description
    },
    instructions: skill.instructions || [],
    query,
    entries: ranked,
    assets: skill.assets || {}
  };
}

function buildAIContext(packet) {
  return [
    `SKILL: ${packet.skill.name || "Unnamed skill"}`,
    packet.skill.description || "",
    "",
    "INSTRUCTIONS:",
    ...packet.instructions.map(rule => `- ${rule}`),
    "",
    "RELEVANT KNOWLEDGE:",
    JSON.stringify(packet.entries, null, 2)
  ].join("\n");
}

if (require.main === module) {
  const query = process.argv.slice(2).join(" ").trim();

  if (!query) {
    console.error('Usage: node loader.js "your task"');
    process.exit(1);
  }

  try {
    const skill = loadSkill();
    const packet = retrieve(skill, query);

    console.log(JSON.stringify({
      ...packet,
      ai_context: buildAIContext(packet)
    }, null, 2));
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = { loadSkill, retrieve, buildAIContext };
