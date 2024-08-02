"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          category_name: "Одежда",
          category_description: "Root Category",
          category_img: "default.png",
        },
        {
          category_name: "Обувь",
          category_description: "Root Category",
          category_img: "default.png",
        },
        {
          category_name: "Электроника",
          category_description: "Root Category",
          category_img: "default.png",
        },
      ],
      {}
    );
    const categories = await queryInterface.sequelize.query(
      `SELECT category_id, category_name FROM categories WHERE category_name IN ('Одежда', 'Обувь', 'Электроника' );`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const categoryMap = categories.reduce((map, category) => {
      map[category.category_name] = category.category_id;
      return map;
    }, {});

    await queryInterface.bulkInsert(
      "categories",
      [
        {
          category_name: "Женская одежда",
          category_description: "Subcategory",
          category_img: "default.png",
          parent_category_id: categoryMap["Одежда"],
        },
        {
          category_name: "Мужская одежда",
          category_description: "Subcategory",
          category_img: "default.png",
          parent_category_id: categoryMap["Одежда"],
        },
        {
          category_name: "Мужская обувь",
          category_description: "Subcategory",
          category_img: "default.png",
          parent_category_id: categoryMap["Обувь"],
        },
        {
          category_name: "Женская обувь",
          category_description: "Subcategory",
          category_img: "default.png",
          parent_category_id: categoryMap["Обувь"],
        },
        {
          category_name: "Офисная техника",
          category_description: "Subcategory",
          category_img: "default.png",
          parent_category_id: categoryMap["Электроника"],
        },
        {
          category_name: "Смартфоны и телефоны",
          category_description: "Subcategory",
          category_img: "default.png",
          parent_category_id: categoryMap["Электроника"],
        },
      ],
      {}
    );
    // Fetch the inserted subcategory IDs
    const subcategories = await queryInterface.sequelize.query(
      `SELECT category_id, category_name FROM categories WHERE category_name IN ('Женская одежда', 'Мужская одежда', 'Мужская обувь', 'Женская обувь', 'Офисная техника', 'Смартфоны и телефоны');`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const subcategoryMap = subcategories.reduce((map, category) => {
      map[category.category_name] = category.category_id;
      return map;
    }, {});

    const sizecategories = await queryInterface.sequelize.query(
      `SELECT category_id, category_name FROM size_categories;`,
      {
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    const sizeCategoryMap = sizecategories.reduce((map, size) => {
      map[size.category_name] = size.category_id;
      return map;
    }, {});

    await queryInterface.bulkInsert(
      "categories",
      [
        {
          category_name: "Джинсы",
          category_description: "Sub-Subcategory",
          category_img: "default.png",
          parent_category_id: subcategoryMap["Женская одежда"],
          size_category_id: sizeCategoryMap["Women Clothing"],
        },
        {
          category_name: "Домашняя одежда",
          category_description: "Sub-Subcategory",
          category_img: "default.png",
          parent_category_id: subcategoryMap["Женская одежда"],
          size_category_id: sizeCategoryMap["Women Clothing"],
        },
        {
          category_name: "Рубашки",
          category_description: "Sub-Subcategory",
          category_img: "default.png",
          parent_category_id: subcategoryMap["Мужская одежда"],
          size_category_id: sizeCategoryMap["Men Clothing"],
        },
        {
          category_name: "Футболки и поло",
          category_description: "Sub-Subcategory",
          category_img: "default.png",
          parent_category_id: subcategoryMap["Мужская одежда"],
          size_category_id: sizeCategoryMap["Men Clothing"],
        },
        {
          category_name: "Балетки",
          category_description: "Sub-Subcategory",
          category_img: "default.png",
          parent_category_id: subcategoryMap["Женская обувь"],
          size_category_id: sizeCategoryMap["Women Shoes"],
        },
        {
          category_name: "Босоножки",
          category_description: "Sub-Subcategory",
          category_img: "default.png",
          parent_category_id: subcategoryMap["Женская обувь"],
          size_category_id: sizeCategoryMap["Women Shoes"],
        },
        {
          category_name: "Ботинки",
          category_description: "Sub-Subcategory",
          category_img: "default.png",
          parent_category_id: subcategoryMap["Мужская обувь"],
          size_category_id: sizeCategoryMap["Men Shoes"],
        },
        {
          category_name: "Кроссовки и кеды",
          category_description: "Sub-Subcategory",
          category_img: "default.png",
          parent_category_id: subcategoryMap["Мужская обувь"],
          size_category_id: sizeCategoryMap["Men Shoes"],
        },
        {
          category_name: "Офисное оборудование",
          category_description: "Sub-Subcategory",
          category_img: "default.png",
          parent_category_id: subcategoryMap["Офисная техника"],
        },
        {
          category_name: "Аксессуары и уход за офисной техникой",
          category_description: "Sub-Subcategory",
          category_img: "default.png",
          parent_category_id: subcategoryMap["Офисная техника"],
        },
        {
          category_name: "Смартфоны",
          category_description: "Sub-Subcategory",
          category_img: "default.png",
          parent_category_id: subcategoryMap["Смартфоны и телефоны"],
        },
        {
          category_name: "Кнопочные телефоны",
          category_description: "Sub-Subcategory",
          category_img: "default.png",
          parent_category_id: subcategoryMap["Смартфоны и телефоны"],
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
