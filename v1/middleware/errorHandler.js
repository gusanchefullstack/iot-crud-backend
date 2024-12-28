import { Prisma } from "@prisma/client";
export const errorHandler = (err, req, res, next) => {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    err.status = 404;
  }
  if (
    err instanceof Prisma.PrismaClientUnknownRequestError ||
    err instanceof Prisma.PrismaClientRustPanicError ||
    err instanceof Prisma.PrismaClientInitializationError ||
    err instanceof Prisma.PrismaClientValidationError
  ) {
    err.status = 500;
  }
  console.log("******************************************************");
  console.log("************* API Default error Handler **************");
  console.log("******************************************************");
  console.log(err.message);
  res.status(err.status).json({ status: "Error", message: err.message });
};

