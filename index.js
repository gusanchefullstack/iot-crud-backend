import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.listen(process.env.EXPRESS_PORT, () => {
  console.log(
    `IOT Backend application running on port ${process.env.EXPRESS_PORT}`
  );
});
