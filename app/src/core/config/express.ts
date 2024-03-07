import express, { Express } from "express";
import morgan from "morgan";
import cors, { CorsOptions } from "cors";
import { StatusCodes } from "http-status-codes";
import rateLimit from "express-rate-limit";
import { stream } from "./logger";

import WorldRouter from "../../domain/route/world/index";

const app: Express = express();

/**
 * JSON & URLencoded
 */
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

/**
 * CORS
 */
const originList = ["http://127.0.0.1:3001", "http://localhost:3001"];
const corsOption: CorsOptions = {
  origin: originList,
  methods: "GET,POST,PATCH,PUT,DELETE",
  maxAge: 3600,
  optionsSuccessStatus: StatusCodes.OK,
  credentials: true,
};
app.use(cors(corsOption));

/**
 * Rate Limit Setting
 */
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1분 간격
  max: 600, // windowMs동안 최대 호출 횟수
  message:
    "Too many accounts created from this IP, please try again after an hour",
  standardHeaders: false, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);
app.set("trust proxy", 1);

/**
 * Logger [ morgan ]
 */
app.use(morgan("combined", { stream }));

/**
 * Route
 */
app.use("/world", WorldRouter);

/**
 * Route Error NotFound
 */
app.use((req, res) => {
  res.status(404).send("Not Found");
});

export default app;
