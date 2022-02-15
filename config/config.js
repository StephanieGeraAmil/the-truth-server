const dotenv =require('dotenv');
dotenv.config();
const {CONNECTION_URL,USER,PORT,PASSWORD,DB,DATABASE_URL}= process.env;


module.exports=  {
  "development": {
    "port":PORT,
    "username": USER,
    "password": PASSWORD,
    "database": DB,
    "host": CONNECTION_URL,
    "dialect": "postgres"
  },
  "test": {
    "port":PORT,
    "username": USER,
    "password": PASSWORD,
    "database": DB,
    "host": CONNECTION_URL,
    "dialect": "postgres"
  },
  "production": {
    "port":PORT,
    "username": USER,
    "password": PASSWORD,
    "database": DATABASE_URL,
    "dialect": "postgres"
  }
}
