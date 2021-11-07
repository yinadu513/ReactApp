var express = require("express");
var router = express.Router();

import ImgData from "./data/templates.json";

router.get("/", function (req, res, next) {
  res.json({
      data=ImgData
  });
});
module.exports = router;
