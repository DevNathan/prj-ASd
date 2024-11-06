import { Router } from "express";
import askRouter from "@/routes/ask";
import registerRouter from "@/routes/register";
import sstRouter from "@/routes/sst";

const rootRouter = Router();

rootRouter.use("/ask", askRouter);
rootRouter.use("/register", registerRouter);
rootRouter.use("/sst", sstRouter);

export default rootRouter;
