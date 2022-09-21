"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    static associate({ Card }) {
      this.belongsTo(Card);
    }
  }
  Note.init(
    {
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Note",
    }
  );
  return Note;
};
