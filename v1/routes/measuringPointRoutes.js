import express from "express";
import measuringPointController from "../controllers/measuringPointController.js"

const measuringPointRouter = express.Router();

measuringPointRouter.get("/", measuringPointController.getAllMeasuringPoints );
measuringPointRouter.get("/:id", measuringPointController.getSingleMeasuringPoint);
measuringPointRouter.post("/", measuringPointController.createMeasuringPoint);
measuringPointRouter.put("/:id", measuringPointController.updateMeasuringPoint);
measuringPointRouter.delete("/:id", measuringPointController.deleteMeasuringPoint);

export default measuringPointRouter;
