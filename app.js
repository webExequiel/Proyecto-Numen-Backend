const express = require('express');
const logger = require('morgan');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(logger('dev'));
app.use(cors());

const indexRouter = require('./routers/index');
const apiRouter = require('./routers/api');
const {connect} = require('./db/db');



//(http://localhost:8080) URL (/) URN
app.use('/', indexRouter);
app.use('/api', apiRouter);
connect();

module.exports = app;
