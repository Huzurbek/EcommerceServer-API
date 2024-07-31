const { sequelize, models } = require("./modules");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await models.SizeCategory.bulkCreate([
      { category_name: "Men Clothing" },
      { category_name: "Women Clothing" },
      { category_name: "Baby-Boy Clothing" },
      { category_name: "Baby-Girl Clothing" },
      { category_name: "Men Shoes" },
      { category_name: "Women Shoes" },
      { category_name: "Baby-Boy Shoes" },
      { category_name: "Baby-Girl Shoes" },
    ]);
    console.log("Database seeded!");
  } catch (error) {
    console.log("Error seeding database:", error);
  } finally {
    await sequelize.close();
  }
};
seedDatabase();
