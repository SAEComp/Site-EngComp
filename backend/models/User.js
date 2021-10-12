const { DataTypes, Model } = require('sequelize');

class Usuario extends Model {
    static init(sequelize){
        super.init({
            id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            nome:{
                type:DataTypes.STRING,
                allowNull: false,
            },
            sobrenome: {
                type:DataTypes.STRING,
                allowNull: false,
            },
            apelido: DataTypes.STRING,
            nusp:{
                type:DataTypes.INTEGER,
                allowNull: false,
            },
            nascimento:{
                type:DataTypes.DATEONLY,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: true
                },
                unique: true,
                allowNull: false
            }
        },
        {
            sequelize
        });
    }
}

module.exports = Usuario;