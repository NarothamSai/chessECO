"use strict";

const fp = require("fastify-plugin");
const NodeCache = require("node-cache");

module.exports = fp(async function (fastify, opts) {
  const cache = new NodeCache({ stdTTL: 180, checkperiod: 120 });

  fastify.decorate("memCache", function () {
    return cache;
  });
});
