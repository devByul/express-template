import express, { Express } from "express";
import morgan from "morgan";
import { stream } from "./logger";

import WorldRouter from "../../domain/route/world/index";

const app: Express = express();

app.use(morgan("combined", { stream }));

app.use("/world", WorldRouter);

export default app;
