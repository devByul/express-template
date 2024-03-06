import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 7070;

app.get("/", (req: Request, res: Response) => {
  res.send("hi?");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
