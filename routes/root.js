"use strict";

const { default: fp } = require("fastify-plugin");

module.exports = async function (fastify, opts) {
  await fastify.register(
    fp(require("../src/components/chessECO/eco.controller"))
  );

  fastify.get("/", {}, fastify.ecoController.getList);

  fastify.get(
    "/:code",
    {
      schema: {
        params: {
          code: {
            type: "string",
            maxLength: 3,
            pattern: "[A-E]{1}[0-9]{2}",
          },
        },
      },
    },
    fastify.ecoController.getMoves
  );
};
