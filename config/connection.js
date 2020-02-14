const Sequelize = require("sequelize");

const {
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME
} = require("./environment");
// berurutan
const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  {
    host: DATABASE_HOST,
    dialect: "mysql",
    define: {
      timestamps: false
    }
  }
);

module.exports = sequelize;
