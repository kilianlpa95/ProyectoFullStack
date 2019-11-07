var Sequelize = require('sequelize');
var { database } = require('../database/database');

const User = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    user_name: {
        type: Sequelize.TEXT
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
