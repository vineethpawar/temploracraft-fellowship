# Exercise 01 · Render the list

**Nothing renders. The data is right there. Make each resume appear as a card.**

Teaches: Components, props, and rendering an array.

Open `src/App.tsx`. The instructions are in the comment at the top.

You have about 8 minutes. Use AI if you want — but read what it gives
you, because the next exercise builds on understanding this one.

<details>
<summary><b>Stuck? The answer</b></summary>

```tsx
export default function App() {
  return (
    <main className="wrap">
      <h1>Resumes</h1>
      <div className="grid">
        {RESUMES.map((r) => (
          <Card key={r.id} name={r.name} role={r.role} score={r.score} />
        ))}
      </div>
    </main>
  );
}

function Card({ name, role, score }: { name: string; role: string; score: number }) {
  return (
    <article className="card">
      <b>{name}</b>
      <span>{role}</span>
      <em>{score}</em>
    </article>
  );
}
```

</details>
