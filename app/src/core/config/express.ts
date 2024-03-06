import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import { stream } from "./logger";

const app: Express = express();

app.use(morgan("combined", { stream }));

app.get("/", (req: Request, res: Response) => {
  res.send("hi?");
});

export default app;
