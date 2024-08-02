"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "colors",
      [
        { color_name: "Jet Black" },
        { color_name: "Snow White" },
        { color_name: "Crimson Red" },
        { color_name: "Royal Blue" },
        { color_name: "Emerald Green" },
        { color_name: "Sunset Orange" },
        { color_name: "Sunflower Yellow" },
        { color_name: "Amethyst Purple" },
        { color_name: "Chocolate Brown" },
        { color_name: "Slate Gray" },
        { color_name: "Blush Pink" },
        { color_name: "Coral Reef" },
        { color_name: "Navy Blue" },
        { color_name: "Olive Green" },
        { color_name: "Mint Green" },
        { color_name: "Champagne Gold" },
        { color_name: "Silver Metallic" },
        { color_name: "Peach" },
        { color_name: "Turquoise" },
        { color_name: "Lavender" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("colors", null, {});
  },
};
