var Sequelize = require('sequelize');
var { database } = require('../database/database');

const Ingredient = database.define('ingredients', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    description: {
        type: Sequelize.TEXT
    },
    price: {
        type: Sequelize.DOUBLE
    },
    imgurl: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});

module.exports = Ingredient;
