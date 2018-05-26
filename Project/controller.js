const fs = require('fs');

function addMapping(router,mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET')) {
            var path = url.substring(4);
            router.get(path,mapping[url]);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path,mapping[url])
        } else{
            console.log(`invalid url ${url}`);
        }
    }
}

function addControllers(router,controllers_dir) {
    var controllers_dir = __dirname + '/' + controllers_dir;
    let files = fs.readdirSync(controllers_dir);
    let jsFilter = (file) => file.endsWith('.js');
    let js_files = files.filter(jsFilter);
    for (let f of js_files) {
        let mapping = require(controllers_dir + '/' + f);
        console.log(mapping)
        addMapping(router,mapping);
    }
}

module.exports = function (dir) {
    let
        controllers_dir = dir || 'controllers',
        router = require('koa-router')();
    addControllers(router,controllers_dir);
    return router.routes();
};
