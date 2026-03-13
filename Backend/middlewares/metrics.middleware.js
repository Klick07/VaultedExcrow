const metrics = require("../utils/metricStore");

module.exports = (req, res, next) => {

    const start = process.hrtime();

    res.on("finish", () => {

        const diff = process.hrtime(start);

        const latency = diff[0] * 1000 + diff[1] / 1e6;

        metrics.totalRequests++;

        metrics.totalLatency += latency;

        metrics.latencySamples.push(latency);

        metrics.requestTimestamps.push(Date.now());

        if (res.statusCode >= 400) {
            metrics.totalErrors++;
        }

        if (metrics.latencySamples.length > 100) {
            metrics.latencySamples.shift();
        }

        if (metrics.requestTimestamps.length > 1000) {
            metrics.requestTimestamps.shift();
        }

    });

    next();
};