'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeckVerses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DeckVerses.init({
    verse_id: DataTypes.INTEGER,
    deck_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DeckVerses',
  });
  return DeckVerses;
};