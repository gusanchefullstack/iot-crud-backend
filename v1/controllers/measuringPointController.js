import measuringPointService from "../services/measuringPointService.js";

const getAllMeasuringPoints = async (req, res, next) => {
  try {
    const measuringPoints = await measuringPointService.getAllMeasuringPoints();
    res.json({
      message: "Ok",
      data: measuringPoints,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleMeasuringPoint = async (req, res, next) => {
  try {
    const { id } = req.params;
    const measuringPoint = await measuringPointService.getSingleMeasuringPoint(id);
    res.json({
      message: "Ok",
      data: measuringPoint,
    });
  } catch (error) {
    next(error);
  }
};

const createMeasuringPoint = async (req, res, next) => {
  try {
    const data = req.body;
    const measuringPoint = await measuringPointService.createMeasuringPoint(data);
    res.json({
      message: "Created",
      data: measuringPoint,
    });
  } catch (error) {
    next(error);
  }
};

const updateMeasuringPoint = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const measuringPoint = await measuringPointService.updateMeasuringPoint(id, data);
    res.json({
      message: "Updated",
      data: measuringPoint,
    });
  } catch (error) {
    next(error);
  }
};

const deleteMeasuringPoint = async (req, res, next) => {
  try {
    const { id } = req.params;
    const measuringPoint = await measuringPointService.deleteMeasuringPoint(id);
    res.json({
      message: "Deleted",
      data: measuringPoint,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllMeasuringPoints,
  getSingleMeasuringPoint,
  createMeasuringPoint,
  updateMeasuringPoint,
  deleteMeasuringPoint,
};
