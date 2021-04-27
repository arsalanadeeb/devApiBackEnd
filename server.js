const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');
dotenv.config({ path: './config/config.env' });
//Initialize Express
const app = express();

//process.env to be injected at runtime.
const PORT = process.env.PORT || 6000;
app.listen(PORT, console.log(`running server in ${process.env.NODE_ENV} mode on port ${PORT}`));

//attached logger middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
//Mount router
app.use('/api/v1/bootcamps', bootcamps);

