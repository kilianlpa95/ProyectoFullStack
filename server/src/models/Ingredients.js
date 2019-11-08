var Sequelize = require('sequelize');
var { database } = require('../database/database');

const Ingredient = database.define('ingredients', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.DOUBLE
    },
    imgurl: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
});

module.exports = Ingredient;
