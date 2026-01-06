import { useState } from "react";

export default function PoolingTab() {
  const [result, setResult] = useState<any[]>([]);

  async function createPool() {
    const res = await fetch("http://localhost:3000/pools", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        members: [
          { shipId: "A", cbBefore: 5000, cbAfter: 5000 },
          { shipId: "B", cbBefore: -3000, cbAfter: -3000 }
        ]
      })
    });
    setResult(await res.json());
  }

  return (
    <div className="mt-6">
      <h2 className="font-bold">Pooling</h2>
      <button onClick={createPool} className="border px-2">
        Create Pool
      </button>

      <ul>
        {result.map(m => (
          <li key={m.shipId}>
            {m.shipId}: {m.cbBefore} → {m.cbAfter}
          </li>
        ))}
      </ul>
    </div>
  );
}
