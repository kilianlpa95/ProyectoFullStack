var Sequelize = require('sequelize');
var { database } = require('../database/database');

const User = database.define('users', {
    user_name: {
        type: Sequelize.TEXT,
        primaryKey: true
    },
    user_password: {
        type: Sequelize.TEXT
    },
    category: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

module.exports = User;
