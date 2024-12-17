import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllSensors = async () => {
  try {
    const sensors = await prisma.sensor.findMany();
    return sensors;
  } catch (error) {
    throw error;
  }
};

const getSingleSensor = async (id) => {
  try {
    const sensor = await prisma.sensor.findUnique({
      where: {
        id,
      },
    });
    return sensor;
  } catch (error) {
    throw error;
  }
};

const createSensor = async (fields) => {
  try {
    const sensor = await prisma.sensor.create({
      data: {
        ...fields,
      },
    });
    return sensor;
  } catch (error) {
    throw error;
  }
};

const updateSensor = async (id, fields) => {
  try {
    const sensor = await prisma.sensor.update({
      where: {
        id,
      },
      data: {
        ...fields,
      },
    });
    return sensor;
  } catch (error) {
    throw error;
  }
};

const deleteSensor = async (id) => {
  try {
    const sensor = await prisma.sensor.delete({
      where: {
        id,
      },
    });
    return sensor;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllSensors,
  getSingleSensor,
  createSensor,
  updateSensor,
  deleteSensor,
};
