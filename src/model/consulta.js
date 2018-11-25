const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Consulta = sequelize.define('Consulta', {
    id:{
        allowNull:false,
        autoIncrement: true,
        primaryKey:true,
        type: Sequelize.INTEGER
    },
    especialidade:{
        allowNull: false,
        type:Sequelize.STRING(100),
        validate:{
            len:[2, 100]
        }
    },
    quantidade:{
        allowNull:false,
        type:Sequelize.INTEGER
    },
    situacao:{
        allowNull:false,
        type: Sequelize.STRING(40),
        validate:{
            len:[2, 40]
        }
    }
});


module.exports = Consulta;