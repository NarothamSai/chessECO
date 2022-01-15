"use strict";

const { default: fp } = require("fastify-plugin");

const constants = require("../../constants/constants");

module.exports = async function (fastify, opts, done) {
  await fastify.register(fp(require("./eco.service")));
  const cache = fastify.memCache();

  async function getList(request, response) {
    try {
      let ecoGetListCache = cache.get("eco.getlist");
      if (ecoGetListCache == undefined) {
        const ecoList = await fastify.ecoService.getList();
        ecoGetListCache = ecoList;
        cache.set("eco.getlist", ecoList, 180);
        response.header("Cache-Control", "public,max-age=180");
      }

      return response.code(constants.statusCode.OK).send(ecoGetListCache);
    } catch (err) {
      return response
        .code(constants.statusCode.BAD_REQUEST)
        .send({ message: err.message });
    }
  }

  async function getMoves(request, response) {
    try {
      let ecoGetMovesCache = cache.get("eco.getmoves");
      if (ecoGetMovesCache == undefined) {
        const moves = await fastify.ecoService.getMoves(request.params.code);
        ecoGetMovesCache = moves;
        cache.set("eco.getmoves", moves, 180);
        response.header("Cache-Control", "public,max-age=180");
      }
      return response.code(constants.statusCode.OK).send(ecoGetMovesCache);
    } catch (err) {
      return response
        .code(constants.statusCode.BAD_REQUEST)
        .send({ message: err.message });
    }
  }

  fastify.decorate("ecoController", { getList, getMoves });
};
