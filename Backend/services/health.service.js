const healthRepo = require("../repositories/health.repository");
const systemMetrics = require("../utils/systemMetrics");

exports.checkSystemHealth = async () => {

    const db = await healthRepo.checkDatabase();

    const memory = systemMetrics.memoryUsage();

    const cpu = systemMetrics.cpuUsage();

    const uptime = systemMetrics.uptime();

    return {
        database: db,
        memory,
        cpu,
        uptime
    };
};

exports.getMetrics = async () => {

    const memory = systemMetrics.memoryUsage();

    const cpu = systemMetrics.cpuUsage();

    const uptime = systemMetrics.uptime();

    return {
        memory,
        cpu,
        uptime
    };
};