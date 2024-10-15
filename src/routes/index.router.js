const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index.controller");

router.get("/.netlify/functions/", indexController.index);

module.exports = router;
