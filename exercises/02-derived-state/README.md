# Exercise 02 · Delete the state

**`filtered` is stored in state and kept in sync by hand. It does not need to be. Remove it without breaking the UI.**

Teaches: If you can compute it during render, it is not state.

Open `src/App.tsx`. The instructions are in the comment at the top.

You have about 8 minutes. Use AI if you want — but read what it gives
you, because the next exercise builds on understanding this one.

<details>
<summary><b>Stuck? The answer</b></summary>

```tsx
const filtered = RESUMES.filter((r) =>
  r.name.toLowerCase().includes(query.toLowerCase()),
);
// No useState, no useEffect. One source of truth: `query`.
```

</details>
