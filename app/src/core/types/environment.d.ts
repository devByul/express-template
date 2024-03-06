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
    }
  }
}

export {};
