import { Router } from "express";
import { bankSurplus } from "../../../core/application/BankSurplus";

export const bankingController = Router();

bankingController.post("/bank", (req, res) => {
  const { cb } = req.body;
  res.json({ banked: bankSurplus(cb) });
});
