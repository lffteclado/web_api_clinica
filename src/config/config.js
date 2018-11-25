module.exports = {
    development:{
        database:{
            host: 'localhost',
            port: '3306',
            name: 'clinica',
            dialect: 'mysql',
            user: 'teste',
            password: '123'

        }
    },
    production:{
        database:{
            host: process.env.DB_HOST,
            port: process.env.DB_PORT
        }
    }
}