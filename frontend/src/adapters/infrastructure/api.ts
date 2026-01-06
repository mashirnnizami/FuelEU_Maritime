import { RoutePort } from "../../core/ports/RoutePort";
import { Route } from "../../core/domain/Route";

const API = "http://localhost:3000";

export const routeApi: RoutePort = {
  async getRoutes(): Promise<Route[]> {
    const res = await fetch(`${API}/routes`);
    return res.json();
  },

  async setBaseline(routeId: string) {
    await fetch(`${API}/routes/${routeId}/baseline`, { method: "POST" });
  },

  async getComparison() {
    const res = await fetch(`${API}/routes/comparison`);
    return res.json();
  }
};
