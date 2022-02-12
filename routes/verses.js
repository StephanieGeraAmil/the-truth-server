const express = require('express');
const versesController=require('../controllers/verses.js');
var routerVerses = express.Router();

routerVerses.get('/', versesController.findAll);
routerVerses.get('/:id', versesController.findById);
routerVerses.post('/', versesController.create);
routerVerses.patch('/:id', versesController.update);
routerVerses.delete('/:id',versesController.delete);
module.exports= routerVerses;

