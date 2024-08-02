"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "size_categories",
      [
        {
          category_name: "Men Clothing",
        },
        {
          category_name: "Women Clothing",
        },
        {
          category_name: "Baby Clothing",
        },
        {
          category_name: "Men Shoes",
        },
        {
          category_name: "Women Shoes",
        },
        {
          category_name: "Baby Shoes",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("size_categories", null, {});
  },
};
