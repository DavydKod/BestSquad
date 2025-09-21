const express = require("express");
const router = express.Router();
const testController = require("../controllers/testController");

router.post("/", testController.createTest);
router.get("/", testController.getAllTests);
router.get("/:id", testController.getTestById);

module.exports = router;
