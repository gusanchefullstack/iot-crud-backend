import express from "express";
import siteController from "../controllers/siteController.js";
import { handleInputErrors } from "../middleware/validatorHandler.js";
import { body, param } from "express-validator";

const siteRouter = express.Router();

siteRouter.get("/", siteController.getAllSites);
siteRouter.get(
  "/:id",
  param("id")
    .exists()
    .withMessage("Missing siteId")
    .isMongoId()
    .withMessage("Invalid Id"),
  handleInputErrors,
  siteController.getSingleSite
);
siteRouter.post(
  "/",
  body("organizationId").exists().withMessage("Missing field: organizationId"),
  body("name")
    .exists()
    .withMessage("Missing field: name")
    .trim()
    .isString()
    .withMessage("Invalid name format")
    .isLength({ min: 3, max: 250 })
    .withMessage("Invalid name lenght min:3 max:250"),
  body("address")
    .exists()
    .withMessage("Missing field: address")
    .trim()
    .isString()
    .withMessage("Invalid address format")
    .isLength({ min: 3, max: 250 })
    .withMessage("Invalid address lenght min:3 max:250"),
  body("city")
    .exists()
    .withMessage("Missing field: city")
    .trim()
    .isString()
    .withMessage("Invalid city format")
    .isLength({ min: 3, max: 250 })
    .withMessage("Invalid city lenght min:3 max:250"),
  body("state")
    .exists()
    .withMessage("Missing field: state")
    .trim()
    .isString()
    .withMessage("Invalid state format")
    .isLength({ min: 3, max: 250 })
    .withMessage("Invalid city lenght min:3 max:250"),
  body("country")
    .exists()
    .withMessage("Missing field: country")
    .trim()
    .isString()
    .withMessage("Invalid country format")
    .isLength({ min: 3, max: 250 })
    .withMessage("Invalid city lenght min:3 max:250"),
  handleInputErrors,
  siteController.createSite
);
siteRouter.put(
  "/:id",
  param("id")
    .exists()
    .withMessage("Missing siteId")
    .isMongoId()
    .withMessage("Invalid Id"),
  body("organizationId").optional(),
  body("name")
    .optional()
    .trim()
    .isString()
    .withMessage("Invalid name format")
    .isLength({ min: 3, max: 250 })
    .withMessage("Invalid name lenght min:3 max:250"),
  body("address")
    .optional()
    .trim()
    .isString()
    .withMessage("Invalid address format")
    .isLength({ min: 3, max: 250 })
    .withMessage("Invalid address lenght min:3 max:250"),
  body("city")
    .optional()
    .trim()
    .isString()
    .withMessage("Invalid city format")
    .isLength({ min: 3, max: 250 })
    .withMessage("Invalid city lenght min:3 max:250"),
  body("state")
    .optional()
    .trim()
    .isString()
    .withMessage("Invalid state format")
    .isLength({ min: 3, max: 250 })
    .withMessage("Invalid city lenght min:3 max:250"),
  body("country")
    .optional()
    .trim()
    .isString()
    .withMessage("Invalid country format")
    .isLength({ min: 3, max: 250 })
    .withMessage("Invalid city lenght min:3 max:250"),
  handleInputErrors,
  siteController.updateSite
);
siteRouter.delete(
  "/:id",
  param("id")
    .exists()
    .withMessage("Missing siteId")
    .isMongoId()
    .withMessage("Invalid Id"),
  handleInputErrors,
  siteController.deleteSite
);

export default siteRouter;
