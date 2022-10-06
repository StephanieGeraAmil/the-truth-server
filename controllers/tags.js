const e = require("express");
const db = require("../sequelize/models");
const { v4: uuidv4 } = require("uuid");

const Tag = db.Tag;

const Op = db.sequelize.Op;
// Create and Save a new Tag

exports.create = async (req, res) => {
  // Validate request

  if (req.body == undefined) {
    res.status(400).send({
      message: "name can't be empty!",
    });
    return;
  }
  if (!req.body.name) {
    res.status(400).send({
      message: "A Tag name is required!",
    });
    return;
  }

  // Create a Tag
  const tg = {
    name: "If it's good for me, it's a Yes",
    id: uuidv4(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // Save Tag in the database
  Tag.create(tg)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Tag.",
      });
    });
};
// Retrieve all Tags from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await Tag.findAll();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving Tags.",
    });
  }
};

// Find a single Tag with an id
exports.findById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Tag.findByPk(id);

    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Can't find Tag with id=${id}.`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving Tag with id=" + id,
    });
  }
};
// Update a Tag by the id in the request

exports.update = async (req, res) => {
  if (req.body == undefined) {
    res.status(409).send({
      message: "name can't be empty!",
    });
    return;
  }
   if (!req.body.name) {
    res.status(400).send({
      message: "A Tag name is required!",
    });
    return;
  }
  const id = req.params.id;
  let updatedTag = {};
  if (req.body.name) updatedTag = { ...updatedTag, name: req.body.name };
 

  try {
    console.log(updatedTag);
    console.log(id);
    const num = await Tag.update(updatedTag, { where: { id: id } });

    console.log(num);
    if (num == 1) {
      res.status(204).send({
        message: "Tag was updated successfully!",
      });
    } else {
      res.status(409).send({
        message: `Can't update Tag with id=${id}. Maybe Tag wasn't found!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Couldn't update Tag with id=" + id,
    });
  }
};
// Delete a Tag with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const num = await Tag.destroy({ where: { id: id } });

    if (num == 1) {
      res.send({
        message: "Tag was deleted successfully!",
      });
    } else {
      res.send({
        message: `Can't delete Tag with id=${id}. Maybe Tag wasn't found!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Couldn't delete Tag with id=" + id,
    });
  }
};
