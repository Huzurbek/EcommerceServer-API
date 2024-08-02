"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      product_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      product_description: {
        type: Sequelize.DataTypes.TEXT,
      },
      care_instructions: {
        type: Sequelize.DataTypes.TEXT,
      },
      about: {
        type: Sequelize.DataTypes.TEXT,
      },
      category_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "categories",
          key: "category_id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      brand_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "brands",
          key: "brand_id",
        },
        onDelete: "SET NULL",
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
    await queryInterface.dropTable("products");
  },
};
