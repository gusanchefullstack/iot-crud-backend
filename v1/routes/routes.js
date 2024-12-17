import express from "express";
import organizationRouter from "./organizationRoutes.js";
import siteRouter from "./siteRoutes.js";
import measuringPointRouter from "./measuringPointRoutes.js";
import boardRouter from "./boardRoutes.js";
import sensorRouter from "./sensorRoutes.js";

const apiv1Router = express.Router();

apiv1Router.use("/organizations", organizationRouter);
apiv1Router.use("/sites", siteRouter);
apiv1Router.use("/measuringpoints", measuringPointRouter);
apiv1Router.use("/boards", boardRouter);
apiv1Router.use("/sensors", sensorRouter);

export { apiv1Router };
