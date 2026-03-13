const os = require("os");

exports.memoryUsage = () => {

    const total = os.totalmem();
    const free = os.freemem();

    return {
        total,
        free,
        used: total - free
    };
};

exports.cpuUsage = () => {

    const cpus = os.cpus();

    return {
        cores: cpus.length,
        model: cpus[0].model,
        speed: cpus[0].speed
    };
};

exports.uptime = () => {

    return {
        systemUptime: os.uptime(),
        processUptime: process.uptime()
    };
};