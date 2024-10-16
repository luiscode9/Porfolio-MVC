const express = require("express");
const router = express.Router();
const formController = require("../controllers/form.controller");

router.post("/", formController.send);

module.exports = router;
