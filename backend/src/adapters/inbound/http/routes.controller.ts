import { Router } from "express";
import { getAllRoutes, setBaseline, getBaseline } from "../../outbound/postgres/InMemoryRepo";
import { compareRoutes } from "../../../core/application/CompareRoutes";

export const routesController = Router();

routesController.get("/", (_, res) => res.json(getAllRoutes()));

routesController.post("/:id/baseline", (req, res) => {
  setBaseline(req.params.id);
  res.sendStatus(200);
});

routesController.get("/comparison", (_, res) => {
  const baseline = getBaseline();
  const comparisons = getAllRoutes().map(r => ({
    routeId: r.routeId,
    ...compareRoutes(baseline.ghgIntensity, r.ghgIntensity)
  }));
  res.json(comparisons);
});
