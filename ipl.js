const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const request=require("request");
const cheerio=require("cheerio");

const allMAtch_Obj=require("./allMatches.js")
//requesting from espn
request(url,cb);

function cb(err,request,html){
    if(err){
        console.log("error", err)
    }
    else{
        // console.log(html)

        // let $=cheerio.load(html)
        // console.log($.text())
        extractLink(html)
    }
}

//function to extract link:
//from home page
function extractLink(html){

    let $=cheerio.load(html)
    // console.log($.text())

    let link=$(".ds-border-line:nth-child(2) > .ds-inline-flex")

    // console.log($(link).text())

    let href="https://www.espncricinfo.com"+link.attr("href")
    // console.log(href)

   allMAtch_Obj.getAllMatches(href)

}


