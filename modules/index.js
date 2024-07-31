const sequelize = require("../db");
const SizeCategory = require("./sizeCategory");
const Category = require("./category");
const Brand = require("./brand");
const Product = require("./product");
const Color = require("./color");
const ProductItem = require("./productItem");
const ProductImage = require("./productImage");

const models = {
  SizeCategory,
  Category,
  Brand,
  Product,
  Color,
  ProductItem,
  ProductImage,
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = { sequelize, models };
