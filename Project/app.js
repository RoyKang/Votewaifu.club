//const isProduction = process.env.NODE_ENV === 'production'

const Koa = require('koa');

const app = new Koa();

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const staticFiles = require('./static-files');




const verifyToken = require('./token');

const jwtKoa = require('koa-jwt')


app.use(jwtKoa('0068').unless({
    path: [/\/register/, /\/login/,/\/index/,/\mainPage/]
}));











app.use(bodyParser());

app.use(controller());

app.use(staticFiles('/static/', __dirname + '/static'));


app.listen(3000);