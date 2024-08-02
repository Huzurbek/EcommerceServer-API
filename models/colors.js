"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class colors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  colors.init(
    {
      color_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      color_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Color",
      tableName: "colors",
      timestamps: false,
    }
  );
  return colors;
};
