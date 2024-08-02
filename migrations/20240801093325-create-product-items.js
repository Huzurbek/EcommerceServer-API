"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("product_items", {
      product_item_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      product_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "products",
          key: "product_id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      color_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "colors",
          key: "color_id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      original_price: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 0,
      },
      sale_price: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 0,
      },
      product_code: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
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
    await queryInterface.dropTable("product_items");
  },
};
