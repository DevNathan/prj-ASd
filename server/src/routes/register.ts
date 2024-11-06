import { Router, Request, Response } from "express";
import Redis from "@/db/RedisConnector";
import { ERROR_MESSAGES } from "@/const/errorMessage";

const registerRouter = Router();

registerRouter.post("/", async (req: Request, res: Response) => {
  try {
    Redis.registrationDB.get("test");

    res.status(200).send("success");
  } catch (error: any) {
    console.error(error);
    res.status(500).send(ERROR_MESSAGES.SERVER_ERROR);
  }
});

export default registerRouter;
