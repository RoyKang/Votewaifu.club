const model = require('../model.js');
const animation = model.animation;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    'GET /mainPage': async (ctx, next) => {
        let animationSelected = await animation.findAll({
            where: {
                begin:{
                    [Op.gt]:'2018-03-01T00:00:00.000Z'
                }
            }
        });
        let dataJsoned = JSON.stringify(animationSelected);
        //console.log(dataJsoned)
        ctx.response.type = 'json';
        ctx.response.body = dataJsoned;
    }
};


