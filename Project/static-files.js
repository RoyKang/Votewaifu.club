var fs = require('fs');
var mime = require('mime');
var path = require('path');

var readFile = function (fileName){
    return new Promise(function (resolve, reject){
        fs.readFile(fileName, function(error, data){
            if (error) return reject(error);
            resolve(data);
        });
    });
};

var exists = function (fileName){
    return new Promise(function (resolve, reject){
        fs.access(fileName, fs.constants.R_OK, function(error){
            if (error) return reject(error);
            resolve(true);
        });
    });
};

function staticFiles(url,dir) {
    return async (ctx,next) => {
        let rpath = ctx.request.path;
        if (rpath.startsWith(url)) {
            let fp = path.join(dir,rpath.substring(url.length));
            if (await exists(fp) === true) {
                ctx.response.type = mime.getType(rpath);
                ctx.response.body = await readFile(fp);
                // console.log(ctx.response.body)
            } else{
                ctx.response.status = 404;
            }
        } else {
            await next();
        }
    };
}


module.exports = staticFiles;