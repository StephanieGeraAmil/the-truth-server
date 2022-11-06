"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize) => {
  class Card_Deck extends Model {
    static associate() {
   

    
    }
  }
  Card_Deck.init(
    {},
    {
      sequelize,
      modelName: "Cards_Decks",
    }
  );
  return Card_Deck;
};
