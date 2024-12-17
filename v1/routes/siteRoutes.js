import express from "express";
import siteController from "../controllers/siteController.js";

const siteRouter = express.Router();

siteRouter.get("/", siteController.getAllSites);
siteRouter.get("/:id", siteController.getSingleSite);
siteRouter.post("/", siteController.createSite);
siteRouter.put("/:id", siteController.updateSite);
siteRouter.delete("/:id", siteController.deleteSite);

export default siteRouter;
