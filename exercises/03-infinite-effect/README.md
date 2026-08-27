# Exercise 03 · Stop the loop

**Open the console. The effect never stops firing. Find out why — this exact bug shipped to production and cost real money in API calls.**

Teaches: Effect dependencies are compared by reference, not by value.

Open `src/App.tsx`. The instructions are in the comment at the top.

You have about 8 minutes. Use AI if you want — but read what it gives
you, because the next exercise builds on understanding this one.

<details>
<summary><b>Stuck? The answer</b></summary>

```tsx
// Option A — the dependency is the value, not the object:
useEffect(() => { /* … */ }, [options.limit]);

// Option B — the object never needs to be recreated, so hoist it:
const OPTIONS = { limit: 5 };           // outside the component

// Option C — it genuinely depends on props, so memoise it:
const options = useMemo(() => ({ limit }), [limit]);
```

</details>
