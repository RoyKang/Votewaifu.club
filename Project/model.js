const fs = require('fs');
const db = require('./db')
let files = fs.readdirSync(__dirname + '/models');

let myFilter = (item) => item.endsWith('js');

let js_files =  files.filter(myFilter);

module.exports = {};
for (let f of js_files) {
    let name = f.substring(0,f.length - 3);
    module.exports[name] = require(__dirname + '/models/' + f);
}

module.exports.sync = db.sync;

