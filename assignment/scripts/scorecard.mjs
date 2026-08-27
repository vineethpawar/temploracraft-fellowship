import { readFileSync, writeFileSync, existsSync } from "node:fs";

/**
 * Turns raw test output into per-ticket feedback.
 *
 * The whole point is the `hint` column. A student who sees 6/10 emails
 * you; a student who sees "reorder corrupts state — check your key"
 * fixes it tonight, which is the only way this scales past one cohort.
 */

const TICKETS = [
  { id: 1, name: "useAutosave", file: "useAutosave", max: 10 },
  { id: 2, name: "scoreResume", file: "scoreResume", max: 10 },
  { id: 3, name: "SectionEditor", file: "SectionEditor", max: 10 },
  { id: 4, name: "useFilteredTemplates", file: "useFilteredTemplates", max: 10 },
];

function read(p) {
  try { return existsSync(p) ? JSON.parse(readFileSync(p, "utf8")) : null; }
  catch { return null; }
}

const unit = read(".results/unit.json");
const e2e = read(".results/e2e.json");

/** Flatten either reporter's shape into { title, ok }. */
function cases(json) {
  if (!json) return [];
  const out = [];
  const walk = (n) => {
    if (!n) return;
    if (Array.isArray(n)) return n.forEach(walk);
    if (n.tests) n.tests.forEach((t) => out.push({ title: t.title ?? t.fullTitle ?? "", ok: (t.status ?? t.results?.[0]?.status) === "passed" || t.status === "expected" }));
    if (n.assertionResults) n.assertionResults.forEach((t) => out.push({ title: t.fullName ?? t.title, ok: t.status === "passed" }));
    ["suites", "specs", "testResults"].forEach((k) => n[k] && walk(n[k]));
  };
  walk(json);
  return out;
}

const all = [...cases(unit), ...cases(e2e)];

const rows = TICKETS.map((t) => {
  const mine = all.filter((c) => (c.title || "").toLowerCase().includes(t.file.toLowerCase()));
  if (mine.length === 0) return { ...t, score: 0, hint: "no tests ran — does it compile?" };
  const passed = mine.filter((c) => c.ok).length;
  const score = Math.round((passed / mine.length) * t.max);
  const firstFail = mine.find((c) => !c.ok);
  return { ...t, score, hint: firstFail ? firstFail.title.replace(/^.*?›\s*/, "") : "" };
});

const total = rows.reduce((s, r) => s + r.score, 0);
const max = TICKETS.reduce((s, t) => s + t.max, 0);

const lines = [
  "# Scorecard",
  "",
  `**${total} / ${max}**`,
  "",
  "| Ticket | Score | What failed |",
  "| --- | --- | --- |",
  ...rows.map((r) => `| ${r.id} · ${r.name} | ${r.score}/${r.max} | ${r.hint || "—"} |`),
  "",
  "Regenerated on every push. Fix, push, watch it change.",
  "",
  "Screenshots from the behaviour tests are in the run's artifacts.",
];

writeFileSync("SCORECARD.md", lines.join("\n") + "\n");
console.log(lines.join("\n"));
