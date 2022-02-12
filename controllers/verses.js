const db = require("../models");
const Verse = db.Verse;
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
                

                // Save Tutorial in the database
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
exports.findById = (req, res) => {
  
};
// Update a Verse by the id in the request
exports.update = (req, res) => {
  
};
// Delete a Verse with the specified id in the request
exports.delete = (req, res) => {
  
};

