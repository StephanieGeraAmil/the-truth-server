const e = require("express");
const db = require("../sequelize/models");
const { v4: uuidv4 } = require("uuid");

const Note = db.Note;

const Op = db.sequelize.Op;
// Create and Save a new Note

exports.create = async (req, res) => {
  // Validate request

  if (req.body == undefined) {
    res.status(400).send({
      message: "Content can't be empty!",
    });
    return;
  }
  if (!req.body.content) {
    res.status(400).send({
      message: "A Note content is required!",
    });
    return;
  }

  // Create a Note
  const nt = {
    content: "If it's good for me, it's a Yes",
    id: uuidv4(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // Save Note in the database
  Note.create(nt)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Note.",
      });
    });
};
// Retrieve all Notes from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await Note.findAll();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving Notes.",
    });
  }
};

// Find a single Note with an id
exports.findById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Note.findByPk(id);

    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Can't find Note with id=${id}.`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving Note with id=" + id,
    });
  }
};
// Update a Note by the id in the request

exports.update = async (req, res) => {
  if (req.body == undefined) {
    res.status(409).send({
      message: "Content can't be empty!",
    });
    return;
  }
   if (!req.body.content) {
    res.status(400).send({
      message: "A Note content is required!",
    });
    return;
  }
  const id = req.params.id;
  let updatedNote = {};
  if (req.body.content) updatedNote = { ...updatedNote, content: req.body.content };
 

  try {
    console.log(updatedNote);
    console.log(id);
    const num = await Note.update(updatedNote, { where: { id: id } });

    console.log(num);
    if (num == 1) {
      res.status(204).send({
        message: "Note was updated successfully!",
      });
    } else {
      res.status(409).send({
        message: `Can't update Note with id=${id}. Maybe Note wasn't found!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Couldn't update Note with id=" + id,
    });
  }
};
// Delete a Note with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const num = await Note.destroy({ where: { id: id } });

    if (num == 1) {
      res.send({
        message: "Note was deleted successfully!",
      });
    } else {
      res.send({
        message: `Can't delete Note with id=${id}. Maybe Note wasn't found!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Couldn't delete Note with id=" + id,
    });
  }
};
