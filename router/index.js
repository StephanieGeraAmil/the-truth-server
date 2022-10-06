const express = require('express');
const controllers= require('../controllers');
const versesController= controllers.verses;
const tagsController= controllers.tags;
const notesController= controllers.notes;
const decksController= controllers.decks;
const usersController= controllers.users;
const cardsController= controllers.cards;


var router = express.Router();

router.get('/verses', versesController.findAll);
router.get('/verses/:id', versesController.findById);
router.post('/verses', versesController.create);
router.patch('/verses/:id', versesController.update);
router.delete('/verses/:id',versesController.delete);

router.get('/tags', tagsController.findAll);
router.get('/tags/:id', tagsController.findById);
router.post('/tags', tagsController.create);
router.patch('/tags/:id', tagsController.update);
router.delete('/tags/:id',tagsController.delete);

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

router.get('/cards', cardsController.findAll);
router.get('/cards/:id', cardsController.findById);
router.post('/cards', cardsController.create);
router.patch('/cards/:id', cardsController.update);
router.delete('/cards/:id',cardsController.delete);

router.get('/users', usersController.findAll);
router.get('/users/:id', usersController.findById);
router.post('/users', usersController.create);
router.patch('/users/:id', usersController.update);
router.delete('/users/:id',usersController.delete);



// /* Asociations Routes */
router.get('/get_verses_of_tag/:id', tagsController.get_verses_of_tag);
router.get('/get_tags_of_verse/:id', versesController.get_tags_of_verse);
router.get('/add_tag_verse/:id', tagsController.add_tag_verse);
router.get('/delete_tag_verse/:id', tagsController.delete_tag_verse);

router.get('/get_verses_of_card/:id', cardsController.get_verses_of_card);
router.get('/add_card_verse/:id', cardsController.add_card_verse);
router.get('/delete_card_verse/:id', cardsController.delete_card_verse);

router.get('/get_cards_of_deck/:id', decksController.get_cards_of_deck);
router.get('/add_card_deck/:id', decksController.add_card_deck);
router.get('/delete_card_deck/:id', decksController.delete_card_deck);





module.exports= router;
