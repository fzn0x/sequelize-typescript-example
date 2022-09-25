import express, { NextFunction } from "express";
import { validationResult } from "express-validator";

export const handleValidationError = (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.json(error);
  }

  next();
};
