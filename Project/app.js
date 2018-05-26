//const isProduction = process.env.NODE_ENV === 'production'

const Koa = require('koa');

const app = new Koa();

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const staticFiles = require('./static-files');

const config = require('./config.js');

const jwtKoa = require('koa-jwt');

const secret = config.tokenSecret;

const path = config.noAuthorizedpath;

const port = config.serverPort;

app.use(jwtKoa({
    secret,
}).unless({
    path: path
}));

app.use(bodyParser());

app.use(controller());

app.use(staticFiles('/static/', __dirname + '/static'));


app.listen(port);