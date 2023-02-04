const request = require("request");
const cheerio = require("cheerio");


const requestUrlObj=require("./scoreCard.js")
function getAllMatches(url) {
  request(url, function (err, res, html) {
    if (err) {
      console.log("error", err);
    } else {
      // console.log(html)

      // let $=cheerio.load(html)
      // console.log($.text())
      getScoreCards(html);
    }
  });
}

function getScoreCards(html) {
  let $ = cheerio.load(html);
  let scoreCardLinks = $(
    ".ds-p-4 .ds-flex > .ds-truncate > .ds-no-tap-higlight"
  );

  for (let i = 0; i < scoreCardLinks.length; i++) {
    let link = $(scoreCardLinks[i]).attr("href");
    let fulLink = "https://www.espncricinfo.com" + link;
    console.log(fulLink);

    requestUrlObj.requestUrl(fulLink)

    
  }
}

module.exports = { getAllMatches: getAllMatches };
