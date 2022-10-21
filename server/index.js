require('dotenv').config({ path: `${__dirname}/../.env`});


const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
const port = 8000;


const homeRouter = require('./api/home');
const focusRouter = require('./api/focus');
const authRouter = require('./api/auth');
const userProfileRouter = require('./api/userProfile');
const catchRouter = require('./api/catch');


app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/api/home', homeRouter);
app.use('/api/focus', focusRouter);
app.use('/api/auth', authRouter);
app.use('/api/userProfile', userProfileRouter);
app.get('*', catchRouter);


app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});

