var Sequelize = require('sequelize');
var { database } = require('../database/database');

const Product = database.define('products', {
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
    }
}, {
    timestamp: false
});

module.exports = Product;
