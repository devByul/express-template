declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Node
      NODE_MODE: "local" | "dev" | "prod";
      LOCAL: "local";
      DEVELOPMENT: "dev";
      PRODUCTION: "prod";

      // Server
      PORT: number;

      // Database
      MYSQL_NAME: string;
      MYSQL_HOST: string;
      MYSQL_PORT: number;
      MYSQL_USER: string;
      MYSQL_PASSWORD: string;
      MYSQL_DATABASE: string;
      MYSQL_CONLIMIT: number;
    }
  }
}

export {};
