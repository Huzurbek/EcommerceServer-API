"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product_items extends Model {
    static associate(models) {
      this.belongsTo(models.Product, {
        foreignKey: "product_id",
        as: "product",
      });
      this.belongsTo(models.Color, {
        foreignKey: "color_id",
        as: "color",
      });
    }
  }
  product_items.init(
    {
      product_item_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "products",
          key: "product_id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      color_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "colors",
          key: "color_id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      original_price: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      sale_price: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      product_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "ProductItem",
      tableName: "product_items",
    }
  );
  return product_items;
};
