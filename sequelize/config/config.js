const dotenv = require("dotenv");
dotenv.config();
const { CONNECTION_URL, DB_USER, DB , DATABASE_URL, DB_PASSWORD,DB_HOST} = process.env;

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
     username: DB_USER,
    password: DB_PASSWORD ,
    database: "the-truth",
    host: DB_HOST,
    dialect:  "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    
    // user: "bjnbxsrsdyevgv",
    // password:
    //   "224caa2d0958886c931b2fdfa45e7f517b18a6605cb4d6c0363a4ca3d0d52154",
    // database: "d1fu84kn5bitld",
    // host: "ec2-54-83-21-198.compute-1.amazonaws.com",
    // dialect: "postgres",
    // operatorsAliases: false,
  //use_env_variable: DATABASE_URL,
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false,
    //   },
    // },
  },
};
