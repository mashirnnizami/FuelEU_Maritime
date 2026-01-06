import express from "express";
import { routesController } from "../adapters/inbound/http/routes.controller";
import { complianceController } from "../adapters/inbound/http/compliance.controller";
import { bankingController } from "../adapters/inbound/http/banking.controller";
import { poolingController } from "../adapters/inbound/http/pooling.controller";

export function startServer() {
  const app = express();
  app.use(express.json());

  app.use("/routes", routesController);
  app.use("/compliance", complianceController);
  app.use("/banking", bankingController);
  app.use("/pools", poolingController);

  app.listen(3000, () => console.log("Backend running on 3000"));
}
