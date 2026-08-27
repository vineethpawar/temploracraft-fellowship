import { useEffect, useState } from "react";

/**
 * TODO
 * Watch the call counter. Typing "frontend" should cost ONE call,
 * not eight, and only after you stop typing for ~400ms.
 *
 * The trap: setTimeout inside an effect without clearing it just
 * queues eight timers instead of eight calls. Clear it.
 */
let calls = 0;

export default function App() {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!query) return;
    calls += 1;
    setCount(calls);
    console.log("API call for", query);
  }, [query]);

  return (
    <main className="wrap">
      <h1>Debounce me</h1>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type 'frontend'…" />
      <p className="hint">API calls made: <b>{count}</b></p>
    </main>
  );
}
