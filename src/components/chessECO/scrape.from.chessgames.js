"use strict";

const httpRequest = require("../httpRequest");
const cheerio = require("cheerio");

const url = "https://www.chessgames.com/chessecohelp.html";

async function scrapeFromChessGames() {
  const chessList = {};
  const { body } = await httpRequest({
    method: "get",
    url: url,
  });

  const $ = cheerio.load(body);
  const tableElem = $("tbody").children();

  tableElem.each((ind, elem) => {
    const txt = [];
    $(elem)
      .children("td")
      .each((id, el) => {
        txt.push($(el).text());
      });
    const code = txt[0];
    chessList[code] = txt[1];
  });

  return chessList;
}

module.exports = {
  scrapeFromChessGames,
  url,
};
