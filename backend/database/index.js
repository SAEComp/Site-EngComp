const Sequelize = require('sequelize')

const User = require('../models/Usuario')
const Disciplina = require('../models/Disciplina')

const connection = new Sequelize({
	dialect: process.env.DIALECT,
	host: process.env.HOST,
	username: process.env.USERNAME,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
})

User.init(connection)
Disciplina.init(connection)

if(process.env.ENVIRONMENT == "dev")
    connection.sync()

module.exports = connection
