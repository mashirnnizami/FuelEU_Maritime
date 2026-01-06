import { Router } from "express";
import { computeRouteCB } from "../../outbound/postgres/InMemoryRepo";

export const complianceController = Router();

complianceController.get("/cb", (req, res) => {
  const { routeId } = req.query as any;
  const cb = computeRouteCB(routeId);
  res.json({ cb });
});
