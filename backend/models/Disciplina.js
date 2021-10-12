const { DataTypes, Model } = require('sequelize');

class Disciplina extends Model {
    static init(sequelize){
        super.init({
            codigo:{
                type: DataTypes.STRING,
                primaryKey:true,
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            sequelize
        });
    }
}

module.exports = Disciplina;