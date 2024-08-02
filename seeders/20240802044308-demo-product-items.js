"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const colors = await queryInterface.sequelize.query(
      `SELECT color_id, color_name FROM colors;`,
      {
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    const colorMap = colors.reduce((map, color) => {
      map[color.color_name] = color.color_id;
      return map;
    }, {});

    const products = await queryInterface.sequelize.query(
      `SELECT product_id, product_name FROM products;`,
      { type: Sequelize.QueryTypes.SELECT }
    );
    const productMap = products.reduce((map, product) => {
      map[product.product_name] = product.product_id;
      return map;
    }, {});

    await queryInterface.bulkInsert(
      "product_items",
      [
        {
          product_id: productMap["iPhone 14 Pro Max"],
          color_id: colorMap["Silver Metallic"],
          original_price: 2500,
          sale_price: 2200,
          product_code: "P001",
          createdAt: "2024-07-31 10:00:00",
          updatedAt: "2024-07-31 10:00:00",
        },
        {
          product_id: productMap["Galaxy S23 Ultra"],
          color_id: colorMap["Chocolate Brown"],
          original_price: 1800,
          sale_price: 1500,
          product_code: "P002",
          createdAt: "2024-07-31 10:00:00",
          updatedAt: "2024-07-31 10:00:00",
        },
        {
          product_id: productMap["Nike Air Max T-Shirt"],
          color_id: colorMap["Navy Blue"],
          original_price: 99,
          sale_price: 45,
          product_code: "P003",
          createdAt: "2024-07-31 10:00:00",
          updatedAt: "2024-07-31 10:00:00",
        },
        {
          product_id: productMap["Calvin Klein Logo Sweatshirt"],
          color_id: colorMap["Turquoise"],
          original_price: 100,
          sale_price: 75,
          product_code: "P004",
          createdAt: "2024-07-31 10:00:00",
          updatedAt: "2024-07-31 10:00:00",
        },
        {
          product_id: productMap["Calvin Klein Leather Sneakers"],
          color_id: colorMap["Jet Black"],
          original_price: 300,
          sale_price: 180,
          product_code: "P005",
          createdAt: "2024-07-31 10:00:00",
          updatedAt: "2024-07-31 10:00:00",
        },

        {
          product_id: productMap["Knoll Generation Chair"],
          color_id: colorMap["Chocolate Brown"],
          original_price: 1200,
          sale_price: 500,
          product_code: "P005",
          createdAt: "2024-07-31 10:00:00",
          updatedAt: "2024-07-31 10:00:00",
        },
        {
          product_id: productMap["Adidas Ultraboost 21 Women's Running Shoes"],
          color_id: colorMap["Blush Pink"],
          original_price: 200,
          sale_price: 80,
          product_code: "P005",
          createdAt: "2024-07-31 10:00:00",
          updatedAt: "2024-07-31 10:00:00",
        },
        {
          product_id: productMap["H&M Ribbed Turtleneck Sweater"],
          color_id: colorMap["Champagne Gold"],
          original_price: 100,
          sale_price: 80,
          product_code: "P005",
          createdAt: "2024-07-31 10:00:00",
          updatedAt: "2024-07-31 10:00:00",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product_items", null, {});
  },
};
