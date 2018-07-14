let redis = require('../redis');
const model = require('../model.js');
const animation = model.animation;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function getSelectedData(info) {
    let [startDate,endDate] = info.startDate;
    let animationSelected = await animation.findAll({
        attributes: ['id', 'titleTranslate'],
        where: {
            begin:{
                [Op.between]: [startDate, endDate],
            }
        }
    });
    let data = [];
    for (let animation of animationSelected) {
        data.push(animation.id);
        data.push(animation.titleTranslate);
    }
    return data;
}

function f() {
    
}
async function createVote(info) {
    let selectedData = await getSelectedData(info);
    let voteNo = await redis.incrAsync('voteNo');
    let voteKey = 'vote:' + voteNo;
    let votedKey = 'voted' + voteNo;
    let voteCreated = await redis.hmsetAsync(voteKey,selectedData);
    //let data = await redis.hgetallAsync(voteKey);
    let votedUser = await redis.addAsync(votedKey,userName)
}

module.exports = {
    createVote : createVote,
    

}

