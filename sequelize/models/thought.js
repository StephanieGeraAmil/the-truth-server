"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize) => {
  class Thought extends Model {
    static associate({ Tag}) {

      this.belongsToMany(Tag, { through: "Thoughts_Tag" });
  
    
    }
  }
  Thought.init(
    {},
    {
      sequelize,
      modelName: "Thought",
    }
  );
  return Thought;
};
