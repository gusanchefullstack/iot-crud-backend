import express from "express";
import measuringPointController from "../controllers/measuringPointController.js";
import { handleInputErrors } from "../middleware/validatorHandler.js";
import { body, param } from "express-validator";

const measuringPointRouter = express.Router();

measuringPointRouter.get("/", measuringPointController.getAllMeasuringPoints);
measuringPointRouter.get(
  "/:id",
  param("id")
    .exists()
    .withMessage("Missing measuringPointId")
    .isMongoId()
    .withMessage("Invalid Id"),
  handleInputErrors,
  measuringPointController.getSingleMeasuringPoint
);
measuringPointRouter.post(
  "/",
  body("siteId").exists().withMessage("Missing field: siteId"),
  body("name")
    .exists()
    .withMessage("Missing field: name")
    .trim()
    .isString()
    .withMessage("Invalid name format")
    .isLength({ min: 3, max: 250 })
    .withMessage("Invalid name lenght min:3 max:250"),
  body("latlng")
    .exists()
    .withMessage("Missing field: latlng")
    .trim()
    .isLatLong()
    .withMessage("Invalid latlng format"),
  handleInputErrors,
  measuringPointController.createMeasuringPoint
);
measuringPointRouter.put(
  "/:id",
  param("id")
    .exists()
    .withMessage("Missing measuringPointId")
    .isMongoId()
    .withMessage("Invalid Id"),
  body("siteId").optional(),
  body("name")
    .optional()
    .trim()
    .isString()
    .withMessage("Invalid name format")
    .isLength({ min: 3, max: 250 })
    .withMessage("Invalid name lenght min:3 max:250"),
  body("latlng")
    .optional()
    .trim()
    .isLatLong()
    .withMessage("Invalid latlng format"),
  handleInputErrors,
  measuringPointController.updateMeasuringPoint
);
measuringPointRouter.delete(
  "/:id",
  param("id")
    .exists()
    .withMessage("Missing measuringPointId")
    .isMongoId()
    .withMessage("Invalid Id"),
  handleInputErrors,
  measuringPointController.deleteMeasuringPoint
);

export default measuringPointRouter;
