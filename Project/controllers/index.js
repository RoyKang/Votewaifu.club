module.exports = {
    'GET /mainPage': async (ctx, next) => {
        let bangumiData = require('bangumi-data');
        let bangumiDataOrdered = bangumiData.items.sort(function (a,b) {
            if (Date.parse(a.begin.slice(0,10)) > Date.parse(b.begin.slice(0,10))) {
                return 1
            }else if (Date.parse(a.begin.slice(0,10)) < Date.parse(b.begin.slice(0,10))) {
                return -1
            }else {
                return 0
            }
        });
        let animate = {}
        animate.data = bangumiDataOrdered.filter(function (item){
            return Date.parse(item.begin) > new Date(2018,2,1,0,0,0,0)
        } )
        animate.year = '2018';
        animate.month = '03';
        console.log(animate)
        ctx.response.type = 'json';
        ctx.response.body = animate

    }
};



function initializeData (anima){
    let jsondata = require('bangumi-data');
    let bangumiData = jsondata.data;
    let model = require('model.js');
    let animation = model.animation;
    for (bangumi in bangumiData) {
        var animate =  animation.create({
            title: bangumi.title,
            id: 1,
            type: bangumi.type,
            language: bangumi.lang,
            begin:bangumi.begin,
            officialSite:bangumi.officialSite,
            sites:bangumi.sites


    });
    }


function getTitleTranslate(bangumi) {
        if(!bangumi.titleTranslate){
            return bangumi.title
        }else {
            return bangumi.titleTranslate[0]
        }
}




}