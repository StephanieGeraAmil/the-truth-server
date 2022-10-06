const e = require("express");
const db = require("../sequelize/models");
const { v4: uuidv4 } = require("uuid");
//const note = require("../sequelize/models/note");
const Card = db.Card;
const Note = db.Note;
const Img = db.Img;

const Op = db.sequelize.Op;
// Create and Save a new Card

exports.create = async (req, res) => {
  // Validate request

  if (req.body == undefined) {
    res.status(400).send({
      message: "Content can't be empty!",
    });
    return;
  }

  // Create a Card
  let crd = {
    id: uuidv4(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  if (!req.body.note) {
    crd = { ...crd, note: req.body.note };
  }

  if (!req.body.img) {
    crd = { ...crd, img: req.body.img };
  }

  // Save Card in the database
  Card.create(crd)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Card.",
      });
    });
};
// Retrieve all Cards from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await Card.findAll({
      include: [{ model: Note }, { model: Img }],
      // order: [["name", "ASC"]],
    });
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving Cards.",
    });
  }
};

// Find a single Card with an id
exports.findById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Card.findByPk(id);

    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Can't find Card with id=${id}.`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving Card with id=" + id,
    });
  }
};
// Update a Card by the id in the request

exports.update = async (req, res) => {
  if (req.body == undefined) {
    res.status(409).send({
      message: "Content can't be empty!",
    });
    return;
  }
  if (!req.body.img && !req.body.note) {
    res.status(400).send({
      message: "A Card content to update is required!",
    });
    return;
  }
  const id = req.params.id;
  let updatedCard = {};
  if (req.body.note) updatedCard = { ...updatedCard, note: req.body.note };
  if (req.body.img) updatedCard = { ...updatedCard, img: req.body.img };

  try {
    console.log(updatedCard);
    console.log(id);
    const num = await Card.update(updatedCard, { where: { id: id } });

    console.log(num);
    if (num == 1) {
      res.status(204).send({
        message: "Card was updated successfully!",
      });
    } else {
      res.status(409).send({
        message: `Can't update Card with id=${id}. Maybe Card wasn't found!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Couldn't update Card with id=" + id,
    });
  }
};
// Delete a Card with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const num = await Card.destroy({ where: { id: id } });

    if (num == 1) {
      res.send({
        message: "Card was deleted successfully!",
      });
    } else {
      res.send({
        message: `Can't delete Card with id=${id}. Maybe Card wasn't found!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Couldn't delete Card with id=" + id,
    });
  }
};

exports.get_verses_of_card = async (req, res) => {
  try {
    const id = req.params.id;
    const card = await Card.findByPk(id);
    const verse = await card.getVerses();
    res.send({
      message: verse,
    });
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving verses of cards.",
    });
  }
};
exports.add_card_verse = async (req, res) => {
  try {
    const id = req.params.id;
    if (!req.body.verse) {
      res.status(400).send({
        message: "A verse is required!",
      });
      return;
    }

    const card = await Card.findByPk(id);
    const data = await card.addVerse(req.body.verse);
    res.send({
      message: data,
    });
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving cards of verses.",
    });
  }
};
exports.delete_card_verse = async (req, res) => {
  try {
    const id = req.params.id;
    if (!req.body.verse) {
      res.status(400).send({
        message: "A verse is required!",
      });
      return;
    }

    const card = await Card.findByPk(id);
    const data = await card.removeVerse(req.body.verse);
    res.send({
      message: data,
    });
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving cards of verses.",
    });
  }
};

