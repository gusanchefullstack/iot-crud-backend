import express from "express";
import boardController from "../controllers/boardController.js";
import { handleInputErrors } from "../middleware/validatorHandler.js";
import { body, param } from "express-validator";

const boardRouter = express.Router();

boardRouter.get("/", boardController.getAllBoards);
boardRouter.get(
  "/:id",
  param("id")
    .exists()
    .withMessage("Missing boardId")
    .isMongoId()
    .withMessage("Invalid Id"),
  handleInputErrors,
  boardController.getSingleBoard
);
boardRouter.post(
  "/",
  body("measuringPointId")
    .exists()
    .withMessage("Missing field: measuringPointId"),
  body("name")
    .exists()
    .withMessage("Missing field: name")
    .trim()
    .isString()
    .withMessage("Invalid name format")
    .isLength({ min: 3, max: 250 })
    .withMessage("Invalid name lenght min:3 max:250"),
  body("boardType")
    .exists()
    .withMessage("Missing field: boardType")
    .trim()
    .toUpperCase()
    .isIn(["ARDUINO", "RASPBERRYPI", "PARTICLE"])
    .withMessage(
      "Invalid boardType. Options:  ARDUINO RASPBERRYPI PARTICLE"
    ),
  handleInputErrors,
  boardController.createBoard
);
boardRouter.put(
  "/:id",
  param("id")
    .exists()
    .withMessage("Missing boardId")
    .isMongoId()
    .withMessage("Invalid Id"),
  body("measuringPointId").optional(),
  body("name")
    .optional()
    .trim()
    .isString()
    .withMessage("Invalid name format")
    .isLength({ min: 3, max: 250 })
    .withMessage("Invalid name lenght min:3 max:250"),
  body("boardType")
    .optional()
    .trim()
    .toUpperCase()
    .isIn(["ARDUINO", "RASPBERRYPI", "PARTICLE"])
    .withMessage(
      "Invalid boardType. Options: ARDUINO RASPBERRYPI PARTICLE"
    ),
  handleInputErrors,
  boardController.updateBoard
);
boardRouter.delete(
  "/:id",
  param("id")
    .exists()
    .withMessage("Missing boardId")
    .isMongoId()
    .withMessage("Invalid Id"),
  handleInputErrors,
  boardController.deleteBoard
);

export default boardRouter;
