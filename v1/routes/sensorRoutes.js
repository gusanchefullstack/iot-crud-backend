import express from "express";
import sensorController from "../controllers/sensorController.js";
import { handleInputErrors } from "../middleware/validatorHandler.js";
import { body, param } from "express-validator";

const sensorRouter = express.Router();

sensorRouter.get("/", sensorController.getAllSensors);
sensorRouter.get(
  "/:id",
  param("id")
    .exists()
    .withMessage("Missing sensorId")
    .isMongoId()
    .withMessage("Invalid Id"),
  handleInputErrors,
  sensorController.getSingleSensor
);
sensorRouter.post(
  "/",
  body("boardId").exists().withMessage("Missing field: boardId"),
  body("name")
    .exists()
    .withMessage("Missing field: name")
    .trim()
    .isString()
    .withMessage("Invalid name format")
    .isLength({ min: 3, max: 250 })
    .withMessage("Invalid name lenght min:3 max:250"),
  body("sensorType")
    .exists()
    .withMessage("Missing field: sensorType")
    .trim()
    .toUpperCase()
    .isIn([
      "PH",
      "ORP",
      "DISSOLVED_OXYGEN",
      "TEMPERATURE",
      "CONDUCTIVITY",
      "HUMIDITY",
    ])
    .withMessage(
      "Invalid sensorType. Options:  PH, ORP, DISSOLVED_OXYGEN, TEMPERATURE, CONDUCTIVITY, HUMIDITY"
    ),
  handleInputErrors,
  sensorController.createSensor
);
sensorRouter.put(
  "/:id",
  param("id")
    .exists()
    .withMessage("Missing sensorId")
    .isMongoId()
    .withMessage("Invalid Id"),
  body("boardId").optional(),
  body("name")
    .optional()
    .trim()
    .isString()
    .withMessage("Invalid name format")
    .isLength({ min: 3, max: 250 })
    .withMessage("Invalid name lenght min:3 max:250"),
  body("sensorType")
    .optional()
    .trim()
    .toUpperCase()
    .isIn([
      "PH",
      "ORP",
      "DISSOLVED_OXYGEN",
      "TEMPERATURE",
      "CONDUCTIVITY",
      "HUMIDITY",
    ])
    .withMessage(
      "Invalid sensorType. Options:  PH, ORP, DISSOLVED_OXYGEN, TEMPERATURE, CONDUCTIVITY, HUMIDITY"
    ),
  handleInputErrors,
  sensorController.updateSensor
);
sensorRouter.delete(
  "/:id",
  param("id")
    .exists()
    .withMessage("Missing sensorId")
    .isMongoId()
    .withMessage("Invalid Id"),
  handleInputErrors,
  sensorController.deleteSensor
);

export default sensorRouter;
