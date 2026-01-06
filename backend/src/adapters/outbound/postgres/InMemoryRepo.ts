import { Route } from "../../../core/domain/Route";
import { computeCB } from "../../../core/domain/Compliance";

export const routes: Route[] = [
  {
    routeId: "R001",
    vesselType: "Container",
    fuelType: "HFO",
    year: 2024,
    ghgIntensity: 91,
    fuelConsumption: 5000,
    distance: 12000,
    totalEmissions: 4500,
    isBaseline: true
  },
  {
    routeId: "R002",
    vesselType: "BulkCarrier",
    fuelType: "LNG",
    year: 2024,
    ghgIntensity: 88,
    fuelConsumption: 4800,
    distance: 11500,
    totalEmissions: 4200,
    isBaseline: false
  }
];

export function getAllRoutes() {
  return routes;
}

export function setBaseline(routeId: string) {
  routes.forEach(r => r.isBaseline = r.routeId === routeId);
}

export function getBaseline() {
  return routes.find(r => r.isBaseline)!;
}

export function computeRouteCB(routeId: string) {
  const r = routes.find(r => r.routeId === routeId)!;
  return computeCB(r.ghgIntensity, r.fuelConsumption);
}
