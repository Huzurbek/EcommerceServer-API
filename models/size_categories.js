"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class size_categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  size_categories.init(
    {
      category_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      category_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "SizeCategory",
      tableName: "size_categories",
      timestamps: false,
    }
  );
  return size_categories;
};
