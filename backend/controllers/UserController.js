const User = require('../models/User')
const { Op } = require('sequelize')

module.exports = {
    async create(req, res){

        let errorMessage = null

        const { name, lastName, email, password} = req.body

        const user = await User.create({
            name,
            lastName,
            email,
            password 
        }).catch( error => {
            if(error.name === "SequelizeUniqueConstraintError"){
                errorMessage = "This email is already linked to an account."
            }
        })

        if(errorMessage){
            return res.status(409).json({
                message:errorMessage
            })
        }

        req.session.user = user
        
        return res.json(user)
    },

    async login(req, res){
        if(req.session.user){
            return res.json(req.session.user)
        }
        
        const { email , password } = req.body

        if( !email || !password ){
            return res.status(400)
        }


        const user = await User.findOne({
            attributes:[
                'id',
                'name'
            ],
            where:{
                [Op.and]: [
                    {email},
                    {password}
                ]
            } 
        })

        if(user === null){
            return res.status(400).json({
                message:"Incorrect email and/or password!" 
            })
        }

        req.session.user = user

        return res.json(user);
    },

    async sessionAuthentication(req, res){
        if(req.session.user){
            return res.json(req.session.user)
        }

        return res.status(204)
    },

    

    async logout(req, res){
        req.session.destroy()
        return res.json({message:"Deslogged with success!"});
    }
}