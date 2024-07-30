const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Brand = sequelize.define(
  "Brand",
  {
    brand_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    brand_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand_description: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  },
  { tableName: "brands" }
);

module.exports = Brand;
