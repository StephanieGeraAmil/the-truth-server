"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize) => {
  class Card extends Model {
    static associate({ Deck, Verse, Note, Img }) {
     this.belongsTo(Img, { foreignKey: "ImgId"});
     this.belongsTo(Note, { foreignKey: "NoteId"});
      this.belongsToMany(Deck, { through: "Cards_Decks" });
      this.belongsToMany(Verse, { through: "Cards_Verses" });
    
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
