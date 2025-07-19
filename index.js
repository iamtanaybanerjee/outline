const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");
require("pg");
const userRouter = require("./routes/user.route");
const taskRouter = require("./routes/task.route");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/user", taskRouter);

sequelize
  .authenticate()
  .then(() => console.log("DB connected"))
  .catch((error) => console.log("Error connecting the DB"));

app.listen(3000, () => {
  console.log("Server is listening to port 3000");
});
