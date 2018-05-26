var config = {
    database: '', // 使用哪个数据库
    username: '', // 用户名
    password: '', // 口令
    host: '', // 主机名
    port: 3306,// 端口号，MySQL默认3306
    dialect: 'mysql',
    redis:'', //redis服务器地址
    redisPassword:{auth_pass:''},//远程连接redis密码
    redisPort:6379,//redis端口
    tokenSecret:'',//生成token的密钥
    noAuthorizedpath: [/\/register/, /\/login/,/\/index/,/\/mainPage/],//无需登录的路径
    serverPort:3000,//node服务端口

};

module.exports = config;