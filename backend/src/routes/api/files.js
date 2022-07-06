const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.files);
  res.status(200).send("OK!");
});

module.exports = router;
