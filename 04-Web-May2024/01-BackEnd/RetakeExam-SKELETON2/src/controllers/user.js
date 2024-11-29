const { Router } = require('express');

const { isGuest } = require('../middlewares/guards');

const userRouter = Router();