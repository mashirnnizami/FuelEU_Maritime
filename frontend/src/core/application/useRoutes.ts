import { useEffect, useState } from "react";
import { routeApi } from "../../adapters/infrastructure/api";
import { Route } from "../domain/Route";

export function useRoutes() {
  const [routes, setRoutes] = useState<Route[]>([]);

  async function load() {
    setRoutes(await routeApi.getRoutes());
  }

  async function setBaseline(routeId: string) {
    await routeApi.setBaseline(routeId);
    await load();
  }

  useEffect(() => {
    load();
  }, []);

  return { routes, setBaseline };
}
