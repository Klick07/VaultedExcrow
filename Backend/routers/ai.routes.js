const router = require("express").Router();
const aiController = require("../controllers/ai.controller");

router.post("/ask", aiController.askAI);

module.exports = router;