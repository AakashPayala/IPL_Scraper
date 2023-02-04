// const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/sunrisers-hyderabad-vs-mumbai-indians-56th-match-1216495/full-scorecard"
const request=require("request")
const cheerio=require("cheerio")

console.log("===========================================================================")

function requestUrl(url){
    request(url,(err,res,html)=>{
        if(err){
            console.log(err)
        }
        else{
            extractHtml(html)
        }
    })
    
}

function extractHtml(html){
    // console.log(html)

    let $=cheerio.load(html)
    let matchDescription=$(".ds-grow > .ds-text-tight-m")
    let matchResult=$("div > .ds-text-tight-m:nth-child(3)")
    console.log($(matchDescription).text())
    console.log($(matchResult).text())


    let team_1_Names=$(".ds-rounded-lg:nth-child(2) tr .ds-text-tight-s > span:nth-child(1)")
    let team_1_Runs=$(".ds-rounded-lg:nth-child(2) .ds-w-full:nth-child(1) > tbody > tr > .ds-w-0:nth-child(3)")
    let team_1_Balls=$(".ds-rounded-lg:nth-child(2) .ds-w-full:nth-child(1) > tbody > tr > .ds-w-0:nth-child(4)")
    let team_1_4s=$(".ds-rounded-lg:nth-child(2) .ds-w-full:nth-child(1) > tbody > tr > .ds-w-0:nth-child(6)")
    let team_1_6s=$(".ds-rounded-lg:nth-child(2) .ds-w-full:nth-child(1) > tbody > tr > .ds-w-0:nth-child(7)")
    let team_1_strikeRate=$(".ds-rounded-lg:nth-child(2) .ds-w-full:nth-child(1) > tbody > tr > .ds-w-0:nth-child(8)")
    let team_1_TotalRuns=$("tr:nth-child(20) > .ds-font-bold:nth-child(3)")
    for(let i=0;i<team_1_Runs.length;i++){
        let name=$(team_1_Names[i]).text().split("(c)")[0].trim()
        let runs=$(team_1_Runs[i]).text()
        let balls=$(team_1_Balls[i]).text()
        let fours=$(team_1_4s[i]).text()
        let sixes=$(team_1_6s[i]).text()
        let strikeRate=$(team_1_strikeRate[i]).text()


        // console.log(`${name}\t-${runs}\t-${balls}\t-${fours}\t-${sixes}\t-${strikeRate}`)

        let jsonData={
            "name":name,
            "runs":runs,
            "balls":balls,
            "fours":fours,
            "sixes":sixes,
            "strikeRate":strikeRate
        }

        console.log(jsonData)
    }

    console.log("total runs -> ", $(team_1_TotalRuns).text())

    console.log("---------------------------------------------------------------------------------")

    let team_2_Names=$(".ds-rounded-lg:nth-child(3) tr > .ds-w-0 .ds-text-tight-s")
    let team_2_Runs=$(".ds-rounded-lg:nth-child(3) .ds-w-full:nth-child(1) > tbody > tr > .ds-w-0:nth-child(3)")
    let team_2_Balls=$(".ds-rounded-lg:nth-child(3) .ds-w-full:nth-child(1) > tbody > tr > .ds-w-0:nth-child(4)")
    let team_2_4s=$(".ds-rounded-lg:nth-child(3) .ds-w-full:nth-child(1) > tbody > tr > .ds-w-0:nth-child(6)")
    let team_2_6s=$(".ds-rounded-lg:nth-child(3) .ds-w-full:nth-child(1) > tbody > tr > .ds-w-0:nth-child(7)")
    let team_2_strikeRate=$(".ds-rounded-lg:nth-child(3) .ds-w-full:nth-child(1) > tbody > tr > .ds-w-0:nth-child(8)")
    let team_2_TotalRuns=$("tr:nth-child(4) > .ds-font-bold:nth-child(3)")

    for(let i=0;i<team_2_Runs.length;i++){
        let name=$(team_2_Names[i]).text().split("(c)")[0].trim()
        let runs=$(team_2_Runs[i]).text()
        let balls=$(team_2_Balls[i]).text()
        let fours=$(team_2_4s[i]).text()
        let sixes=$(team_2_6s[i]).text()
        let strikeRate=$(team_2_strikeRate[i]).text()


        // console.log(`${name}\t-${runs}\t-${balls}\t-${fours}\t-${sixes}\t-${strikeRate}`)

        let jsonData={
            "name":name,
            "runs":runs,
            "balls":balls,
            "fours":fours,
            "sixes":sixes,
            "strikeRate":strikeRate
        }

        console.log(jsonData)
    }

    console.log("total runs -> ", $(team_2_TotalRuns).text())

}





module.exports={
    requestUrl:requestUrl
}