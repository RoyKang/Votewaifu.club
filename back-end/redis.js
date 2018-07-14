const redis = require("redis");

const bluebird = require("bluebird");

const config = require('./config.js');

bluebird.promisifyAll(redis.RedisClient.prototype);

bluebird.promisifyAll(redis.Multi.prototype);

let client = redis.createClient(
    config.redisPort,config.redis,config.redisPassword);

client.on("error", function(err){
        console.log("Error: " + err);
});

module.exports = client