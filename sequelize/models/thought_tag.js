"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize) => {
  class Thought_Tag extends Model {
    static associate() {

    
    }
  }
  Thought_Tag.init(
    {},
    {
      sequelize,
      modelName: "Thought_Tag",
    }
  );
  return Thought_Tag;
};
