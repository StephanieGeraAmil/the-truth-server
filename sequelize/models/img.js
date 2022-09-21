"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Img extends Model {
    static associate({ Card }) {
      this.belongsTo(Card);
    }
  }
  Img.init(
    {
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Img",
    }
  );
  return Img;
};
