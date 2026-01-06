import express from "express";
import { routesController } from "../adapters/inbound/http/routes.controller.js";
import { complianceController } from "../adapters/inbound/http/compliance.controller.js";
import { bankingController } from "../adapters/inbound/http/banking.controller.js";
import { poolingController } from "../adapters/inbound/http/pooling.controller.js";

export function startServer() {
  const app = express();
  app.use(express.json());

  app.use("/routes", routesController);
  app.use("/compliance", complianceController);
  app.use("/banking", bankingController);
  app.use("/pools", poolingController);

  app.listen(3000, () => console.log("Backend running on http://localhost:3000"));
}
