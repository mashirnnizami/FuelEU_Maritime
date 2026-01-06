import { useState } from "react";

export default function BankingTab() {
  const [cb, setCb] = useState<number | null>(null);
  const [banked, setBanked] = useState<number | null>(null);

  async function fetchCB() {
    const res = await fetch("http://localhost:3000/compliance/cb?routeId=R002");
    const data = await res.json();
    setCb(data.cb);
  }

  async function bank() {
    const res = await fetch("http://localhost:3000/banking/bank", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cb })
    });
    const data = await res.json();
    setBanked(data.banked);
  }

  return (
    <div className="mt-6">
      <h2 className="font-bold">Banking</h2>
      <button onClick={fetchCB} className="border px-2">Get CB</button>

      {cb !== null && (
        <div>
          <p>CB Before: {cb.toFixed(0)}</p>
          <button
            onClick={bank}
            disabled={cb <= 0}
            className="border px-2 mt-2"
          >
            Bank Surplus
          </button>
        </div>
      )}

      {banked && <p>Banked: {banked.toFixed(0)}</p>}
    </div>
  );
}
