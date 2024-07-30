const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Product = sequelize.define(
  "product",
  {
    product_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "categories",
        key: "category_id",
      },
      onDelete: "SET NULL",
    },
    brand_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "brands",
        key: "brand_id",
      },
      onDelete: "SET NULL",
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_description: {
      type: DataTypes.TEXT,
    },
    care_instructions: {
      type: DataTypes.TEXT,
    },
    about: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "products",
  }
);

Product.associate = (models) => {
  Product.belongsTo(models.Category, {
    foreignKey: "category_id",
    as: "category",
  });
  Product.belongsTo(models.Brand, {
    foreignKey: "brand_id",
    as: "brand",
  });
};
module.exports = Product;
