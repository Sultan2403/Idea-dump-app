const express = require("express");
const router = express.Router();
const getText = require("../Controllers/audioToText");

router.post("/", getText);

module.exports = router;
