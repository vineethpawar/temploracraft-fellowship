import { useEffect, useState } from "react";

/**
 * TODO
 * Open the console. Count the fetches. Then stop them.
 *
 * The rule you need: React compares dependencies with Object.is.
 * A new object or function every render is a NEW dependency every render.
 *
 * Do NOT fix this by deleting the dependency array. That hides the bug.
 */
export default function App() {
  const [data, setData] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  // A brand-new object on every single render.
  const options = { limit: 5 };

  useEffect(() => {
    setCount((c) => c + 1);
    console.log("fetching…", options.limit);
    setData(["Ananya", "Rohan", "Meera"].slice(0, options.limit));
  }, [options]);

  return (
    <main className="wrap">
      <h1>Runaway effect</h1>
      <p className="hint">Effect has run <b>{count}</b> times. It should be 1.</p>
      <ul>{data.map((d) => <li key={d}>{d}</li>)}</ul>
    </main>
  );
}
