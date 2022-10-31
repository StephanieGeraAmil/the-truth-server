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
router.get('/users/:param', usersController.findByParameter);
//router.get('/users/:email', usersController.findByEmail);
router.post('/users', usersController.create);
router.patch('/users/:id', usersController.update);
router.delete('/users/:id',usersController.delete);

//export const fetchUserByEmail=(user)=>axios.get(`${users_url}/${user.email}`, user);

// /* Asociations Routes */
router.get('/deck_user/:id', decksController.getDecksOfUser);
router.get('/verse_tag/:id', tagsController.get_verses_of_tag);
router.get('/tag_verse/:id', versesController.get_tags_of_verse);
router.patch('/verse_tag/:id', tagsController.add_tag_verse);
router.delete('/verse_tag/:id', tagsController.delete_tag_verse);

router.get('/verse_card/:id', cardsController.get_verses_of_card);
router.patch('/verse_card/:id', cardsController.add_card_verse);
router.delete('/verse_card/:id', cardsController.delete_card_verse);

router.get('/card_deck/:id', decksController.get_cards_of_deck);
router.post('/card_deck/:id', cardsController.add_card_deck);
router.delete('/card_deck/:id', cardsController.delete_card_deck);

router.get('/card_note/:id', cardsController.get_cards_of_note);
router.post('/card_note/:id', cardsController.add_card_note);
router.delete('/card_note/:id', cardsController.delete_card_note);





module.exports= router;
