const sequelize = require("../db");
const SizeCategory = require("./sizeCategory");
const Category = require("./category");
const Brand = require("./brand");
const Product = require("./product");

const models = {
  SizeCategory,
  Category,
  Brand,
  Product,
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = { sequelize, models };
