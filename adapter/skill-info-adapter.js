#!/usr/bin/env node
/**
 * skill.info native adapter
 *
 * Converts one skill.info file into the small native discovery files used by
 * popular coding agents. skill.info stays the source of truth.
 *
 * Usage:
 *   node adapter/skill-info-adapter.js [project-dir] [agent]
 *
 * agent: auto | codex | claude | cursor | copilot | gemini | opencode | generic
 */

const fs = require('fs');
const path = require('path');

const root = path.resolve(process.argv[2] || process.cwd());
const requested = (process.argv[3] || 'auto').toLowerCase();
const source = path.join(root, 'skill.info');

if (!fs.existsSync(source)) {
  console.error('skill.info not found in ' + root);
  process.exit(1);
}

const html = fs.readFileSync(source, 'utf8');
const text = html.replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const title = ((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || 'skill.info')
  .replace(/<[^>]+>/g, '').trim();
const description = ((html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)/i) || [])[1]
  || text.slice(0, 180)
  || 'Repository knowledge stored in skill.info').trim();

const instructions = `Use the repository's \`skill.info\` file as task-scoped knowledge.\n\nWhen the current task matches it:\n1. Read \`skill.info\` as HTML.\n2. Search \`data-skill-entry\`, \`data-tags\`, headings, and \`data-rule\` for relevant knowledge.\n3. Open linked images/files only when relevant. Relative asset paths are resolved from \`skill.info\`.\n4. Use only matching entries; do not dump the entire file into context unless it is small.\n5. Treat the user's current request and higher-priority agent instructions as higher priority than \`skill.info\`.\n`;

const skillMd = `---\nname: skill-info\ndescription: ${description.replace(/\n/g, ' ')}\n---\n\n# ${title}\n\n${instructions}`;

const targets = {
  codex: [['.agents/skills/skill-info/SKILL.md', skillMd]],
  claude: [['.claude/skills/skill-info/SKILL.md', skillMd], ['CLAUDE.md', `# skill.info adapter\n\n${instructions}`]],
  cursor: [['.cursor/skills/skill-info/SKILL.md', skillMd], ['.cursor/rules/skill-info.mdc', `---\ndescription: Load skill.info knowledge when relevant\nalwaysApply: false\n---\n\n${instructions}`]],
  copilot: [['.github/copilot-instructions.md', `# skill.info adapter\n\n${instructions}`]],
  gemini: [['GEMINI.md', `# skill.info adapter\n\n${instructions}`]],
  opencode: [['.agents/skills/skill-info/SKILL.md', skillMd], ['AGENTS.md', `# skill.info adapter\n\n${instructions}`]],
  generic: [['AGENTS.md', `# skill.info adapter\n\n${instructions}`]]
};

function detect() {
  if (fs.existsSync(path.join(root, '.claude'))) return 'claude';
  if (fs.existsSync(path.join(root, '.cursor'))) return 'cursor';
  if (fs.existsSync(path.join(root, '.github'))) return 'copilot';
  if (fs.existsSync(path.join(root, 'GEMINI.md')) || fs.existsSync(path.join(root, '.gemini'))) return 'gemini';
  if (fs.existsSync(path.join(root, 'opencode.json')) || fs.existsSync(path.join(root, '.opencode'))) return 'opencode';
  if (fs.existsSync(path.join(root, '.agents')) || fs.existsSync(path.join(root, '.codex'))) return 'codex';
  return 'generic';
}

const agent = requested === 'auto' ? detect() : requested;
if (!targets[agent]) {
  console.error('Unknown agent: ' + agent);
  process.exit(1);
}

function write(rel, body) {
  const file = path.join(root, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });

  // Do not destroy a user's existing instruction file. Add a marked adapter once.
  if (fs.existsSync(file) && !rel.endsWith('SKILL.md') && !rel.endsWith('.mdc')) {
    const current = fs.readFileSync(file, 'utf8');
    if (current.includes('# skill.info adapter')) return;
    fs.writeFileSync(file, current.trimEnd() + '\n\n' + body, 'utf8');
  } else {
    fs.writeFileSync(file, body, 'utf8');
  }
  console.log('created ' + rel);
}

for (const [rel, body] of targets[agent]) write(rel, body);
console.log(`skill.info adapter installed for ${agent}`);
