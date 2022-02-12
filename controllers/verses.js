const e = require("express");
const db = require("../models");
const Verse = db.Verse;
const SearchKeys = db.SearchKey;


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
                const verse = {
                    book: req.body.book,
                    chapter: req.body.chapter,
                    number: req.body.number
                };
                

                // Save Verse in the database
                Verse.create(verse)
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
    
      const data = await Verse.findAll();
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
          const data= await Verse.findByPk(id)
            
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
                const num = await Verse.update(req.body,{where: { id: id }})
                  
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
          const num = await Verse.destroy({where: { id: id }})
            
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

exports.addSk=async(req,res)=>{

  //the body will contain the verse id and the search key id
      // Validate request
   
        if (req.body==undefined) {
            res.status(400).send({
            message: "Content can not be empty!"
            });
            return;
        }else
          if(req.body.searched_key_id==undefined){
            res.status(400).send({
            message: "You need to specify the searched key id"
            });
            return;
          }else if(req.body.verse_id==undefined){
             res.status(400).send({
            message: "You need to specify the verse id"
            });
            return;

        };
        

    // Search Key
        const sk_id =  req.body.searched_key_id;
    //verse id
        const verse_id = req.body.verse_id;

  try{
        const verse= await Verse.findByPk(verse_id);

        const key= await SearchKeys.findByPk(sk_id);
  
        if(!verse ){
          res.status(400).send({
            message: "There is no verse with that id"
            });
          return;
        }
        if(!key ){
          res.status(400).send({
            message: "There is no key with that id"
            });
          return;
        }
       
          await key.addVerse(verse); 
          res.status(204).send({
                    message: "the relationship was saved"
                  });
        
  }catch(err){
            res.status(500).send({
              message: "Could not add the relationship  "+ err 
            });
  };
   
};




