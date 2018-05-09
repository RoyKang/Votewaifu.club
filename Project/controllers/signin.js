
let getData = require('../data/user');


function getParams(ctx) {
    let 
        username = ctx.request.body.username || ''
        password = ctx.request.body.password || ''
        email = ctx.request.body.email || '';
    console.log(ctx.request.body);
    return [username,password,email];
    }

module.exports = {
    'POST /login': async (ctx, next) => {
        let
            [username,password,email] = getParams(ctx);
        
        let result = await getData.login(username,password,email);
        console.log(result);
        if (result) {
            ctx.response.type = 'json';
            ctx.response.body = result;

        }
    },
    'POST /register': async (ctx, next) => {
        console.log(ctx)
        let
            [username,password,email] = getParams(ctx);
        console.log(username,password);
        let result = await getData.register(username,password,email);
        if (result) {
            ctx.response.body = 'success'
        }
    }
}