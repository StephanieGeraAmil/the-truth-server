'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      User.hasMany(models.Deck,{
            foreignKey: 'user_id',
            as: 'deck'
         });
    }
  }
  User.init({
    user_name_: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};