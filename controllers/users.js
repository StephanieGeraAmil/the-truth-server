const e = require("express");
const db = require("../sequelize/models");
const { v4: uuidv4 } = require("uuid");
const User = db.User;
const Deck = db.Deck;

const Op = db.sequelize.Op;
// Create and Save a new User 

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
      message: "A User name is required!",
    });
    return;
  }
  if (!req.body.email) {
    res.status(400).send({
      message: "A User email is required!",
    });
    return;
  }

  // Create a User
  const usr = {
    name: req.body.name,
    email: req.body.email,
    id: uuidv4(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // Save User in the database
  User.create(usr)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};
// Retrieve all Users from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await User.findAll({
      order: [["name", "ASC"]],
    });
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving Users.",
    });
  }
};

// Find a single User with an id
exports.findById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await User.findByPk(id);

    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Can't find User with id=${id}.`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving User with id=" + id,
    });
  }
};
// Update a User by the id in the request

exports.update = async (req, res) => {
  if (req.body == undefined) {
    res.status(409).send({
      message: "Content can't be empty!",
    });
    return;
  }
  if (!req.body.name && !req.body.email) {
    res.status(400).send({
      message: " a new name or email is required!",
    });
    return;
  }
  const id = req.params.id;
  let updatedUser = {};
  if (req.body.name) updatedUser = { ...updatedUser, name: req.body.name };
  if (req.body.email) updatedUser = { ...updatedUser, email: req.body.email };

  try {
    console.log(updatedUser);
    console.log(id);
    const num = await User.update(updatedUser, { where: { id: id } });

    console.log(num);
    if (num == 1) {
      res.status(204).send({
        message: "User was updated successfully!",
      });
    } else {
      res.status(409).send({
        message: `Can't update User with id=${id}. Maybe User wasn't found!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Couldn't update User with id=" + id,
    });
  }
};
// Delete a User with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const num = await User.destroy({ where: { id: id } });

    if (num == 1) {
      res.send({
        message: "User was deleted successfully!",
      });
    } else {
      res.send({
        message: `Can't delete User with id=${id}. Maybe User wasn't found!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Couldn't delete User with id=" + id,
    });
  }
};

// exports.addDeckToUser=async(req,res)=>{

//       // Validate request

//         if (req.body==undefined) {
//             res.status(400).send({
//             message: "Content can't be empty!"
//             });
//             return;
//         }else
//           if(req.body.deck_id==undefined){
//             res.status(400).send({
//             message: "You need to specify the searched deck id"
//             });
//             return;
//           }else if(req.body.user_id==undefined){
//              res.status(400).send({
//             message: "You need to specify the user id"
//             });
//             return;

//         };
//         const deck_id=req.body.deck_id;
//         const user_id=req.body.user_id;

//   try{

//         const usr= await User.findByPk(user_id);
//         if(!usr ){
//           res.status(400).send({
//             message: "There is no user with that id"
//             });
//           return;
//         }
//         const deck= await Deck.findByPk(deck_id);
//         if(!deck ){
//               res.status(400).send({
//                 message: "There is no deck with that id"
//                 });
//               return;
//             }

//         await usr.addDeck(deck);
//            res.status(204).send({
//                     message: "the relationship was saved"
//                   });

//   }catch(err){
//             res.status(500).send({
//               message: "Couldn't add the relationship  "+ err
//             });
//   };

// };
