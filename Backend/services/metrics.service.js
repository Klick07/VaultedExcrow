const metrics = require("../utils/metricStore");

exports.getObservabilityMetrics = () => {

    const now = Date.now();

    const lastMinuteRequests = metrics.requestTimestamps.filter(
        t => now - t < 60000
    ).length;

    const avgLatency =
        metrics.latencySamples.reduce((a, b) => a + b, 0) /
        (metrics.latencySamples.length || 1);

    const errorRate =
        (metrics.totalErrors / (metrics.totalRequests || 1)) * 100;

    return {
        throughput: lastMinuteRequests / 60,
        avgLatency: avgLatency.toFixed(2),
        errorRate: errorRate.toFixed(2),
        totalRequests: metrics.totalRequests,
        totalErrors: metrics.totalErrors
    };
};