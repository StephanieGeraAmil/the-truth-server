const dotenv =require('dotenv');
dotenv.config();
const {CONNECTION_URL,USER,PORT,PASSWORD,DB,DATABASE_URL}= process.env;


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
  
    "database": DATABASE_URL,
    "port":PORT,
    "dialect": "postgres"
  }
}
