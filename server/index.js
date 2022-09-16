require('dotenv').config({ path: __dirname + '/../.env'});
require('./../database/index');


const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const homeRouter = require('./api/home');
// const favoritesRouter = require('./api/favorites');

const app = express();
const port = 8000;

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static(`${__dirname}/../public`));

app.use('/home', homeRouter);
// app.use('/favorites', favoritesRouter);


app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
