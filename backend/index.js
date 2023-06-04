const express = require("express");
const app = express();
const codeRouter = require("./routes/saveCode");
const getRouter = require("./routes/GET/getRequestExample");

// Add a middleware to include the CORS headers
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());
app.use("/code", codeRouter);
app.use("/getrequest", getRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
