const User = require('../models/Usuario')
const { Op } = require('sequelize')

module.exports = {
	async create(req, res, next) {
		let resError = {
			statusCode: null,
			internalCode: null,
			message: null,
		}

		const { name, lastName, nickname, birthday, email } = req.body

		const user = await User.create({
			name,
			lastName,
			email,
			nickname,
			birthday,
			verified,
		}).catch((error) => {
			if (error.name === 'SequelizeUniqueConstraintError') {
				resError.statusCode = 409
				resError.internalCode = 1
				resError.message = 'This email is already linked to an account.'
			} else {
				resError.statusCode = 400
				resError.internalCode = 0
				resError.message = 'It was not possible to register.'
			}
		})

		if (resError.statusCode) {
			return res.status(resError.statusCode).json({
				message: resError.message,
				internalCode: resError.internalCode,
			})
		}

		// req.session.user = {
        //     id: user.id,
		// 	name: user.name,
		// 	user.lastName,
		// 	user.email,
		// 	user.nickname,
		// 	user.birthday,
		// 	user.verified,
		// }
        console.log(user)
		return res.json(user)
	},

	async login(req, res, next) {
		const { email, password } = req.body

		if (!email || !password) {
			return res.status(400)
		}

		const user = await User.findOne({
			attributes: ['id', 'name'],
			where: {
				[Op.and]: [{ email }, { password }],
			},
		})

		if (user === null) {
			return res.status(400).json({
				message: 'Incorrect email and/or password!',
			})
		}

		req.session.user = user

		return res.json(user)
	},

	async sessionAuthentication(req, res) {
		if (req.session.user) {
			return res.json(req.session.user)
		}

		return res.status(204)
	},

	async logout(req, res) {
		req.session.destroy()
		return res.json({ message: 'Deslogged with success!' })
	},
}
