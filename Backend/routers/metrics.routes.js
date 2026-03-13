const router = require("express").Router();
const metricsController = require("../controllers/metrics.controller");

router.get("/observability", metricsController.getObservability);

module.exports = router;