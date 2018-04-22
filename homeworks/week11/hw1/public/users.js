const Sequelize = require('sequelize');
const sequelize = require('./db')

const User = sequelize.define('user', {
    nickname: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: { // 不要存明碼
        type: Sequelize.STRING
    }
}, {
        tableName: 'orm_users'
    });

User.sync()

module.exports = User;