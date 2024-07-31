const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Color = sequelize.define(
  "Color",
  {
    color_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    color_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "colors",
    timestamps: false,
  }
);

module.exports = Color;
