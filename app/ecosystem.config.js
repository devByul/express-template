"use strict";

module.exports = {
  apps: [
    {
      name: "Node Express Server",
      script: "./dist/index.js",
      wathch: true,
      env_local: {
        NODE_MODE: "local",
      },
      env_developer: {
        NODE_MODE: "dev",
      },
      env_production: {
        NODE_MODE: "prod",
      },
    },
  ],
};
