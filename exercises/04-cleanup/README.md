# Exercise 04 · Cancel the stale response

**Type fast. The results flicker and sometimes show the wrong query's answer. Fix the race.**

Teaches: Every effect that starts something must be able to stop it.

Open `src/App.tsx`. The instructions are in the comment at the top.

You have about 8 minutes. Use AI if you want — but read what it gives
you, because the next exercise builds on understanding this one.

<details>
<summary><b>Stuck? The answer</b></summary>

```tsx
useEffect(() => {
  let ignore = false;
  search(query).then((r) => {
    if (!ignore) setResults(r);   // a superseded run can no longer write
  });
  return () => { ignore = true; };
}, [query]);
```

</details>
