const db = require('../db');

module.exports = db.defineModel('animation', {
    title: {
        type: db.STRING(100),
        unique: true
    },
    id: {
        type:db.STRING(100),
        unique:true,
        primaryKey:true,
    },
    titleTranslate:{
        type: db.STRING(100),
    },
    type:{
        type: db.STRING(100),
    },
    language:{
        type:db.STRING(100),
    },
    begin:{
        type:db.STRING(100),
    },
    sites:{
        type:db.STRING(100),
    },
    end: {
        type:db.STRING(100),
    },
    officialSite: {
        type:db.STRING(100),
    }


});
