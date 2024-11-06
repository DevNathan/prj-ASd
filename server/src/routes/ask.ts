import { Router, Request, Response } from "express";
import { ERROR_MESSAGES } from "@/const/errorMessage";

const askRouter = Router();

askRouter.post("/", async (req: Request, res: Response) => {
  try {
    const question = req.body.q as string | undefined;

    if (!question) throw new ReferenceError(ERROR_MESSAGES.BAD_REQUEST);

    console.log(question);
    // todo: GPT api 연결 및 요청

    await new Promise((resolve) => setTimeout(resolve, 3000));

    res.status(200).json({
      department: "내과",
      purpose: question,
    });
  } catch (error: any) {
    console.error(error);

    if (error instanceof ReferenceError) {
      res.status(400).send(error.message);
    } else {
      res.status(500).send(ERROR_MESSAGES.SERVER_ERROR);
    }
  }
});

export default askRouter;
