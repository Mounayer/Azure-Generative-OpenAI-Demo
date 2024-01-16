const express = require("express");
const router = express.Router();

router.get("/", require("./HealthTest"));
router.get("/generatepage", require("./GeneratePage"));
router.post("/generateelement", require("./GenerateElement"));
router.post("/chat", require("./Chat"));

// To create an additional api, simply copy the structure of one of the existing ones
// And change the prompts to what you want your generative AI model to do!

module.exports = router;
