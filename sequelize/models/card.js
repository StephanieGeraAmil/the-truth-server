"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize) => {
  class Card extends Model {
    static associate({ Deck, Img, Verse, Note }) {
      this.hasMany(Img);
      this.hasMany(Note);
      this.belongsToMany(Deck, { through: "cards_decks" });
      this.belongsToMany(Verse, { through: "cards_verses" });
    
    }
  }
  Card.init(
    {},
    {
      sequelize,
      modelName: "Card",
    }
  );
  return Card;
};
