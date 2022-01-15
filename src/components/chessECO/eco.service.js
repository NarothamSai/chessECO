"use strict";

const { scrapeFromChessGames, url } = require("./scrape.from.chessgames");

module.exports = async function (fastify, opts, done) {
  async function getList() {
    return scrapeFromChessGames();
  }

  async function getMoves(code) {
    const chessList = await scrapeFromChessGames();
    return chessList[code].moves;
  }

  fastify.decorate("ecoService", { getList, getMoves });
};
