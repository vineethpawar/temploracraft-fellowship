import { useEffect, useState } from "react";
import { RESUMES } from "./data";

/**
 * TODO
 * `filtered` is redundant — it can be computed from `query` and RESUMES.
 * Delete the useState AND the useEffect. The UI must still work.
 *
 * Ask yourself: what is the minimum this component actually remembers?
 */
export default function App() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(RESUMES);

  useEffect(() => {
    setFiltered(RESUMES.filter((r) => r.name.toLowerCase().includes(query.toLowerCase())));
  }, [query]);

  return (
    <main className="wrap">
      <h1>Resumes</h1>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search…" />
      <div className="grid">
        {filtered.map((r) => (
          <article className="card" key={r.id}><b>{r.name}</b><span>{r.role}</span></article>
        ))}
      </div>
    </main>
  );
}
