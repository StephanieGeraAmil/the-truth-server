"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Verse extends Model {
    static associate({ Tag, Card }) {
      this.belongsToMany(Card, { through: "Cards_Verses" });
      this.belongsToMany(Tag, { through: "Verses_Tags" });
    }
  }
  Verse.init(
    {
      book: DataTypes.STRING,
      chapter: DataTypes.DECIMAL,
      verse_number: DataTypes.DECIMAL,
      version: DataTypes.STRING,
      scripture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Verse",
    }
  );
  return Verse;
};
