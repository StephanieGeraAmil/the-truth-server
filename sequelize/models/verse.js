"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Verse extends Model {
    static associate({ Tag, Card }) {
      this.belongsTo(Card);
      this.belongsToMany(Tag, { through: "verses_tags" });
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
