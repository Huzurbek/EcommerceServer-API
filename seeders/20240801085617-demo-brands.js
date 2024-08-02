"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "brands",
      [
        {
          brand_name: "Nike",
          brand_description:
            "Nike is a global leader in athletic apparel and footwear, known for its innovative designs and sportswear.",
        },
        {
          brand_name: "Adidas",
          brand_description:
            "Adidas is a renowned brand offering a wide range of sports and casual clothing, footwear, and accessories.",
        },
        {
          brand_name: "Zara",
          brand_description:
            "Zara is a fast fashion retailer known for its trendy and affordable clothing collections for men, women, and children.",
        },
        {
          brand_name: "H&M",
          brand_description:
            "H&M offers fashionable and sustainable clothing at affordable prices, catering to a wide audience.",
        },
        {
          brand_name: "Gucci",
          brand_description:
            "Gucci is a luxury fashion brand known for its high-end clothing, accessories, and leather goods.",
        },
        {
          brand_name: "Louis Vuitton",
          brand_description:
            "Louis Vuitton is a prestigious brand offering luxury fashion items, including clothing, bags, and accessories.",
        },

        {
          brand_name: "Uniqlo",
          brand_description:
            "Uniqlo is a Japanese retailer known for its high-quality, minimalist clothing and casual wear.",
        },
        {
          brand_name: "Ralph Lauren",
          brand_description:
            "Ralph Lauren is an iconic American brand offering preppy and classic clothing styles for men, women, and children.",
        },
        {
          brand_name: "Calvin Klein",
          brand_description:
            "Calvin Klein is known for its modern and minimalist designs in clothing, underwear, and accessories.",
        },
        {
          brand_name: "Apple",
          brand_description:
            "Apple is known for its innovative iPhones, which combine sleek design with powerful performance and a seamless ecosystem.",
        },

        {
          brand_name: "Samsung",
          brand_description:
            "Samsung offers a wide range of smartphones, from budget to flagship models, known for their cutting-edge technology and display quality.",
        },

        {
          brand_name: "Huawei",
          brand_description:
            "Huawei provides high-performance smartphones with advanced camera systems and strong hardware capabilities.",
        },
        {
          brand_name: "Xiaomi",
          brand_description:
            "Xiaomi offers affordable smartphones with high-end features, making technology accessible to a broader audience.",
        },
        {
          brand_name: "OnePlus",
          brand_description:
            "OnePlus is known for its premium smartphones that deliver fast performance and a smooth user experience.",
        },

        {
          brand_name: "Google",
          brand_description:
            "Google produces the Pixel series, known for their excellent camera quality and pure Android experience.",
        },
        {
          brand_name: "Oppo",
          brand_description:
            "Oppo is recognized for its innovative camera technology and stylish smartphone designs.",
        },
        {
          brand_name: "Sony",
          brand_description:
            "Sony smartphones are known for their high-resolution displays, superior audio quality, and camera performance.",
        },
        {
          brand_name: "LG",
          brand_description:
            "LG offers a variety of smartphones with unique features like dual screens and innovative designs.",
        },
        {
          brand_name: "Motorola",
          brand_description:
            "Motorola provides reliable smartphones with a good balance of performance, features, and affordability.",
        },

        {
          brand_name: "Herman Miller",
          brand_description:
            "Herman Miller is renowned for its ergonomic and innovative office furniture, including the iconic Aeron chair.",
        },
        {
          brand_name: "Steelcase",
          brand_description:
            "Steelcase offers a wide range of office furniture solutions focused on enhancing productivity and comfort in the workplace.",
        },
        {
          brand_name: "Haworth",
          brand_description:
            "Haworth provides high-quality, sustainable office furniture designed to create adaptable and efficient workspaces.",
        },

        {
          brand_name: "Knoll",
          brand_description:
            "Knoll is known for its modern and stylish office furniture, blending design with functionality and comfort.",
        },
        {
          brand_name: "HON",
          brand_description:
            "HON offers durable and affordable office furniture solutions, including desks, chairs, and storage options for various office needs.",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("brands", null, {});
  },
};
