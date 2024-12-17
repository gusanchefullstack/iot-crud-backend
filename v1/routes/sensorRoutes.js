import express from "express";
import sensorController from "../controllers/sensorController.js";

const sensorRouter = express.Router();

sensorRouter.get("/", sensorController.getAllSensors);
sensorRouter.get("/:id", sensorController.getSingleSensor);
sensorRouter.post("/", sensorController.createSensor);
sensorRouter.put("/:id", sensorController.updateSensor);
sensorRouter.delete("/:id", sensorController.deleteSensor);

export default sensorRouter;
