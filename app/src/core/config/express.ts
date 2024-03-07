import express, { Express } from "express";
import morgan from "morgan";
import cors, { CorsOptions } from "cors";
import { StatusCodes } from "http-status-codes";
import { stream } from "./logger";

import WorldRouter from "../../domain/route/world/index";

const app: Express = express();

app.use(morgan("combined", { stream }));

const originList = ["http://127.0.0.1:3001", "http://localhost:3001"];
const corsOption: CorsOptions = {
  origin: originList,
  methods: "GET,POST,PATCH,PUT,DELETE",
  maxAge: 3600,
  optionsSuccessStatus: StatusCodes.OK,
  credentials: true,
};
app.use(cors(corsOption));

app.use("/world", WorldRouter);

export default app;
