const dotenv =require('dotenv');
dotenv.config();
const {CONNECTION_URL,USER,PORT,PASSWORD,DB}= process.env;


module.exports=  {
  "development": {
    "username": USER,
    "password": PASSWORD,
    "database": DB,
    "host": CONNECTION_URL,
    "dialect": "postgres"
  },
  "test": {
    "username": USER,
    "password": PASSWORD,
    "database": DB,
    "host": CONNECTION_URL,
    "dialect": "postgres"
  },
  "production": {
    "username": USER,
    "password": PASSWORD,
    "database": DB,
    "host": CONNECTION_URL,
    "dialect": "postgres"
  }
}
