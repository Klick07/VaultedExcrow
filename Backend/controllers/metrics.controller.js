const metricsService = require("../services/metrics.service");

exports.getObservability = async (req, res) => {

    const metrics = metricsService.getObservabilityMetrics();

    res.status(200).json({
        success: true,
        metrics
    });
};