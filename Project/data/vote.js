let redis = require('../redis')

async function getSelectedData(info) {
    console.log(info);



}

function f() {
    
}
async function createVote(info) {
    var selectedData = getSelectedData(info);
    console.log(selectedData)



    var set = await redis.setAsync('123111','1qwe1');
    var get = await redis.getAsync('123111');

}

module.exports = {
    createVote : createVote,
    

}

