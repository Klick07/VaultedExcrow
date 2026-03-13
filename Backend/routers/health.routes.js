const router = require("express").Router();
const healthController = require("../controllers/health.controller");

router.get("/live", healthController.livenessCheck);

router.get("/ready", healthController.readinessCheck);

router.get("/metrics", healthController.metrics);

module.exports = router;