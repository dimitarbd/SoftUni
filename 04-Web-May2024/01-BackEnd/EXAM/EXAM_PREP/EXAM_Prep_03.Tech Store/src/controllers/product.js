const { Router } = require('express');

const { getById } = require('../services/techStore');

const productRouter = Router();

module.exports = { productRouter }
