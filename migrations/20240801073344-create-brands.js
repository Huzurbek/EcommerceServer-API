"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("brands", {
      brand_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      brand_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      brand_description: {
        type: Sequelize.DataTypes.STRING(500),
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
    await queryInterface.dropTable("brands");
  },
};
