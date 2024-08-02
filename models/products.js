"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    static associate(models) {
      this.belongsTo(models.Category, {
        foreignKey: "category_id",
        as: "category",
      });
      this.belongsTo(models.Brand, {
        foreignKey: "brand_id",
        as: "brand",
      });
    }
  }
  products.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
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
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "categories",
          key: "category_id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      brand_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "brands",
          key: "brand_id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
    }
  );
  return products;
};
