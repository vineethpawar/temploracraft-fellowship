import { useEffect, useState } from "react";

/**
 * TODO
 * Type quickly in the box. Watch the results land out of order —
 * a slow early request overwrites a fast later one.
 *
 * Add cleanup so a superseded request can never win.
 * Two ways: an `ignore` flag, or AbortController. Try the flag first.
 */
function search(q: string): Promise<string[]> {
  const delay = q.length % 2 === 0 ? 900 : 120;   // deliberately uneven
  return new Promise((res) =>
    setTimeout(() => res(q ? [`result for "${q}"`] : []), delay),
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    search(query).then(setResults);
  }, [query]);

  return (
    <main className="wrap">
      <h1>Stale responses</h1>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type fast…" />
      <ul>{results.map((r) => <li key={r}>{r}</li>)}</ul>
    </main>
  );
}
