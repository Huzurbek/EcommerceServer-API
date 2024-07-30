require("dotenv").config();
const express = require("express");
const { sequelize } = require("./modules");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
// app.use("/api", router);

app.use(errorHandler);

app.get("/", (req, res) => {
  res.status(200).json({ message: "WORKING" });
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
