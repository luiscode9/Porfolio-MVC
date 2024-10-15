const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index.controller");
const formController = require("../controllers/form.controller");

router.get("/", indexController.index);
router.post("/send", formController.send);

module.exports = router;
