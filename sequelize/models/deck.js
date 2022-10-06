"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    static associate({ User, Card }) {
      this.belongsTo(User, { foreignKey: "UserId"}
      );
      this.belongsToMany(Card, { through: "cards_decks" });
       
    }
  }
  Deck.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Deck",
    }
  );
  return Deck;
};