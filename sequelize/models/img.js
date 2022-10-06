"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Img extends Model {
    static associate({ Card }) {
          this.hasMany(Card, { foreignKey: "id"}
      //  this.hasMany(Card
      //               // ,{ foreignKey: {
      //               //                 name: 'image',
      //               //                 allowNull: true
      //               //                  },
      //               //        constraints: false
      //               //   }
                );
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
