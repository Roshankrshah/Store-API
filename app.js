require('dotenv').config()

const express = require('express');
const app = express();

const errorMiddleware = require('./middleware/error-handler');
const notfoundMiddleware = require('./middleware/not-found');

app.use(express.json());