import app from "./core/config/express";
import dotenv from "./core/config/dotenv";
import { logger } from "./core/config/logger";
import "./core/config/mysql";

const PORT = dotenv.server.port;
const MODE = dotenv.node.mode;

const initLogger = () => {
  logger.info(`Server listening on port : ${PORT}`);
  logger.info(`Server mode : ${MODE}`);
};

app.listen(PORT, initLogger);
