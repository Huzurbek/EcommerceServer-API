"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const subcategories = await queryInterface.sequelize.query(
      `SELECT category_id, category_name FROM categories WHERE category_name IN ('Женская одежда', 'Мужская одежда', 'Мужская обувь', 'Женская обувь', 'Офисная техника', 'Смартфоны и телефоны');`,
      { type: Sequelize.QueryTypes.SELECT }
    );
    const subcategoryMap = subcategories.reduce((map, category) => {
      map[category.category_name] = category.category_id;
      return map;
    }, {});
    const brands = await queryInterface.sequelize.query(
      `SELECT brand_id, brand_name FROM brands;`,
      { type: Sequelize.QueryTypes.SELECT }
    );
    const brandMap = brands.reduce((map, brand) => {
      map[brand.brand_name] = brand.brand_id;
      return map;
    }, {});
    await queryInterface.bulkInsert(
      "products",
      [
        {
          product_name: "iPhone 14 Pro Max",
          product_description:
            "The latest flagship with advanced camera features and powerful performance.",
          care_instructions: "some instructions",
          category_id: subcategoryMap["Смартфоны и телефоны"],
          brand_id: brandMap["Apple"],
        },
        {
          product_name: "Galaxy S23 Ultra",
          product_description:
            "Samsung s top-tier smartphone with a large display and advanced camera system.",
          care_instructions: "some instructions",
          category_id: subcategoryMap["Смартфоны и телефоны"],
          brand_id: brandMap["Samsung"],
        },
        {
          product_name: "Nike Air Max T-Shirt",
          product_description:
            "A comfortable, sporty tee featuring the iconic Air Max logo.",
          care_instructions: "some instructions",
          category_id: subcategoryMap["Мужская одежда"],
          brand_id: brandMap["Nike"],
        },
        {
          product_name: "Calvin Klein Logo Sweatshirt",
          product_description:
            "A modern sweatshirt featuring the iconic Calvin Klein logo.",
          care_instructions: "some instructions",
          category_id: subcategoryMap["Мужская одежда"],
          brand_id: brandMap["Calvin Klein"],
        },
        {
          product_name: "Calvin Klein Leather Sneakers",
          product_description:
            "Minimalist sneakers made from high-quality leather.",
          care_instructions: "some instructions",
          category_id: subcategoryMap["Мужская обувь"],
          brand_id: brandMap["Calvin Klein"],
        },
        {
          product_name: "Knoll Generation Chair",
          product_description:
            "The Generation Chair by Knoll is a flexible and ergonomic office chair designed to support various postures throughout the day.",
          care_instructions: "some instructions",
          category_id: subcategoryMap["Офисная техника"],
          brand_id: brandMap["Knoll"],
        },
        {
          product_name: "Adidas Ultraboost 21 Women's Running Shoes",
          product_description:
            "These running shoes feature responsive Boost cushioning and a Primeknit+ upper that adapts to the shape of your foot, providing unparalleled comfort and support for long-distance runs.",
          care_instructions: "some instructions",
          category_id: subcategoryMap["Женская обувь"],
          brand_id: brandMap["Adidas"],
        },
        {
          product_name: "H&M Ribbed Turtleneck Sweater",
          product_description:
            "This cozy turtleneck sweater is made from a soft, ribbed knit that provides warmth and style. Pair it with jeans or skirts for a chic, layered look.",
          care_instructions: "some instructions",
          category_id: subcategoryMap["Женская одежда"],
          brand_id: brandMap["H&M"],
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
