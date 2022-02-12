'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DecksNotes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DecksNotes.init({
    note_id: DataTypes.INTEGER,
    deck_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DecksNotes',
  });
  return DecksNotes;
};