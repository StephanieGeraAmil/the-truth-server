"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize) => {
  class Card extends Model {
    static associate({ Deck, Verse, Note, Img }) {
     this.belongsTo(Img, { foreignKey: "ImgId"});
     this.belongsTo(Note, { foreignKey: "NoteId"});
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
