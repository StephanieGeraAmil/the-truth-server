const e = require("express");
const db = require("../sequelize/models");
const User = db.User;
const Deck = db.Deck;

const Op = db.sequelize.Op;
// Create and Save a new User

exports.create = (req, res) => {
  // Validate request
  console.log(req.body)
  if (req.body == undefined) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a User
  const usr = {
    name: req.body.name,
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
    const data = await User
      .findAll (
     {
      order: [
        ["name", "ASC"]
      ],
    }
     );
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
        message: `Cannot find User with id=${id}.`,
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
      message: "Content can not be empty!",
    });
    return;
  }
  const id = req.params.id;

  const updatedUser = {};
  if (req.body.name) updatedUser = { ...updatedUser, name: req.body.name };
  if (req.body.email) updatedUser = { ...updatedUser, email: req.body.email };

  try {
    const num = await User.update(updatedUser, { where: { id: id } });

    if (num == 1) {
      res.status(204).send({
        message: "User was updated successfully!",
      });
    } else {
      res.status(409).send({
        message: `Cannot update User with id=${id}. Maybe User was not found!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Could not update User with id=" + id,
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
        message: `Cannot delete User with id=${id}. Maybe User was not found!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Could not delete User with id=" + id,
    });
  }
};

// exports.addDeckToUser=async(req,res)=>{

//       // Validate request

//         if (req.body==undefined) {
//             res.status(400).send({
//             message: "Content can not be empty!"
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
//               message: "Could not add the relationship  "+ err
//             });
//   };

// };
