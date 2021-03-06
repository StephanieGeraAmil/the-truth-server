const e = require("express");
const db = require("../models");
const Note = db.Notes;
//const Deck = db.Deck;


const Op = db.Sequelize.Op;
// Create and Save a new Note
exports.create = (req, res) => {
             // Validate request
   
                if (req.body==undefined) {
                    res.status(400).send({
                    message: "Content can not be empty!"
                    });
                    return;
                }
               

            // Create a Note
                const note = {
                    note_content: req.body.note_content
                };
                

                // Save Note in the database
                Note.create(note)
                    .then(data => {
                    res.send(data);
                    })
                    .catch(err => {
                    res.status(500).send({
                        message:
                        err.message || "Some error occurred while creating the Note."
                         });
                    });
            

  
};
// Retrieve all Notes from the database.
exports.findAll = async (req, res) => {
  try{
    
      const data = await Note.findAll(
                    // {
                    //         include: [{
                    //           model: Deck,
                    //           as: 'decks'
                    //         }],
                    //         order: [
                    //           ['createdAt', 'DESC'],
                    //           [{model: Deck,as: 'decks'}, 'createdAt', 'DESC'],
                    //         ],
                    //       }

      );
      res.send(data);
    }catch(err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Notes."
      });
    };
};
  

// Find a single Note with an id
exports.findById = async (req, res) => {


      const id = req.params.id;
      try{
          const data= await Note.findByPk(id)
            
          if (data) {
            res.send(data);
          } else {
            res.status(404).send({
              message: `Cannot find Note with id=${id}.`
            });
          }
        
      }catch(err) {
        res.status(500).send({
          message: "Error retrieving Note with id=" + id
        });
      };



  
};
// Update a Note by the id in the request
exports.update = async (req, res) => {
       if (req.body==undefined) {
                    res.status(409).send({
                    message: "Content can not be empty!"
                    });
                    return;
                }
      const id = req.params.id;
      try{
                const num = await Note.update(req.body,{where: { id: id }})
                  
                if (num == 1) {
                  res.status(204).send({
                    message: "Note was updated successfully!"
                  });
                } else {
                  res.status(409).send({
                    message: `Cannot update Note with id=${id}. Maybe Note was not found!`
                  });
                }
          }
          catch(err){
            res.status(500).send({
              message: "Could not update Note with id=" + id
            });
          };
    
};
// Delete a Note with the specified id in the request
exports.delete = async (req, res) => {

  const id = req.params.id;
  try{
          const num = await Note.destroy({where: { id: id }})
            
          if (num == 1) {
            res.send({
              message: "Note was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Note with id=${id}. Maybe Note was not found!`
            });
          }
    }
    catch(err){
      res.status(500).send({
        message: "Could not delete Note with id=" + id
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




