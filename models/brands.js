"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class brands extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  brands.init(
    {
      brand_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      brand_name: { type: DataTypes.STRING, allowNull: false, unique: true },
      brand_description: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Brand",
      tableName: "brands",
    }
  );
  return brands;
};
