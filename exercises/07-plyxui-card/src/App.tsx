/**
 * TODO
 * Rebuild this card using @plyxui/primitives instead of inline styles.
 * The npm install is already done — just import and use.
 *
 * Aim: fewer lines, no hard-coded colours, and it should respond to the
 * theme. Every hex code you delete is a win.
 */
export default function App() {
  return (
    <main className="wrap">
      <h1>Rebuild me</h1>
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e4dbcf",
          borderRadius: 14,
          padding: 20,
          maxWidth: 320,
          boxShadow: "0 10px 30px rgba(26,21,18,0.08)",
        }}
      >
        <div style={{ fontSize: 17, fontWeight: 800, color: "#1a1512" }}>Ananya Rao</div>
        <div style={{ fontSize: 13, color: "#6e655d", marginTop: 4 }}>Product Manager · Fintech</div>
        <div style={{ height: 1, background: "#e4dbcf", margin: "14px 0" }} />
        <div style={{ fontSize: 13, color: "#6e655d" }}>Score 88 · Meridian template</div>
        <button
          style={{
            marginTop: 16, padding: "10px 18px", borderRadius: 10, border: 0,
            background: "#5b54f0", color: "#fff", fontWeight: 700, cursor: "pointer",
          }}
        >
          Open
        </button>
      </div>
    </main>
  );
}
