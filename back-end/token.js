
const jwt = require('jsonwebtoken');

const config = require('./config');

async function getToken(email) {
    let secret = config.tokenSecret ;
    let key = {
        key:email
    };
    let token = await jwt.sign(key,secret,{expiresIn:'1h'});

    return token
}

module.exports = getToken

// const jwt = require('jsonwebtoken');
//
//
// module.exports = async (ctx,next) => {
//     if(ctx.request.headers['Authorization']){
//         let token = ctx.request.header['Authorization'].split('')[1];
//         let decode = jwt.decode(token,'0068');
//         if(token && decode.exp <= Date.now()/1000){
//             ctx.status = 401;
//             ctx.body = 'token expired'
//         }else {
//             return next();
//         }
//     }else {
//         ctx.status = 401;
//         ctx.body = 'none token'
//
//
//     }
//
// };