"use strict";

const { scrapeFromChessGames } = require("./scrape.from.chessgames");

module.exports = async function (fastify, opts, done) {
  const chessList = await scrapeFromChessGames();

  async function getList() {
    return chessList;
  }

  async function getMoves(code) {
    return chessList[code].moves;
  }

  fastify.decorate("ecoService", { getList, getMoves });
};
