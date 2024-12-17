import express from "express";
import boardController from "../controllers/boardController.js"

const boardRouter = express.Router();

boardRouter.get("/", boardController.getAllBoards );
boardRouter.get("/:id", boardController.getSingleBoard);
boardRouter.post("/", boardController.createBoard);
boardRouter.put("/:id", boardController.updateBoard);
boardRouter.delete("/:id", boardController.deleteBoard);

export default boardRouter;
