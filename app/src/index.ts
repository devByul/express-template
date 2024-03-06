import app from "./core/config/express";
import dotenv from "./core/config/dotenv";

const PORT = dotenv.server.port;
const MODE = dotenv.node.mode;

const initLogger = () => {
  console.log(`Server listening on port : ${PORT}`);
  console.log(`Server mode : ${MODE}`);
};

app.listen(PORT, initLogger);
