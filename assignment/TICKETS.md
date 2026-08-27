# The assignment

Four tickets. Each is **one file**, and that file contains its own
complete specification in a header comment.

| # | File | Points |
| --- | --- | --- |
| 1 | `src/tickets/useAutosave.ts` | 10 |
| 2 | `src/tickets/scoreResume.ts` | 10 |
| 3 | `src/tickets/SectionEditor.tsx` | 10 |
| 4 | `src/tickets/useFilteredTemplates.ts` | 10 |

## Use AI. Seriously.

You are expected to. Paste the whole ticket file into ChatGPT — it is
written to be self-contained precisely so that works.

But know what you are being marked on. A model will get the obvious
part of every one of these right, and it reliably misses the same four
things:

- **Ticket 1** — cleanup on unmount, aborting the in-flight request,
  and the stale closure over the latest value
- **Ticket 2** — empty input, division by zero, and the sort
- **Ticket 3** — using the array index as a `key`, which corrupts state
  the moment you reorder
- **Ticket 4** — memoisation, so the same inputs return the same array
  reference

Those are where most of the marks are. If you paste and submit without
reading, you will lose them and you will not know why.

## How it is graded

Push. A GitHub Action runs the tests and writes `SCORECARD.md` back to
your repo with a per-ticket score and the first failing check. Push
again as many times as you like — only the last run counts.

## Also submit

**200 words: what would you do differently with more time?**

Put it in `REFLECTION.md`. It is read by a human and it counts. Naming
your own weakest ticket is worth more than pretending there isn't one.

## Deadline

One week from day 2 of the workshop.
