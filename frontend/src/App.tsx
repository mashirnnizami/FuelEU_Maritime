import { useRoutes } from "./core/application/useRoutes";
import RoutesTab from "./adapters/ui/RoutesTab";
import CompareTab from "./adapters/ui/CompareTab";
import BankingTab from "./adapters/ui/BankingTab";
import PoolingTab from "./adapters/ui/PoolingTab";

export default function App() {
  const { routes, setBaseline } = useRoutes();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">FuelEU Maritime Dashboard</h1>

      <RoutesTab routes={routes} onBaseline={setBaseline} />
      <CompareTab />
      <BankingTab />
      <PoolingTab />
    </div>
  );
}
