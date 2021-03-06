const express = require('express');
const controllers= require('../controllers');
const versesController= controllers.verses;
const searchKeysController= controllers.search_keys;
const notesController= controllers.notes;
const decksController= controllers.decks;
const usersController= controllers.users;
const versesQuotesController=controllers.verses_quotes;

var router = express.Router();

router.get('/verses', versesController.findAll);
router.get('/verses/:id', versesController.findById);
router.post('/verses', versesController.create);
router.patch('/verses/:id', versesController.update);
router.delete('/verses/:id',versesController.delete);

router.get('/verse-quotes', versesQuotesController.findAll);
router.get('/verse-quotes/:id', versesQuotesController.findById);
router.post('/verse-quotes', versesQuotesController.create);
router.patch('/verse-quotes/:id', versesQuotesController.update);
router.delete('/verse-quotes/:id',versesQuotesController.delete);


router.get('/sk', searchKeysController.findAll);
router.get('/sk/:id', searchKeysController.findById);
router.post('/sk', searchKeysController.create);
router.patch('/sk/:id', searchKeysController.update);
router.delete('/sk/:id',searchKeysController.delete);


router.get('/notes', notesController.findAll);
router.get('/notes/:id', notesController.findById);
router.post('/notes', notesController.create);
router.patch('/notes/:id', notesController.update);
router.delete('/notes/:id',notesController.delete);

router.get('/decks', decksController.findAll);
router.get('/decks/:id', decksController.findById);
router.post('/decks', decksController.create);
router.patch('/decks/:id', decksController.update);
router.delete('/decks/:id',decksController.delete);

router.get('/users', usersController.findAll);
router.get('/users/:id', usersController.findById);
router.post('/users', usersController.create);
router.patch('/users/:id', usersController.update);
router.delete('/users/:id',usersController.delete);



/* Advance Router */
router.post('/verses/add_sk', versesController.addSk);
router.post('/users/add_deck', usersController.addDeckToUser);
router.post('/decks/add_notes', decksController.addNoteToDeck);
router.post('/decks/add_verses', decksController.addVerseToDeck);





module.exports= router;
