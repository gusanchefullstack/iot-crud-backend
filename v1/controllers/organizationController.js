import organizationService from "../services/organizationService.js";

const getAllOrgs = async (req, res, next) => {
  try {
    const orgs = await organizationService.getAllOrgs();
    res.json({
      message: "Ok",
      data: orgs,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleOrg = async (req, res, next) => {
  try {
    const { id } = req.params;
    const org = await organizationService.getSingleOrg(id);
    res.json({
      message: "Ok",
      data: org,
    });
  } catch (error) {
    next(error);
  }
};

const createOrg = async (req, res, next) => {
  try {
    const data = req.body;
    const org = await organizationService.createOrg(data);
    res.json({
      message: "Created",
      data: org,
    });
  } catch (error) {
    next(error);
  }
};

const updateOrg = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const org = await organizationService.updateOrg(id, data);
    res.json({
      message: "Updated",
      data: org,
    });
  } catch (error) {
    next(error);
  }
};

const deleteOrg = async (req, res, next) => {
  try {
    const { id } = req.params;
    const org = await organizationService.deleteOrg(id);
    res.json({
      message: "Deleted",
      data: org,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllOrgs,
  getSingleOrg,
  createOrg,
  updateOrg,
  deleteOrg,
};
