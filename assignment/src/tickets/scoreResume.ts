/**
 * ════════════════════════════════════════════════════════════════
 * TICKET 2 · scoreResume
 * ════════════════════════════════════════════════════════════════
 *
 * BUILD
 *   A pure function scoring a resume 0–100 and listing what to fix.
 *   No React, no async, no side effects. Same input → same output.
 *
 * SIGNATURE
 *   scoreResume(doc: ResumeDoc): { score: number; findings: Finding[] }
 *
 * THE RULES (each worth the stated points, all start earned and are
 * deducted when the rule is broken)
 *
 *   impact       25  Every experience bullet should contain a digit.
 *                    Deduct proportionally: if 6 of 10 bullets have no
 *                    number, deduct 60% of 25.
 *   brevity      20  Summary must be ≤ 40 words. Deduct 2 points per
 *                    word over, floored at 0 for this rule.
 *   completeness 25  5 points each for: name, email, ≥1 experience,
 *                    ≥1 education, ≥3 skills.
 *   language     15  Deduct 5 per bullet opening with a weak verb
 *                    (see WEAK_OPENERS), floored at 0 for this rule.
 *   contact      15  10 for a valid-looking email, 5 for a phone with
 *                    ≥ 10 digits.
 *
 * ACCEPTANCE CRITERIA
 *   1. Score is an integer, clamped to 0–100.
 *   2. An empty document scores 0 and does not throw.
 *   3. A document with zero experience bullets must NOT divide by zero.
 *   4. Every deduction produces a Finding naming the section.
 *   5. A perfect document scores 100 with an empty findings array.
 *   6. Findings are sorted by points lost, largest first.
 *
 * ── A WARNING ───────────────────────────────────────────────────
 * An AI will write the happy path fine. The marks are in criteria 2, 3
 * and 6 — empty input, no division by zero, and the sort.
 * ════════════════════════════════════════════════════════════════
 */
import type { ResumeDoc, Finding } from "../lib/types";

export const WEAK_OPENERS = [
  "responsible for", "worked on", "helped", "assisted", "involved in", "participated",
];

export function scoreResume(doc: ResumeDoc): { score: number; findings: Finding[] } {
  // TODO: implement. Delete the line below.
  void doc;
  return { score: 0, findings: [] };
}
