/**
 * ════════════════════════════════════════════════════════════════
 * TICKET 3 · SectionEditor
 * ════════════════════════════════════════════════════════════════
 *
 * BUILD
 *   An editable list of resume bullets: add, remove, reorder.
 *
 * PROPS
 *   items: { id: string; text: string }[]
 *   onChange: (items: { id: string; text: string }[]) => void
 *
 * ACCEPTANCE CRITERIA
 *   1. Renders one <li> per item with an editable text input.
 *   2. "Add bullet" appends a new empty item with a UNIQUE id.
 *   3. Each row has a Remove button that removes that row only.
 *   4. Each row has Up and Down buttons that move it one position.
 *      Up on the first row and Down on the last are disabled.
 *   5. Reordering must NOT lose or swap the text in the inputs.
 *   6. Every control is reachable and operable by keyboard alone, and
 *      every icon-only button has an accessible name.
 *   7. Editing an input calls onChange with only that item changed.
 *
 * ── A WARNING ───────────────────────────────────────────────────
 * An AI will reach for the array index as the React `key`. That looks
 * fine until you reorder, at which point React reuses the wrong DOM
 * node and the text follows the position instead of the item. Criterion
 * 5 tests exactly this and it is the most commonly failed line in the
 * whole assignment.
 * ════════════════════════════════════════════════════════════════
 */

export interface Bullet {
  id: string;
  text: string;
}

export function SectionEditor({
  items,
  onChange,
}: {
  items: Bullet[];
  onChange: (items: Bullet[]) => void;
}) {
  // TODO: implement. Delete the lines below.
  void items;
  void onChange;
  return <ul />;
}
