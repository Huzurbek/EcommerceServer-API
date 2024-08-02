"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    static associate(models) {
      this.belongsTo(models.SizeCategory, {
        foreignKey: "size_category_id",
        as: "sizeCategory",
      });
      this.hasMany(models.Category, {
        foreignKey: "parent_category_id",
        as: "subcategories",
      });
      this.belongsTo(models.Category, {
        foreignKey: "parent_category_id",
        as: "parentCategory",
      });
    }
  }
  categories.init(
    {
      category_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      category_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category_description: {
        type: DataTypes.TEXT,
      },
      category_img: {
        type: DataTypes.STRING,
      },
      size_category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "size_categories",
          key: "category_id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      parent_category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "categories",
          key: "category_id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Category",
      tableName: "categories",
    }
  );
  return categories;
};
