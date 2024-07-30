const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const SizeCategory = sequelize.define(
  "SizeCategory",
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
    tableName: "size_categories",
    timestamps: false,
  }
);

module.exports = SizeCategory;
