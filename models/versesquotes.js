'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VersesQuotes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VersesQuotes.init({
    quote: DataTypes.STRING,
    reference: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'VersesQuotes',
  });
  return VersesQuotes;
};