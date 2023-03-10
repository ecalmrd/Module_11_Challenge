const express = require('express');

//routes folder
const api = require('./routes/API');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001
const app = express();

//middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', api);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
