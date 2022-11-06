"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate({ Verse,Thought }) {
            this.belongsToMany(Verse, { through: "Verses_Tags" });
            this.belongsToMany(Thought, { through: "Thoughts_Tag" });
      

    }
  }
  Tag.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tag",
    }
  );
  return Tag;
};
