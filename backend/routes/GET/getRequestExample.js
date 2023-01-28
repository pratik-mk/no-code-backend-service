const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("get request hit !!!");
  try {
    // Execute code
    const { exec } = require("child_process");
    exec("node ./routes/GET/codes/testCode.js", (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      // Return output
      res.send({ output: stdout });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error executing code" });
  }
});

module.exports = router;
