/**
 * ════════════════════════════════════════════════════════════════
 * TICKET 1 · useAutosave
 * ════════════════════════════════════════════════════════════════
 *
 * Everything you need is in this file. Paste the whole file into an AI
 * if you want — it has the full spec.
 *
 * BUILD
 *   A hook that saves a value, but not on every keystroke.
 *
 * SIGNATURE
 *   useAutosave<T>(value: T, save: (v: T, signal: AbortSignal) => Promise<void>, delayMs?: number)
 *     → { status: "idle" | "saving" | "saved" | "error" }
 *
 * ACCEPTANCE CRITERIA
 *   1. Changing `value` schedules a save `delayMs` later (default 800).
 *   2. Changing it again before the delay REPLACES the pending save.
 *      Ten keystrokes in one second cause exactly one save.
 *   3. If a save is still in flight when a new one starts, the old one
 *      is ABORTED via its AbortSignal.
 *   4. Unmounting cancels the pending timer AND aborts any in-flight
 *      save. Nothing may run after unmount.
 *   5. The save always receives the LATEST value, never a stale one
 *      captured when the timer was set.
 *   6. `status` reflects reality: "saving" while in flight, "saved" on
 *      success, "error" if the promise rejects. An aborted save is not
 *      an error.
 *   7. The very first render must NOT trigger a save.
 *
 * ── A WARNING, READ IT ──────────────────────────────────────────
 * An AI will get the debounce right on the first try. It usually
 * misses 3, 4 and 5. Those are worth 6 of the 10 marks. Read what you
 * are given before you submit it.
 * ════════════════════════════════════════════════════════════════
 */
import { useEffect, useRef, useState } from "react";

export type SaveStatus = "idle" | "saving" | "saved" | "error";

export function useAutosave<T>(
  value: T,
  save: (value: T, signal: AbortSignal) => Promise<void>,
  delayMs = 800,
): { status: SaveStatus } {
  // TODO: implement. Delete the line below.
  const [status] = useState<SaveStatus>("idle");
  void value; void save; void delayMs; void useEffect; void useRef;
  return { status };
}
