"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ Deck, Img, Verse, Note }) {
      this.hasMany(Img);
      this.hasMany(Verse);
      this.hasMany(Note);
      this.belongsToMany(Deck, { through: "cards_decks" });
    }
  }
  Card.init(
    {
     
    },
    {
      sequelize,
      modelName: "Card",
    }
  );
  return Card;
};
