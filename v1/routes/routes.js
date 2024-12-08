import express from "express";
import organizationRouter from "./organizationRoutes.js";

const apiv1Router = express.Router();

apiv1Router.use("/organizations", organizationRouter);

export { apiv1Router };
