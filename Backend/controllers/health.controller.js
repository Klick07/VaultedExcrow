const healthService = require("../services/health.service");

exports.livenessCheck = async (req, res) => {
    return res.status(200).json({
        status: "UP",
        message: "Server is alive",
        timestamp: new Date()
    });
};

exports.readinessCheck = async (req, res) => {

    const health = await healthService.checkSystemHealth();

    if (!health.database) {
        return res.status(503).json({
            status: "DOWN",
            health
        });
    }

    res.status(200).json({
        status: "READY",
        health
    });
};

exports.metrics = async (req, res) => {

    const metrics = await healthService.getMetrics();

    res.status(200).json({
        success: true,
        metrics
    });
};