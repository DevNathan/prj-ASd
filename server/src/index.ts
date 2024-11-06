import express, { Request, Response } from "express";
import { config } from "dotenv";
import rootRouter from "@/routes/rootRouter";
import "tsconfig-paths/register.js";
import cors from "cors";

config();

const app = express();
const port = process.env.PORT;

if (!port) {
  throw new Error("PORT must be defined in .env file to init server.");
}

app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send(`Server is running. Current PORT is ${port}`);
});

app.use("/api", rootRouter);

app.listen(port, () => {
  console.log(`Server is running. Current PORT is ${port}`);
});
