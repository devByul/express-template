import { config } from "dotenv";

let path;
switch (process.env.NODE_MODE) {
  case "local":
    path = `${process.cwd()}/env/.env.local`;
    break;
  case "dev":
    path = `${process.cwd()}/env/.env.dev`;
    break;
  case "prod":
    path = `${process.cwd()}/env/.env.prod`;
    break;
  default:
    throw new Error("The NODE_MODE value is not valid.");
}

config({ path });

const dotenv = {
  node: {
    mode: process.env.NODE_MODE,
    local: process.env.LOCAL,
    dev: process.env.DEVELOPMENT,
    prod: process.env.PRODUCTION,
  },
  server: {
    port: process.env.PORT,
  },
};

export default dotenv;
