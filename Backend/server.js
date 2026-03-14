require('dotenv').config();
const express = require('express');
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");
const aiRoutes = require("./routers/ai.routes");

const healthRoutes = require("./routers/health.routes");
const metricsRoutes = require("./routers/metrics.routes");
const authRout = require('./routers/auth.rout');

const metricsMiddleware = require("./middlewares/metrics.middleware");


const app = express();
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:5173', // Your frontend origin
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 100
});

app.use(express.json());
app.use(morgan("dev"));
app.use(limiter);


app.use(metricsMiddleware);


app.use("/ai", aiRoutes);
app.use('/user', authRout);
app.use("/metrics", metricsRoutes);
app.use("/health", healthRoutes);


app.use(require('./middlewares/error.middleware'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}...`);
});