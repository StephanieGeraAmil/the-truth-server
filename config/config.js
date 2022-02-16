const dotenv =require('dotenv');
dotenv.config();
const {CONNECTION_URL,USER,PASSWORD,DB,DATABASE_URL}= process.env;


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
  
    "use_env_variable": DATABASE_URL
   
  }
}
