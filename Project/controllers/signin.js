
let getData = require('../data/user');


function getParams(ctx) {
    let 
        username = ctx.request.body.data.username || ''
        password = ctx.request.body.data.password || ''
        email = ctx.request.body.data.email || '';
    console.log(ctx.request.body);
    return [username,password,email];
    }

module.exports = {
    'POST /login': async (ctx, next) => {
        let
            [username,password,email] = getParams(ctx);
        
        let result = await getData.login(username,password,email);
        ctx.response.type = 'json';
        ctx.response.body = result;
    },
    'POST /register': async (ctx, next) => {
        let
            [username,password,email] = getParams(ctx);
        console.log(username,password);
        let result = await getData.register(username,password,email);
        ctx.response.type = 'json';
        ctx.response.body = result
    }
}