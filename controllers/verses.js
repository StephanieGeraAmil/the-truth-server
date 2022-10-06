const e = require("express");
const db = require("../sequelize/models");
const { v4: uuidv4 } = require("uuid");

const Verse = db.Verse;

const Op = db.sequelize.Op;
// Create and Save a new Verse

exports.create = async (req, res) => {
  // Validate request

  if (req.body == undefined) {
    res.status(400).send({
      message: "scripture can't be empty!",
    });
    return;
  }
  if (
    !req.body.scripture ||
    !req.body.book ||
    !req.body.chapter ||
    !req.body.verse_number ||
    !req.body.version
  ) {
    res.status(400).send({
      message:
        "A Verse scripture, book, chapter, verse number and version are required!",
    });
    return;
  }

  // Create a Verse
  const vs = {
    scripture: req.body.scripture,
    book: req.body.book,
    chapter: req.body.chapter,
    verse_number: req.body.verse_number,
    version: req.body.version,
    id: uuidv4(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // Save Verse in the database
  Verse.create(vs)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Verse.",
      });
    });
};
// Retrieve all Verses from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await Verse.findAll();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving Verses.",
    });
  }
};

// Find a single Verse with an id
exports.findById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Verse.findByPk(id);

    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Can't find Verse with id=${id}.`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving Verse with id=" + id,
    });
  }
};
// Update a Verse by the id in the request

exports.update = async (req, res) => {
  if (req.body == undefined) {
    res.status(409).send({
      message: "scripture can't be empty!",
    });
    return;
  }
  if (
    !req.body.scripture ||
    !req.body.book ||
    !req.body.chapter ||
    !req.body.verse_number ||
    !req.body.version
  ) {
    res.status(400).send({
      message:
        "A Verse scripture, book, chapter, verse number and version are required!",
    });
    return;
  }
  const id = req.params.id;
  let //updatedVerse = {};
  updatedVerse={
   // ...updatedVerse,
    scripture: req.body.scripture,
    book: req.body.book,
    chapter: req.body.chapter,
    verse_number: req.body.verse_number,
    version: req.body.version,
  };

  try {
    console.log(updatedVerse);
    console.log(id);
    const num = await Verse.update(updatedVerse, { where: { id: id } });

    console.log(num);
    if (num == 1) {
      res.status(204).send({
        message: "Verse was updated successfully!",
      });
    } else {
      res.status(409).send({
        message: `Can't update Verse with id=${id}. Maybe Verse wasn't found!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Couldn't update Verse with id=" + id,
    });
  }
};
// Delete a Verse with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const num = await Verse.destroy({ where: { id: id } });

    if (num == 1) {
      res.send({
        message: "Verse was deleted successfully!",
      });
    } else {
      res.send({
        message: `Can't delete Verse with id=${id}. Maybe Verse wasn't found!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Couldn't delete Verse with id=" + id,
    });
  }
};
