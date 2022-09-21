'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        Deck.belongsToMany(models.Verse, {
        through: 'DecksVerses',
        as: 'verses',
        foreignKey: 'deck_id'
      });
        Deck.belongsToMany(models.Notes, {
        through: 'DecksNotes',
        as: 'notes',
        foreignKey: 'deck_id'
      });

         Deck.belongsTo(models.User
          ,{
            foreignKey: 'user_id'
             ,as: 'user'
         }
         );
    }
  }
  Deck.init({
    deck_name_: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Deck',
  });
  return Deck;
};

