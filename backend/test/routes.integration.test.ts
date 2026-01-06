import request from "supertest";
import express from "express";
import { routesController } from "../src/adapters/inbound/http/routes.controller";

const app = express();
app.use("/routes", routesController);

describe("Routes API", () => {
  it("returns routes", async () => {
    const res = await request(app).get("/routes");
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
