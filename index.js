import express from 'express';
import bodyParser from 'body-parser';
//import  pkg  from 'pg';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
// import versesRouter from './routes/verses.js';
// import notesRouter from './routes/notes.js';
// import decksRouter from './routes/decks.js';
dotenv.config();

const CONNECTION_URL= process.env.CONNECTION_URL;
const USER= process.env.USER;
const PORT= process.env.PORT||5500;
const PASSWORD= process.env.PASSWORD;
const DB= process.env.DB;

const sequelize = new Sequelize({
  user: USER,
  host: CONNECTION_URL,
  database: DB,
  password: PASSWORD,
  port: PORT,
  dialect: 'postgres'
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
//const {Pool}=pkg;

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
// app.use('/verses',versesRouter);
// app.use('/note',notesRouter);
// app.use('/deck',decksRouter);
app.get('/',(req,res)=>{ res.send('Hello to the Truth Aplication')});



// const pool = new Pool({
//   user: USER,
//   host: CONNECTION_URL,
//   database: DB,
//   password: PASSWORD,
//   port: PORT,
// })

  
// const res = pool.connect();
// await pool.query('SELECT NOW()');
// await console.log("Connected to Database !");


// const text = 'INSERT INTO verse (pk,book,chapter,number) VALUES($1, $2, $3, $4) RETURNING *'
// const values = ['1234', 'filipenses',4,13]

// try {
//   const res = await pool.query(text, values)
//   console.log(res.rows[0])
//   // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
// } catch (err) {
//   console.log(err.stack)
// }



// await pool.end();
sequelize.close();

