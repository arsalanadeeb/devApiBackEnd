const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path:'./config/config.env'});
const app= express();
const PORT= process.env.PORT || 6000;
app.listen(PORT,console.log(`running server on port ${PORT}`));
