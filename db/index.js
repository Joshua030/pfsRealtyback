const { Sequelize, Op } = require("sequelize");
const modelProperty = require("./models/property.js");
require("dotenv").config();
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "postgres",
});

modelProperty(db);
module.exports = {
  ...db.models,
  db,
  Op,
};
