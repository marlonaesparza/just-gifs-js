require('dotenv').config({ path: `${__dirname}/../.env`});


const express = require('express');
const path = require('path');
const app = express();
const port = 8000;


const homeRouter = require('./api/home');
const catchRouter = require('./api/catch');


app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/api/home', homeRouter);
app.get('*', catchRouter);


app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
