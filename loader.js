#!/usr/bin/env node

/**
 * HTML Skill loader
 * Reads index.html, finds data-skill-entry blocks, ranks them for a query,
 * and returns only useful text, rules, images, code, and chart JSON to an AI.
 * No browser or npm package is required.
 *
 * Usage: node loader.js "dashboard chart primary button"
 */

const fs = require("node:fs");
const path = require("node:path");

const STOP = new Set(["a","an","and","are","as","at","be","for","from","in","is","it","of","on","or","the","to","use","with"]);
const words = value => String(value || "").toLowerCase().replace(/<[^>]*>/g," ").replace(/[^a-z0-9_-]+/g," ").split(/\s+/).filter(w => w.length > 1 && !STOP.has(w));
const decode = s => String(s || "").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&");
const strip = s => decode(String(s || "").replace(/<script[\s\S]*?<\/script>/gi," ").replace(/<style[\s\S]*?<\/style>/gi," ").replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim());
const attr = (tag,name) => (tag.match(new RegExp(`${name}=["']([^"']*)["']`,"i")) || [])[1] || "";

function loadSkill(filePath = path.join(process.cwd(), "index.html")) {
  const html = fs.readFileSync(filePath,"utf8");
  const root = html.match(/<html\b[^>]*>/i)?.[0] || "";
  const entries = [];
  const re = /<(section|article)\b([^>]*\bdata-skill-entry\b[^>]*)>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = re.exec(html))) {
    const open = `<${m[1]}${m[2]}>`, body = m[3];
    const title = strip(body.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/i)?.[1] || "");
    const images = [...body.matchAll(/<img\b[^>]*>/gi)].map(x => ({src:attr(x[0],"src"),alt:attr(x[0],"alt")}));
    const rules = [...body.matchAll(/<[^>]*\bdata-rule\b[^>]*>([\s\S]*?)<\/[^>]+>/gi)].map(x => strip(x[1]));
    const code = [...body.matchAll(/<pre\b[^>]*\bdata-code\b[^>]*>([\s\S]*?)<\/pre>/gi)].map(x => decode(x[1].trim()));
    const charts = [...body.matchAll(/<script\b[^>]*\bdata-chart-data\b[^>]*>([\s\S]*?)<\/script>/gi)].map(x => { try{return JSON.parse(x[1])}catch{return null} }).filter(Boolean);
    entries.push({type:attr(open,"data-type") || "knowledge",tags:attr(open,"data-tags").split(/\s+/).filter(Boolean),title,text:strip(body),rules,code,images,charts});
  }
  return {name:attr(root,"data-skill") || strip(html.match(/<title[^>]*>(.*?)<\/title>/i)?.[1]),version:attr(root,"data-skill-version") || "0",entries};
}

function retrieve(skill, query, limit = 8) {
  const q = words(query);
  const ranked = skill.entries.map((entry,index) => {
    const tags = new Set(entry.tags.flatMap(words));
    const title = new Set(words(entry.title));
    const all = new Set(words(`${entry.text} ${entry.rules.join(" ")}`));
    let score = 0;
    for (const w of q) { if(tags.has(w)) score += 5; if(title.has(w)) score += 4; if(all.has(w)) score += 1; }
    return {entry,index,score};
  }).filter(x => x.score > 0).sort((a,b) => b.score-a.score || a.index-b.index).slice(0,limit).map(x => x.entry);
  return {format:"html-skill/context-packet",version:skill.version,skill:skill.name,query,entries:ranked};
}

function buildAIContext(packet) {
  return `SKILL: ${packet.skill}\nTASK: ${packet.query}\n\nRELEVANT KNOWLEDGE:\n${JSON.stringify(packet.entries,null,2)}`;
}

if (require.main === module) {
  const query = process.argv.slice(2).join(" ").trim();
  if (!query) { console.error('Usage: node loader.js "your task"'); process.exit(1); }
  try { const packet = retrieve(loadSkill(),query); console.log(JSON.stringify({...packet,ai_context:buildAIContext(packet)},null,2)); }
  catch (e) { console.error(e.message); process.exit(1); }
}

module.exports = {loadSkill,retrieve,buildAIContext};
