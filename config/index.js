const {PORT, DATABASE_HOST, DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD}= require("./environment")
const sequelize= require("./connection")

module.exports={
    sequelize,
    PORT,
    DATABASE_HOST,
    DATABASE_NAME,
    DATABASE_USER,
    DATABASE_PASSWORD
}
