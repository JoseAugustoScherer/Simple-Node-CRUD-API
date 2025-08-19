const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routers/product.route.js");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from API");
});

mongoose
  .connect(
    "mongodb+srv://<user>:<password>@<appName>.hewefsi.mongodb.net/Node-API?retryWrites=true&w=majority&appName=<appName>"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Connection failed!");
    console.error("------------------");
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
  });
