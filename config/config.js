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
    "database": "postgres://bjnbxsrsdyevgv:224caa2d0958886c931b2fdfa45e7f517b18a6605cb4d6c0363a4ca3d0d52154@ec2-54-83-21-198.compute-1.amazonaws.com:5432/d1fu84kn5bitld",
    "host":"https://the-truth.herokuapp.com/",
    "dialect": "postgres"
  }
}
