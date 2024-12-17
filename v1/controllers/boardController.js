import boardService from "../services/boardService.js";

const getAllBoards = async (req, res, next) => {
  try {
    const boards = await boardService.getAllBoards();
    res.json({
      message: "Ok",
      data: boards,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleBoard = async (req, res, next) => {
  try {
    const { id } = req.params;
    const board = await boardService.getSingleBoard(id);
    res.json({
      message: "Ok",
      data: board,
    });
  } catch (error) {
    next(error);
  }
};

const createBoard = async (req, res, next) => {
  try {
    const data = req.body;
    const board = await boardService.createBoard(data);
    res.json({
      message: "Created",
      data: board,
    });
  } catch (error) {
    next(error);
  }
};

const updateBoard = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const board = await boardService.updateBoard(id, data);
    res.json({
      message: "Updated",
      data: board,
    });
  } catch (error) {
    next(error);
  }
};

const deleteBoard = async (req, res, next) => {
  try {
    const { id } = req.params;
    const board = await boardService.deleteBoard(id);
    res.json({
      message: "Deleted",
      data: board,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllBoards,
  getSingleBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};
