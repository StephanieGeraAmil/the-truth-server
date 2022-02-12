const db = require("../models");

const SearchKeys = db.SearchKey;
const Op = db.Sequelize.Op;
// Create and Save a new SearchKey
exports.create = (req, res) => {
             // Validate request
   
                if (req.body==undefined) {
                    res.status(400).send({
                    message: "Content can not be empty!"
                    });
                    return;
                }
               

            // Create a SearchKey
                const sk = {
                    searched_key: req.body.searched_key
                  
                };
                

                // Save SearchKey in the database
                SearchKeys.create(sk)
                    .then(data => {
                    res.send(data);
                    })
                    .catch(err => {
                    res.status(500).send({
                        message:
                        err.message || "Some error occurred while creating the SearchKeys."
                         });
                    });
            

  
};
// Retrieve all SearchKey from the database.
exports.findAll = async (req, res) => {
  try{
    
      const data = await SearchKeys.findAll();
      res.send(data);
    }catch(err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving SearchKeys."
      });
    };
};
  

// Find a single SearchKey with an id
exports.findById = async (req, res) => {


      const id = req.params.id;
      try{
          const data= await SearchKeys.findByPk(id)
            
          if (data) {
            res.send(data);
          } else {
            res.status(404).send({
              message: `Cannot find SearchKeys with id=${id}.`
            });
          }
        
      }catch(err) {
        res.status(500).send({
          message: "Error retrieving SearchKeys with id=" + id
        });
      };



  
};
// Update a SearchKey by the id in the request
exports.update = async (req, res) => {
       if (req.body==undefined) {
                    res.status(409).send({
                    message: "Content can not be empty!"
                    });
                    return;
                }
      const id = req.params.id;
      try{
                const num = await SearchKeys.update(req.body,{where: { id: id }})
                  
                if (num == 1) {
                  res.status(204).send({
                    message: "SearchKeys was updated successfully!"
                  });
                } else {
                  res.status(409).send({
                    message: `Cannot update SearchKeys with id=${id}. Maybe SearchKeys was not found!`
                  });
                }
          }
          catch(err){
            res.status(500).send({
              message: "Could not update SearchKeys with id=" + id
            });
          };
    
};
// Delete a SearchKey with the specified id in the request
exports.delete = async (req, res) => {

  const id = req.params.id;
  try{
          const num = await SearchKeys.destroy({where: { id: id }})
            
          if (num == 1) {
            res.send({
              message: "SearchKeys was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete SearchKeys with id=${id}. Maybe SearchKeys was not found!`
            });
          }
    }
    catch(err){
      res.status(500).send({
        message: "Could not delete SearchKeys with id=" + id
      });
    };

  
};

