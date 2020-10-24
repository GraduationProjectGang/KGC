const express = require('express');
const fs = require('fs');

const key = require('./key');

const router = express.Router();

router.use('/key', key);

