'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SearchKey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      SearchKey.belongsToMany(models.Verse, {
        through: 'SearchKeyVerses',
        as: 'verses',
        foreignKey: 'searched_key_id'
      });
    }
  }
  SearchKey.init({
    searched_key: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SearchKey',
  });
  return SearchKey;
};