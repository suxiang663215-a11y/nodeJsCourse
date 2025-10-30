const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // parse incoming JSON to object
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const bcrypt = require("bcryptjs");

const myFunction = async () => {
  const password = "Red12345!";
  const hashedPassword = await bcrypt.hash(password, 8);

  console.log("Password:", password);
  console.log("Hashed Password:", hashedPassword);

  const isMatch = await bcrypt.compare("Red12345!", hashedPassword);
  console.log("Is Match:", isMatch);
};

myFunction();
