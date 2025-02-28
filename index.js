const express = require("express");
const cookieParser = require("cookie-parser");

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Server is up");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
