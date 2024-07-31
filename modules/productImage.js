const { type } = require("os");
const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const ProductImage = sequelize.define(
  "ProductImage",
  {
    image_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    product_item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product_items",
        key: "product_item_id",
      },
      onDelete: "CASCADE",
    },
    image_filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "product_images", timestamps: false }
);
ProductImage.accociate = (models) => {
  ProductImage.belongsTo(models.ProductItem, {
    foreignKey: "product_item_id",
    as: "productItem",
  });
};

module.exports = ProductImage;
