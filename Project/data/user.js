const model = require('../model');
const crypto = require('crypto');

const jwt = require('jsonwebtoken')
let User = model.user;


//let jwtKoa = require('koa-jwt');

async function encrypt(password) {
    let hash = await crypto.createHash('sha1').update(password).digest('hex');
    return hash
}

async function login(username,password,email) {
    var userInfo = await User.findOne ({
        where: {
            email:email        
        }
    });
    var isSuccess = await encrypt(password) === userInfo.passwd;
    console.log('selected: ' + JSON.stringify(userInfo));
    console.log(isSuccess)
    if (isSuccess){
        var token = await getToken(email)
    }
    
    return token;
}
async function getToken(email) {
    let secret = '0068';
    let key = {
        key:email
    };
    let token = await jwt.sign(key,secret,{expiresIn:'1h'});
    console.log(token)
    return token
}




async function register(username,password,email) {
    let passwordHashed = await encrypt(password);
    console.log([username,password,email])
    var user = await User.create({
        name: username,
        gender: false,
        email: email | null,
        passwd: passwordHashed
    });
    console.log('created: ' + JSON.stringify(user));
    return true;
}










module.exports = {
    register : register,
    login : login

}

