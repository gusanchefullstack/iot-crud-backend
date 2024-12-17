import sensorService from "../services/sensorService.js";

const getAllSensors = async (req, res, next) => {
  try {
    const sensors = await sensorService.getAllSensors();
    res.json({
      message: "Ok",
      data: sensors,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleSensor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sensor = await sensorService.getSingleSensor(id);
    res.json({
      message: "Ok",
      data: sensor,
    });
  } catch (error) {
    next(error);
  }
};

const createSensor = async (req, res, next) => {
  try {
    const data = req.body;
    const sensor = await sensorService.createSensor(data);
    res.json({
      message: "Created",
      data: sensor,
    });
  } catch (error) {
    next(error);
  }
};

const updateSensor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const sensor = await sensorService.updateSensor(id, data);
    res.json({
      message: "Updated",
      data: sensor,
    });
  } catch (error) {
    next(error);
  }
};

const deleteSensor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sensor = await sensorService.deleteSensor(id);
    res.json({
      message: "Deleted",
      data: sensor,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllSensors,
  getSingleSensor,
  createSensor,
  updateSensor,
  deleteSensor,
};
