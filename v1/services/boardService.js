import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllBoards = async () => {
  try {
    const boards = await prisma.board.findMany(
      {
        include:{
          _count:{
            select:{
              sensors:true
            }
          }
        }
      }
    );
    return boards;
  } catch (error) {
    throw error;
  }
};

const getSingleBoard = async (id) => {
  try {
    const board = await prisma.board.findUnique({
      where: {
        id,
      },
    });
    return board;
  } catch (error) {
    throw error;
  }
};

const createBoard = async (fields) => {
  try {
    const board = await prisma.board.create({
      data: {
        ...fields,
      },
    });
    return board;
  } catch (error) {
    throw error;
  }
};

const updateBoard = async (id, fields) => {
  try {
    const board = await prisma.board.update({
      where: {
        id,
      },
      data: {
        ...fields,
      },
    });
    return board;
  } catch (error) {
    throw error;
  }
};

const deleteBoard = async (id) => {
  try {
    const board = await prisma.board.delete({
      where: {
        id,
      },
    });
    return board;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllBoards,
  getSingleBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};
