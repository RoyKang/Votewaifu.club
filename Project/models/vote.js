const db = require('../db');

module.exports = db.defineModel('vote', {
    name: {
        type: db.STRING(100),
        unique: true
    },
    type: db.STRING(100),
    animationData:JSON
},{
    charset: 'utf8',
});
