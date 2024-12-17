import siteService from "../services/siteService.js";

const getAllSites = async (req, res, next) => {
  try {
    const sites = await siteService.getAllSites();
    res.json({
      message: "Ok",
      data: sites,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleSite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const site = await siteService.getSingleSite(id);
    res.json({
      message: "Ok",
      data: site,
    });
  } catch (error) {
    next(error);
  }
};

const createSite = async (req, res, next) => {
  try {
    const data = req.body;
    const site = await siteService.createSite(data);
    res.json({
      message: "Created",
      data: site,
    });
  } catch (error) {
    next(error);
  }
};

const updateSite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const site = await siteService.updateSite(id, data);
    res.json({
      message: "Updated",
      data: site,
    });
  } catch (error) {
    next(error);
  }
};

const deleteSite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const site = await siteService.deleteSite(id);
    res.json({
      message: "Deleted",
      data: site,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllSites,
  getSingleSite,
  createSite,
  updateSite,
  deleteSite,
};
