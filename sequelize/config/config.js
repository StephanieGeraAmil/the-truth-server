const dotenv = require("dotenv");
dotenv.config();
const { CONNECTION_URL, DB_USER, DB, DATABASE_URL, DB_PASSWORD, DB_HOST } =
  process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB,
    host: CONNECTION_URL,
    dialect: "postgres",
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB,
    host: CONNECTION_URL,
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DB,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
};

//  username: DB_USER,
// password: DB_PASSWORD ,
// database: "the-truth",
// host: DB_HOST,
// dialect:  "postgres",
// dialectOptions: {
//   ssl: {
//     require: true,
//     rejectUnauthorized: false,
//   },
// },

// dialect: "postgres",
//         db_user:"<DB_USER>",
//           db_password:"<DB_PASSWORD>",
//   db_url: process.env.DATABASE_URL,
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
