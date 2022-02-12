const express = require('express');
const controllers=require('../controllers');
const versesController=controllers.verses;
const searchKeysController=controllers.search_keys;

var router = express.Router();

router.get('/verses', versesController.findAll);
router.get('/verses/:id', versesController.findById);
router.post('/verses', versesController.create);
router.patch('/verses/:id', versesController.update);
router.delete('/verses/:id',versesController.delete);


router.get('/sk', searchKeysController.findAll);
router.get('/sk/:id', searchKeysController.findById);
router.post('/sk', searchKeysController.create);
router.patch('/sk/:id', searchKeysController.update);
router.delete('/sk/:id',searchKeysController.delete);

/* Advance Router */
router.post('/verses/add_sk', versesController.addSk);





module.exports= router;
