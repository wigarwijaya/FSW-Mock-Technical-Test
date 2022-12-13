require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const todoItemRoutes = require("./routes/todoItems");
const userRoutes = require("./routes/users");

//express app
const app = express();

port = process.env.PORT;
//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/todolist", todoItemRoutes);
app.use("/api/user", userRoutes);

//connect to db
mongoose
  .set("strictQuery", true)
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for request
    app.listen(port, () => {
      console.log(`connected to db & listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
