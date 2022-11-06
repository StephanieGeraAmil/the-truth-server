"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize) => {
  class Verse_Tag extends Model {
    static associate() {
 
    
    }
  }
  Verse_Tag.init(
    {},
    {
      sequelize,
      modelName: "Verse_Tag",
    }
  );
  return Verse_Tag;
};
