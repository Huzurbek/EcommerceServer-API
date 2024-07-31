const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const ProductItem = sequelize.define(
  "ProductItem",
  {
    product_item_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "products",
        key: "product_id",
      },
      onDelete: "CASCADE",
    },
    color_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "colors",
        key: "color_id",
      },
      onDelete: "SET NULL",
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
  { tableName: "product_items" }
);
ProductItem.associate = (models) => {
  ProductItem.belongsTo(models.Product, {
    foreignKey: "product_id",
    as: "product",
  });
  ProductItem.belongsTo(models.Color, {
    foreignKey: "color_id",
    as: "color",
  });
};

module.exports = ProductItem;
