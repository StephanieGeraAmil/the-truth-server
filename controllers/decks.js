const e = require("express");
const db = require("../sequelize/models");
const { v4: uuidv4 } = require("uuid");
const User = db.User;
const Deck = db.Deck;

const Op = db.sequelize.Op;
// Create and Save a new Deck

exports.create = async (req, res) => {
  // Validate request

  if (req.body == undefined) {
    res.status(400).send({
      message: "Content can't be empty!",
    });
    return;
  }
   if (!req.body.name) {
    res.status(400).send({
      message: "A Deck name is required!",
    });
    return;
  }
   if (!req.body.UserId) {
    res.status(400).send({
      message: "A Deck UserId is required!",
    });
    return;
  }

  // Create a Deck
  const dk = {
    name: req.body.name,
    UserId: req.body.UserId,
    id: uuidv4(), 
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // Save Deck in the database
  Deck.create(dk)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Deck.",
      });
    });
};
// Retrieve all Decks from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await Deck.findAll({
      include: { model: User},
      order: [["name", "ASC"]],
    });
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving Decks.",
    }); 
  }
};

// Find a single Deck with an id
exports.findById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Deck.findByPk(id);

    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Can't find Deck with id=${id}.`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving Deck with id=" + id,
    });
  }
};
// Update a Deck by the id in the request

exports.update = async (req, res) => {
  if (req.body == undefined) {
    res.status(409).send({
      message: "Content can't be empty!",
    });
    return;
  }

   if ((!req.body.name) && (!req.body.UserId)){
    res.status(400).send({
      message: " a new name or UserId is required!",
    });
    return;
  }
   
  const id = req.params.id;
  let updatedDeck = {};
  if (req.body.name) updatedDeck = { "name": req.body.name };
  if (req.body.UserId) updatedDeck = { "userId": req.body.UserId };
  

  try {
    console.log(updatedDeck);
       console.log(id);
    const num = await Deck.update(updatedDeck, { where: { id: id } });

    console.log(num);
    if (num == 1) {
      res.status(204).send({
        message: "Deck was updated successfully!",
      });
    } else {
      res.status(409).send({
        message: `Can't update Deck with id=${id}. Maybe Deck wasn't found!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Couldn't update Deck with id=" + id,
    });
  }
};
// Delete a Deck with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const num = await Deck.destroy({ where: { id: id } });

    if (num == 1) {
      res.send({
        message: "Deck was deleted successfully!",
      });
    } else {
      res.send({
        message: `Can't delete Deck with id=${id}. Maybe Deck wasn't found!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Couldn't delete Deck with id=" + id,
    });
  }
};

exports.get_cards_of_deck = async (req, res) => {
  try {
    const id = req.params.id;
    const deck = await Deck.findByPk(id);
    const cards= await deck.getCards();
    res.send(cards);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving cards of deck.",
    });
  }
};

exports.add_card_deck = async (req, res) => {
  try {
    const id = req.params.id;
    if (!req.body.card) {
      res.status(400).send({
        message: "A card is required!",
      });
      return;
    }

    const deck = await Deck.findByPk(id);
    const data = await deck.addCards(req.body.card);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving cards of decks.",
    });
  }
};
exports.delete_card_deck = async (req, res) => {
  try {
    const id = req.params.id;
    if (!req.body.card) {
      res.status(400).send({
        message: "A card is required!",
      });
      return;
    }

    const deck = await Deck.findByPk(id);
    const data = await deck.removeCards(req.body.card);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving cards of decks.",
    });
  }
};
