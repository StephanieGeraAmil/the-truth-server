'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Verse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Verse.belongsToMany(models.SearchKey, {
        through: 'SearchKeyVerses',
        as: 'search_keys',
        foreignKey: 'verse_id'
      });
      Verse.belongsToMany(models.Decks, {
        through: 'DeckVerses',
        as: 'decks',
        foreignKey: 'verse_id'
      });
    }
  }
  Verse.init({
    book: DataTypes.STRING,
    chapter: DataTypes.DECIMAL,
    number: DataTypes.DECIMAL,
    
  }, {
    sequelize,
    modelName: 'Verse',
  });
  return Verse;
};