declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Node
      NODE_MODE: "local" | "dev" | "prod";

      // Server
      PORT: number;
    }
  }
}

export {};
