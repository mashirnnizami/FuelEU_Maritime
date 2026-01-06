import { Router } from "express";
import { createPool } from "../../../core/application/CreatePool";

export const poolingController = Router();

poolingController.post("/", (req, res) => {
  res.json(createPool(req.body.members));
});
