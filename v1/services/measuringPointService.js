import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllMeasuringPoints = async () => {
  try {
    const measuringPoints = await prisma.measuringPoint.findMany({
      include:{
        _count:{
          select:{
            boards:true
          }
        }
      }
    });
    return measuringPoints;
  } catch (error) {
    throw error;
  }
};

const getSingleMeasuringPoint = async (id) => {
  try {
    const measuringPoint = await prisma.measuringPoint.findUnique({
      where: {
        id,
      },
    });
    return measuringPoint;
  } catch (error) {
    throw error;
  }
};

const createMeasuringPoint = async (fields) => {
  try {
    const measuringPoint = await prisma.measuringPoint.create({
      data: {
        ...fields,
      },
    });
    return measuringPoint;
  } catch (error) {
    throw error;
  }
};

const updateMeasuringPoint = async (id, fields) => {
  try {
    const measuringPoint = await prisma.measuringPoint.update({
      where: {
        id,
      },
      data: {
        ...fields,
      },
    });
    return measuringPoint;
  } catch (error) {
    throw error;
  }
};

const deleteMeasuringPoint = async (id) => {
  try {
    const measuringPoint = await prisma.measuringPoint.delete({
      where: {
        id,
      },
    });
    return measuringPoint;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllMeasuringPoints,
  getSingleMeasuringPoint,
  createMeasuringPoint,
  updateMeasuringPoint,
  deleteMeasuringPoint,
};
