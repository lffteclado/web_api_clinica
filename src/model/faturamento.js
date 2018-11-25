const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Faturamento = sequelize.define('Faturamento', {
    id:{
        allowNull:false,
        autoIncrement: true,
        primaryKey:true,
        type: Sequelize.INTEGER
    },
    descricao:{
        allowNull:false,
        type: Sequelize.STRING(100),
        validate:{
            len:[2,100]
        }
    },
    valor:{
        allowNull:false,
        type: Sequelize.DECIMAL(10,2)
    }
});

module.exports = Faturamento;