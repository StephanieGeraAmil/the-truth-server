const express = require('express');
const cors = require('cors');
// const dotenv  = require('dotenv');
const router = require('./router');

// dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true}));

app.use('/', router);
app.get('/',(req,res)=>{ res.send('Hello to the Truth Aplication')});

const port= process.env.PORT || 5000;
app.listen(port, ()=> console.log(`server running on port ${port}`));









