const Sequelize = require('sequelize')

const sequelize = new Sequelize('mentor_program_db', 'mentor_admin','mentor_admin123',{
    host:'localhost',
    dialect:'mysql'
})

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize