const express = require("express");
const app = express();
const codeRouter = require("./routes/saveCode");
const getRouter = require("./routes/GET/getRequestExample");

app.use(express.json());
app.use("/code", codeRouter);
app.use("/getrequest", getRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
