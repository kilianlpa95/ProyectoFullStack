var Sequelize = require('sequelize');
var { database } = require('../database/database');

const Product = database.define('products', {
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
    }
}, {
    timestamps: false
});

module.exports = Product;
