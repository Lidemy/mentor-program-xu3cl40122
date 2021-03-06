const Sequelize = require('sequelize');
const sequelize = require('./db')

const Comments = sequelize.define('Comments', {
    parent_id: {
        type: Sequelize.INTEGER
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    content: { // 不要存明碼
        type: Sequelize.STRING
    },
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
        tableName: 'orm_comments'
    });

Comments.sync()

module.exports = Comments;