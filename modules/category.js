const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Category = sequelize.define(
  "Category",
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
    },
    parent_category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "categories",
        key: "category_id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "categories",
  }
);

Category.associate = (models) => {
  Category.belongsTo(models.SizeCategory, {
    foreignKey: "size_category_id",
    as: "sizeCategory",
  });
  Category.hasMany(models.Category, {
    foreignKey: "parent_category_id",
    as: "subcategories",
  });
  Category.belongsTo(models.Category, {
    foreignKey: "parent_category_id",
    as: "parentCategory",
  });
};

module.exports = Category;
