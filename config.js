require('dotenv').config()

module.exports = {
    mysql: {
        username: process.env.DB_USER,
        password: "",
        database: process.env.DB_NAME,
        params: {
            logging: false,
            host: process.env.DB_HOST,
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },
            dialect: "mysql"
        }
    }
}