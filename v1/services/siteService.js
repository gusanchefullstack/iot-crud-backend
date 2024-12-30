import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllSites = async () => {
  try {
    const sites = await prisma.site.findMany({
      include:{
        _count:{
          select:{
            measuringPoints:true
          }
        }
      }
    });
    return sites;
  } catch (error) {
    throw error;
  }
};

const getSingleSite = async (id) => {
  try {
    const site = await prisma.site.findUnique({
      where: {
        id,
      },
    });
    return site;
  } catch (error) {
    throw error;
  }
};

const createSite = async (fields) => {
  try {
    const site = await prisma.site.create({
      data: {
        ...fields,
      },
    });
    return site;
  } catch (error) {
    throw error;
  }
};

const updateSite = async (id, fields) => {
  try {
    const site = await prisma.site.update({
      where: {
        id,
      },
      data: {
        ...fields,
      },
    });
    return site;
  } catch (error) {
    throw error;
  }
};

const deleteSite = async (id) => {
  try {
    const site = await prisma.site.delete({
      where: {
        id,
      },
    });
    return site;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllSites,
  getSingleSite,
  createSite,
  updateSite,
  deleteSite,
};
