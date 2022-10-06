const e = require("express");
const db = require("../models");
const Deck = db.Deck;
const Verse = db.Verse;
const Note = db.Notes;



const Op = db.Sequelize.Op;
// Create and Save a new Deck
exports.create = (req, res) => {
             // Validate request
   
                if (req.body==undefined) {
                    res.status(400).send({
                    message: "Content can not be empty!"
                    });
                    return;
                }
               

            // Create a Deck
                const deck = {
                    deck_name_: req.body.deck_name_
                };
                

                // Save Deck in the database
                Deck.create(deck)
                    .then(data => {
                    res.send(data);
                    })
                    .catch(err => {
                    res.status(500).send({
                        message:
                        err.message || "Some error occurred while creating the Deck."
                         });
                    });
            

  
};
// Retrieve all Decks from the database.
exports.findAll = async (req, res) => {
  try{
    
      const data = await Deck.findAll(
            
      );
      res.send(data);
    }catch(err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Decks."
      });
    };
};
  

// Find a single Deck with an id
exports.findById = async (req, res) => {


      const id = req.params.id;
      try{
          const data= await Deck.findByPk(id)
            
          if (data) {
            res.send(data);
          } else {
            res.status(404).send({
              message: `Cannot find Deck with id=${id}.`
            });
          }
        
      }catch(err) {
        res.status(500).send({
          message: "Error retrieving Deck with id=" + id
        });
      };



  
};
// Update a Deck by the id in the request
exports.update = async (req, res) => {
       if (req.body==undefined) {
                    res.status(409).send({
                    message: "Content can not be empty!"
                    });
                    return;
                }
      const id = req.params.id;
      try{
                const num = await Deck.update(req.body,{where: { id: id }})
                  
                if (num == 1) {
                  res.status(204).send({
                    message: "Deck was updated successfully!"
                  });
                } else {
                  res.status(409).send({
                    message: `Cannot update Deck with id=${id}. Maybe Deck was not found!`
                  });
                }
          }
          catch(err){
            res.status(500).send({
              message: "Could not update Deck with id=" + id
            });
          };
    
};
// Delete a Deck with the specified id in the request
exports.delete = async (req, res) => {

  const id = req.params.id;
  try{
          const num = await Deck.destroy({where: { id: id }})
            
          if (num == 1) {
            res.send({
              message: "Deck was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Deck with id=${id}. Maybe Deck was not found!`
            });
          }
    }
    catch(err){
      res.status(500).send({
        message: "Could not delete Deck with id=" + id
      });
    };

  
};

exports.addVerseToDeck=async(req,res)=>{

      // Validate request
   
        if (req.body==undefined) {
            res.status(400).send({
            message: "Content can not be empty!"
            });
            return;
        }else
          if(req.body.verse_id==undefined){
            res.status(400).send({
            message: "You need to specify the verse id"
            });
            return;
          }else if(req.body.deck_id==undefined){
             res.status(400).send({
            message: "You need to specify the deck id"
            });
            return;

        };
        

   
        const deck_id =  req.body.deck_id;
        const verse_id = req.body.verse_id;

  try{
        const verse= await Verse.findByPk(verse_id);

        const deck= await Deck.findByPk(deck_id);
  
        if(!verse ){
          res.status(400).send({
            message: "There is no verse with that id"
            });
          return;
        }
        if(!deck ){
          res.status(400).send({
            message: "There is no deck with that id"
            });
          return;
        }
       
          await deck.addVerse(verse); 
          res.status(204).send({
                    message: "the relationship was saved"
                  });
        
  }catch(err){
            res.status(500).send({
              message: "Could not add the relationship  "+ err 
            });
  };
   
};


exports.addNoteToDeck=async(req,res)=>{

      // Validate request
   
        if (req.body==undefined) {
            res.status(400).send({
            message: "Content can not be empty!"
            });
            return;
        }else
          if(req.body.note_id==undefined){
            res.status(400).send({
            message: "You need to specify the node id"
            });
            return;
          }else if(req.body.deck_id==undefined){
             res.status(400).send({
            message: "You need to specify the deck id"
            });
            return;

        };
        

   
        const deck_id =  req.body.deck_id;
        const note_id = req.body.note_id;

  try{
        const note= await Note.findByPk(note_id);

        const deck= await Deck.findByPk(deck_id);
  
        if(!note ){
          res.status(400).send({
            message: "There is no note with that id"
            });
          return;
        }
        if(!deck ){
          res.status(400).send({
            message: "There is no deck with that id"
            });
          return;
        }
       
          await deck.addNotes(note); 
          res.status(204).send({
                    message: "the relationship was saved"
                  });
        
  }catch(err){
            res.status(500).send({
              message: "Could not add the relationship  "+ err 
            });
  };
   
};



