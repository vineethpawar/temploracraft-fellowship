import { useEffect, useState } from "react";

/**
 * TODO
 * Right now an empty list looks identical to a slow network and to a
 * server error. Make all three distinguishable.
 *
 * Toggle FAIL and EMPTY below to test each path.
 * You should end up with four renders: loading, error, empty, and data.
 */
const FAIL = false;
const EMPTY = false;

function load(): Promise<string[]> {
  return new Promise((res, rej) =>
    setTimeout(() => (FAIL ? rej(new Error("Server said no")) : res(EMPTY ? [] : ["Meridian", "Zurich"])), 1200),
  );
}

export default function App() {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    load().then(setItems);
  }, []);

  return (
    <main className="wrap">
      <h1>Templates</h1>
      <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
    </main>
  );
}
