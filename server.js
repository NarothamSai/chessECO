"use strict";

const Fastify = require("fastify");

const app = Fastify({
  logger: "info",
  pluginTimeout: 10000,
});

app.register(require("./app.js"));

app.listen(process.env.PORT || 3000, "0.0.0.0", (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
