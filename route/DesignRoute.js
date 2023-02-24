const express = require("express");
const { getDesign } = require("../Controller/DesignController");
const Design = require("../models/DesignSchema");

const router = express.Router();

router.route("/design").get(getDesign);

module.exports = router;