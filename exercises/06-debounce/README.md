# Exercise 06 · Stop calling on every keystroke

**Every keystroke fires a request. Typing 'frontend' costs eight calls. Make it cost one.**

Teaches: Debounce, and clean up the timer you set.

Open `src/App.tsx`. The instructions are in the comment at the top.

You have about 8 minutes. Use AI if you want — but read what it gives
you, because the next exercise builds on understanding this one.

<details>
<summary><b>Stuck? The answer</b></summary>

```tsx
useEffect(() => {
  if (!query) return;
  const t = setTimeout(() => {
    calls += 1;
    setCount(calls);
    console.log("API call for", query);
  }, 400);
  return () => clearTimeout(t);   // the line the whole exercise is about
}, [query]);
```

</details>
