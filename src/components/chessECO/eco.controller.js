"use strict";

const { default: fp } = require("fastify-plugin");

const constants = require("../../constants/constants");

module.exports = async function (fastify, opts, done) {
  await fastify.register(fp(require("./eco.service")));

  async function getList(request, response) {
    try {
      const ecoList = await fastify.ecoService.getList();

      return response.code(constants.statusCode.OK).send(ecoList);
    } catch (err) {
      return response
        .code(constants.statusCode.BAD_REQUEST)
        .send({ message: err.message });
    }
  }

  async function getMoves(request, response) {
    try {
      const moves = await fastify.ecoService.getMoves(request.params.code);

      return response.code(constants.statusCode.OK).send(moves);
    } catch (err) {
      return response
        .code(constants.statusCode.BAD_REQUEST)
        .send({ message: err.message });
    }
  }

  fastify.decorate("ecoController", { getList, getMoves });
};
