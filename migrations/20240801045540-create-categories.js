"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("categories", {
      category_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      category_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      category_description: {
        type: Sequelize.DataTypes.TEXT,
      },
      category_img: {
        type: Sequelize.DataTypes.STRING,
      },
      size_category_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "size_categories",
          key: "category_id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      parent_category_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "categories",
          key: "category_id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("categories");
  },
};
