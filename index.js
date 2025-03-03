const express = require("express");
const cookieParser = require("cookie-parser");

require("dotenv").config();
const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

const userRouter = require("./routes/userRoutes");

app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.send("Server is up");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
