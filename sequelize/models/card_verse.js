"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize) => {
  class Card_Verse extends Model {
    static associate() {
 
    
    }
  }
  Card_Verse.init(
    {},
    {
      sequelize,
      modelName: "Card_Verse",
    }
  );
  return Card_Verse;
};
