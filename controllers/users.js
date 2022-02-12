const e = require("express");
const db = require("../models");
const User = db.User;



const Op = db.Sequelize.Op;
// Create and Save a new User
exports.create = (req, res) => {
             // Validate request
   
                if (req.body==undefined) {
                    res.status(400).send({
                    message: "Content can not be empty!"
                    });
                    return;
                }
               

            // Create a User
                const usr = {
                    user_name_: req.body.user_name_
                };
                

                // Save User in the database
                User.create(usr)
                    .then(data => {
                    res.send(data);
                    })
                    .catch(err => {
                    res.status(500).send({
                        message:
                        err.message || "Some error occurred while creating the User."
                         });
                    });
            

  
};
// Retrieve all Users from the database.
exports.findAll = async (req, res) => {
  try{
    
      const data = await User.findAll(
                    // {
                    //         include: [{
                    //           model: User,
                    //           as: 'Users'
                    //         }],
                    //         order: [
                    //           ['createdAt', 'DESC'],
                    //           [{model: User,as: 'Users'}, 'createdAt', 'DESC'],
                    //         ],
                    //       }

      );
      res.send(data);
    }catch(err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    };
};
  

// Find a single User with an id
exports.findById = async (req, res) => {


      const id = req.params.id;
      try{
          const data= await User.findByPk(id)
            
          if (data) {
            res.send(data);
          } else {
            res.status(404).send({
              message: `Cannot find User with id=${id}.`
            });
          }
        
      }catch(err) {
        res.status(500).send({
          message: "Error retrieving User with id=" + id
        });
      };



  
};
// Update a User by the id in the request
exports.update = async (req, res) => {
       if (req.body==undefined) {
                    res.status(409).send({
                    message: "Content can not be empty!"
                    });
                    return;
                }
      const id = req.params.id;
      try{
                const num = await User.update(req.body,{where: { id: id }})
                  
                if (num == 1) {
                  res.status(204).send({
                    message: "User was updated successfully!"
                  });
                } else {
                  res.status(409).send({
                    message: `Cannot update User with id=${id}. Maybe User was not found!`
                  });
                }
          }
          catch(err){
            res.status(500).send({
              message: "Could not update User with id=" + id
            });
          };
    
};
// Delete a User with the specified id in the request
exports.delete = async (req, res) => {

  const id = req.params.id;
  try{
          const num = await User.destroy({where: { id: id }})
            
          if (num == 1) {
            res.send({
              message: "User was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete User with id=${id}. Maybe User was not found!`
            });
          }
    }
    catch(err){
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    };

  
};

// exports.addSk=async(req,res)=>{

//   //the body will contain the verse id and the search key id
//       // Validate request
   
//         if (req.body==undefined) {
//             res.status(400).send({
//             message: "Content can not be empty!"
//             });
//             return;
//         }else
//           if(req.body.searched_key_id==undefined){
//             res.status(400).send({
//             message: "You need to specify the searched key id"
//             });
//             return;
//           }else if(req.body.verse_id==undefined){
//              res.status(400).send({
//             message: "You need to specify the verse id"
//             });
//             return;

//         };
        

//     // Search Key
//         const sk_id =  req.body.searched_key_id;
//     //verse id
//         const verse_id = req.body.verse_id;

//   try{
//         const verse= await Verse.findByPk(verse_id);

//         const key= await SearchKeys.findByPk(sk_id);
  
//         if(!verse ){
//           res.status(400).send({
//             message: "There is no verse with that id"
//             });
//           return;
//         }
//         if(!key ){
//           res.status(400).send({
//             message: "There is no key with that id"
//             });
//           return;
//         }
       
//           await key.addVerse(verse); 
//           res.status(204).send({
//                     message: "the relationship was saved"
//                   });
        
//   }catch(err){
//             res.status(500).send({
//               message: "Could not add the relationship  "+ err 
//             });
//   };
   
// };




