import { useEffect, useState } from "react";
import RoutesTab from "./adapters/ui/RoutesTab";
import CompareTab from "./adapters/ui/CompareTab";

export default function App() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/routes")
      .then(r => r.json())
      .then(setRoutes);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">FuelEU Dashboard</h1>
      <RoutesTab routes={routes} />
      <CompareTab />
    </div>
  );
}
