const Disciplina = require('../models/Disciplina')
const { Op } = require('sequelize')

module.exports = {
    async create(req, res){
        let error = false

       
        const { codigo, nome } = req.body


        const disciplina = await Disciplina.create({
            codigo,
            nome
        }).catch( error => {
            print("Pinto")
            error = true
        })
        
        if(error)
            return res.status(400).json({
                message: "Deu ruim!"
            })

        return res.json(disciplina)
    },

    async getAll(req, res){
        
        const disciplinas = await Disciplina.findAll()

        return res.json(disciplinas)
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