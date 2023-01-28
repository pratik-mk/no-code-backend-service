const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/save-code", async (req, res) => {
  try {
    const { code } = req.body;
    // Write code to file
    await fs.promises.writeFile("./routes/GET/codes/testCode.js", code);
    res.status(200).send({ message: "File saved successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error executing code" });
  }
});

module.exports = router;
