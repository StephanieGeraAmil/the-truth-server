const e = require("express");
const db = require("../models");
const VerseQuote = db.VersesQuotes;



const Op = db.Sequelize.Op;
// Create and Save a new Verse
exports.create = (req, res) => {
             // Validate request
   
                if (req.body==undefined) {
                    res.status(400).send({
                    message: "Content can not be empty!"
                    });
                    return;
                }
               

            // Create a Verse
                const verse_quote = {
                    quote: req.body.quote,
                    reference: req.body.reference
                };
                

                // Save Verse in the database
                VerseQuote.create(verse_quote)
                    .then(data => {
                    res.send(data);
                    })
                    .catch(err => {
                    res.status(500).send({
                        message:
                        err.message || "Some error occurred while creating the Verse."
                         });
                    });
            

  
};
// Retrieve all Verses from the database.
exports.findAll = async (req, res) => {
  try{
   
    
      const data = await VerseQuote.findAll( );
      res.send(data);
    }catch(err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving verses."
      });
    };
};
  

// Find a single Verse with an id
exports.findById = async (req, res) => {


      const id = req.params.id;
      try{
          const data= await VerseQuote.findByPk(id)
            
          if (data) {
            res.send(data);
          } else {
            res.status(404).send({
              message: `Cannot find Verse with id=${id}.`
            });
          }
        
      }catch(err) {
        res.status(500).send({
          message: "Error retrieving Verse with id=" + id
        });
      };



  
};
// Update a Verse by the id in the request
exports.update = async (req, res) => {
       if (req.body==undefined) {
                    res.status(409).send({
                    message: "Content can not be empty!"
                    });
                    return;
                }
      const id = req.params.id;
      try{
                const num = await VerseQuote.update(req.body,{where: { id: id }})
                  
                if (num == 1) {
                  res.status(204).send({
                    message: "Verse was updated successfully!"
                  });
                } else {
                  res.status(409).send({
                    message: `Cannot update Verse with id=${id}. Maybe Verse was not found!`
                  });
                }
          }
          catch(err){
            res.status(500).send({
              message: "Could not update Verse with id=" + id
            });
          };
    
};
// Delete a Verse with the specified id in the request
exports.delete = async (req, res) => {

  const id = req.params.id;
  try{
          const num = await VerseQuote.destroy({where: { id: id }})
            
          if (num == 1) {
            res.send({
              message: "Verse was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Verse with id=${id}. Maybe Verse was not found!`
            });
          }
    }
    catch(err){
      res.status(500).send({
        message: "Could not delete Verse with id=" + id
      });
    };

  
};


