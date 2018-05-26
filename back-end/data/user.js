const model = require('../model');

const crypto = require('crypto');

let User = model.user;

let getToken = require('../token.js');

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
    //console.log('selected: ' + JSON.stringify(userInfo));
    if (isSuccess){
        var token = await getToken(email)
    }   else {
        var token = false
    }
    
    return token;
}




async function register(username,password,email) {
    let passwordHashed = await encrypt(password);
    console.log([username,password,email]);
    var registered =await User.findOne ({
        where: {
            email:email
        }
    });
    if (!registered) {
        var user = await User.create({
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
