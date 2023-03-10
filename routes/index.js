const express = require('express');
const app = express();

const api = require('./API');
const htmlRoutes = require('./htmlRoutes');

app.use('/api', api);
app.use('/', htmlRoutes);


