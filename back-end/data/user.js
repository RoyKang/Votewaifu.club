const model = require('../model');

const crypto = require('crypto');

let User = model.user;

let getToken = require('../token.js');

async function encrypt(password) {
    let hash = await crypto.createHash('sha1').update(password).digest('hex');
    return hash
}

async function login(username,password,email) {
    let userInfo = await User.findOne ({
        where: {
            email:email        
        }
    });
    let isSuccess = await encrypt(password) === userInfo.passwd;
    //console.log('selected: ' + JSON.stringify(userInfo));
    let token = false;
    if (isSuccess){
        token = await getToken(email)
    }
    return token;
}




async function register(username,password,email) {
    let passwordHashed = await encrypt(password);
    console.log([username,password,email]);
    let registered =await User.findOne ({
        where: {
            email:email
        }
    });
    if (!registered) {
        let user = await User.create({
            name: username,
            gender: false,
            email: email,
            passwd: passwordHashed
        });
        console.log('created: ' + JSON.stringify(user));
        return true;
        } else {
        return false;
    }
}










module.exports = {
    register : register,
    login : login

}

