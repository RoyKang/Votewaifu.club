// let bangumiData = require('bangumi-data');
        // let bangumiDataOrdered = bangumiData.items.sort(function (a,b) {
        //     if (Date.parse(a.begin.slice(0,10)) > Date.parse(b.begin.slice(0,10))) {
        //         return 1
        //     }else if (Date.parse(a.begin.slice(0,10)) < Date.parse(b.begin.slice(0,10))) {
        //         return -1
        //     }else {
        //         return 0
        //     }
        // });
        //let a = await initializeData(bangumiDataOrdered)
        // let animate = {}
        // animate.data = bangumiDataOrdered.filter(function (item){
        //     return Date.parse(item.begin) > new Date(2018,2,1,0,0,0,0)
        // } )
        // animate.year = '2018';
        // animate.month = '03';
        // console.log(animate)











        

async function initializeData (anima){
    let jsondata = require('bangumi-data');
    let bangumiData = anima;
    let model = require('../model.js');
    let animation = model.animation;
    for (let [index,bangumi] of bangumiData.entries()) {
        console.log(bangumi)
        let a=getTitleTranslate(bangumi);
        console.log(a);
        var animate = await animation.create({
            title: bangumi.title,
            titleTranslate:getTitleTranslate(bangumi),
            id: index,
            type: bangumi.type,
            language: bangumi.lang,
            begin:bangumi.begin,
            officialSite:bangumi.officialSite,
            sites:getSites(bangumi.sites),
            day:getDay(bangumi.begin),
            end:bangumi.end

    });
    }
}

function getTitleTranslate(bangumi) {
    //console.log(bangumi.titleTranslate[0]+bangumi.title)
    if (bangumi.titleTranslate&&bangumi.titleTranslate['zh-Hans']){
        let a = bangumi.titleTranslate['zh-Hans'][0] ||'wtf';
        console.log(a)
        return a
    }else if(bangumi.title) {
        let b =  bangumi.title ||'wtf';
        console.log(b)
        return b
    }else {
        return 123
    }
}
function getSites(sites) {
    if(sites){
        for (let site in sites) {
            var sitesString = ""+site
        }

        return sitesString;
    }else {
        return undefined;
    }
}
function getDay(begin) {
    if (begin) {
        return new Date(begin.slice(0,10)).getDay();
    }else {
        return 1
    }    
}



