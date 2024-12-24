import { body, validationResult } from "express-validator";

export const handleInputErrors = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.status(400);
    res.json({ errors: result.array() });
  } else {
    next();
  }
};
