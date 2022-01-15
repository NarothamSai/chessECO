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
    const list = { name: "", moves: "" };
    const txt = [];
    $(elem)
      .children("td")
      .each((id, el) => {
        txt.push($(el).text());
      });
    const code = txt[0];
    const namePlusMoves = txt[1].split("\n");
    list.name = namePlusMoves[0];
    list.moves = namePlusMoves[1];

    chessList[code] = list;
  });
  //   for (let index = 0; index < 6; index++) {
  //     console.log(chessList[index]);
  //   }

  return chessList;
}
// scrapeFromChessGames();
module.exports = {
  scrapeFromChessGames,
};
