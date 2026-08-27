/**
 * ════════════════════════════════════════════════════════════════
 * TICKET 4 · useFilteredTemplates
 * ════════════════════════════════════════════════════════════════
 *
 * BUILD
 *   A hook that filters a template list by a search string and a tag,
 *   without doing the work again when nothing relevant changed.
 *
 * SIGNATURE
 *   useFilteredTemplates(all: Template[], query: string, tag: string | null)
 *     → Template[]
 *
 * ACCEPTANCE CRITERIA
 *   1. Matches on name OR author, case-insensitively.
 *   2. Trims the query. "  zurich  " matches "Zurich".
 *   3. An empty query returns everything (subject to the tag filter).
 *   4. `tag` narrows to templates whose tags include it. null = no
 *      tag filter.
 *   5. Returns the SAME array reference when called again with
 *      unchanged inputs. The test re-renders with identical props and
 *      asserts the reference did not change.
 *   6. Filtering does not mutate `all`.
 *
 * ── A WARNING ───────────────────────────────────────────────────
 * Criterion 5 is the whole ticket. A plain `.filter()` in the body
 * returns a brand-new array every render, which makes every memoised
 * child below it re-render. The test catches it. Everything else here
 * is easy.
 * ════════════════════════════════════════════════════════════════
 */
import type { Template } from "../lib/types";

export function useFilteredTemplates(
  all: Template[],
  query: string,
  tag: string | null,
): Template[] {
  // TODO: implement. Delete the line below.
  void query; void tag;
  return all;
}
