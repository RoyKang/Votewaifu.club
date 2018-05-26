var redis = require("redis");

var bluebird = require("bluebird");

bluebird.promisifyAll(redis.RedisClient.prototype);

bluebird.promisifyAll(redis.Multi.prototype);

var client = redis.createClient(
    6379,"47.104.160.246",{auth_pass:'qwe'});

client.on("error", function(err){
        console.log("Error: " + err);
});

module.exports = client