"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const parse = require("pg-connection-string").parse;


const basename = path.basename(__filename);
require("dotenv").config();
const env = process.env.NODE_ENV || "production";
const config = require(__dirname + '/../config/config.js')[env];
const db = {};
let sequelize;
if (env == "production") {
  const connectionString = process.env.DATABASE_URL;
const connector = parse(connectionString);
console.log(connector);
  sequelize = new Sequelize(
    connector.database,
    connector.user,
    connector.password,
    {
      dialect: "postgres",
      host: connector.host,
      dialectOptions: {
        ssl: { sslmode: "require", rejectUnauthorized: false },
      },
    }
  );
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

//if (config.use_env_variable) {}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;
