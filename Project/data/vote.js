const model = require('../model');

let Vote = model.vote;

async function getSelectedAnimationData(info) {
        
}
async function createVote(info) {
    var user = await Vote.create({
        name: username,
        gender: false,
        email: email | null,
        passwd: passwordHashed
    });
    console.log('created: ' + JSON.stringify(user));
    return true;
}










module.exports = {
    createVote : createVote,
    

}

