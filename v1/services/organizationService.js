import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllOrgs = async () => {
  try {
    const orgs = await prisma.organization.findMany();
    return orgs;
  } catch (error) {
    throw error;
  }
};

const getSingleOrg = async (id) => {
  try {
    const org = await prisma.organization.findUnique({
      where: {
        id,
      },
    });
    return org;
  } catch (error) {
    throw error;
  }
};

const createOrg = async (fields) => {
  try {
    const org = await prisma.organization.create({
      data: {
        ...fields,
      },
    });
    return org;
  } catch (error) {
    throw error;
  }
};

const updateOrg = async (id, fields) => {
  try {
    const org = await prisma.organization.update({
      where: {
        id,
      },
      data: {
        ...fields,
      },
    });
    return org;
  } catch (error) {
    throw error;
  }
};

const deleteOrg = async (id) => {
  try {
    const org = await prisma.organization.delete({
      where: {
        id,
      },
    });
    return org;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllOrgs,
  getSingleOrg,
  createOrg,
  updateOrg,
  deleteOrg,
};
