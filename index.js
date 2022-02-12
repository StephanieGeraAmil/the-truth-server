const express = require('express');
const dotenv  = require('dotenv');
const routerVerses = require('./routes/verses.js');
const cors = require('cors');


dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.use('/verses', routerVerses);
app.get('/',(req,res)=>{ res.send('Hello to the Truth Aplication')});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});










