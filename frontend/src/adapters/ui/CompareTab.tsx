import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

export default function CompareTab() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/routes/comparison")
      .then(r => r.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h2 className="font-bold mt-6">Comparison</h2>

      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="routeId" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="percentDiff" fill="#2563eb" />
      </BarChart>

      <ul className="mt-2">
        {data.map(d => (
          <li key={d.routeId}>
            {d.routeId} → {d.compliant ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}
