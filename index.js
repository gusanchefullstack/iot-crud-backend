import express from "express";
import "dotenv/config";
import cors from "cors";
import { apiv1Router } from "./v1/routes/routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", apiv1Router);

app.listen(process.env.EXPRESS_PORT, () => {
  console.log(
    `IOT Backend application running on port ${process.env.EXPRESS_PORT}`
  );
});
