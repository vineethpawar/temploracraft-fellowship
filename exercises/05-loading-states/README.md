# Exercise 05 · Loading is three states

**This only knows 'has data' and 'has no data'. A user cannot tell loading from empty from broken. Add the missing states.**

Teaches: Loading, empty, and error are three different screens.

Open `src/App.tsx`. The instructions are in the comment at the top.

You have about 8 minutes. Use AI if you want — but read what it gives
you, because the next exercise builds on understanding this one.

<details>
<summary><b>Stuck? The answer</b></summary>

```tsx
type State =
  | { tag: "loading" }
  | { tag: "error"; message: string }
  | { tag: "ready"; items: string[] };

const [state, setState] = useState<State>({ tag: "loading" });

useEffect(() => {
  let ignore = false;
  load()
    .then((items) => !ignore && setState({ tag: "ready", items }))
    .catch((e) => !ignore && setState({ tag: "error", message: e.message }));
  return () => { ignore = true; };
}, []);

if (state.tag === "loading") return <Skeleton />;
if (state.tag === "error") return <ErrorBox message={state.message} />;
if (state.items.length === 0) return <EmptyState />;
return <List items={state.items} />;

// One union beats three booleans: isLoading + isError + data cannot
// represent "loading" and "error" being true at once, but three
// booleans happily can, and one day they will be.
```

</details>
