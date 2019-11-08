const Sequelize = require('sequelize');
const { database } = require('../database/database');
const crypto = require('crypto');

const User = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    user_name: {
        type: Sequelize.STRING
    },
    user_password: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.INTEGER
    },
    user_email: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
});

module.exports = User;
