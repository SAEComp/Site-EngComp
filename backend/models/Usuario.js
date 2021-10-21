const { DataTypes, Model } = require('sequelize');

class Usuario extends Model {
    static init(sequelize){
        super.init({
            id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            name:{
                type:DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type:DataTypes.STRING,
                allowNull: false,
            },
            nickname: DataTypes.STRING,
            birthday:{
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
            },
            verified:{
                type: DataTypes.BOOLEAN,
                allowNull: false
            }
        },
        {
            sequelize
        });
    }
}

module.exports = Usuario;