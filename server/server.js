const express = require("express");
const app = express();
const { sequelize } = require("./config/dbConnection");
const { taskRouter } = require("./routes/taskRouter");
require("dotenv").config();
const cors = require("cors");
const { userRouter } = require("./routes/userRouter.js");
require("./models/taskModel.js");
require("./models/userModel.js");
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.use("/api", taskRouter);
app.use("/api", userRouter);

// DB connection section
const dbCreate = async () => {
  try {
    await sequelize.sync({ alter: false });
    console.log("Database synced successfully");
  } catch (error) {
    console.log("Error syncing table:", error);
  }
};
dbCreate();

// running the express server
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
