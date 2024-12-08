import express from "express";
import organizationController from "../controllers/organizationController.js";

const organizationRouter = express.Router();

organizationRouter.get("/", organizationController.getAllOrgs);
organizationRouter.get("/:id", organizationController.getSingleOrg);
organizationRouter.post("/", organizationController.createOrg);
organizationRouter.put("/:id", organizationController.updateOrg);
organizationRouter.delete("/:id", organizationController.deleteOrg);

export default organizationRouter;
