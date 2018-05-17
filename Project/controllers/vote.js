
let getData = require('../data/vote');


function getParams(ctx) {
    let
        info = ctx.request.body.data;
    return info;
}

module.exports = {
    'POST /createVote': async (ctx, next) => {
        let info = getParams(ctx);
        let result = await getData.createVote(info);

        if (result) {
            ctx.response.type = 'json';
            ctx.response.body = result;
        }
    },
    'POST /voteList': async (ctx, next) => {
        console.log(ctx)
        let
            [username,password,email] = getParams(ctx);
        console.log(username,password);
        let result = await getData.register(username,password,email);
        if (result) {
            ctx.response.body = 'success'
        }
    },
    'POST /voteDetail': async (ctx, next) => {
        console.log(ctx)
        let
            [username,password,email] = getParams(ctx);
        console.log(username,password);
        let result = await getData.register(username,password,email);
        if (result) {
            ctx.response.body = 'success'
        }
    },
    'POST /voting': async (ctx, next) => {
        console.log(ctx)
        let
            [username,password,email] = getParams(ctx);
        console.log(username,password);
        let result = await getData.register(username,password,email);
        if (result) {
            ctx.response.body = 'success'
        }
    },

}