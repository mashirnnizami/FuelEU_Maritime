import { Route } from "../domain/Route";

export interface RoutePort {
  getRoutes(): Promise<Route[]>;
  setBaseline(routeId: string): Promise<void>;
  getComparison(): Promise<any[]>;
}
