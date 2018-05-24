let redis = require('../redis').redis

async function getSelectedAnimationData(info) {

}
async function createVote(info) {
    console.log(redis)
    var set = await redis.setAsync('12311','111111');
    console.log(set);
    var get = await redis.getAsync('12311');
    console.log(get)

}

module.exports = {
    createVote : createVote,
    

}

