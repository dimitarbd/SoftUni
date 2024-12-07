const mongoose = require('mongoose');
require('../models/User');
require('../models/Electronics'); //TODO import real data models

async function configDatabase() {
    //TODO set database name
    const connectionString = 'mongodb://localhost:27017/second-hand-el';

    await mongoose.connect(connectionString);

    console.log('Database connected!');
}

module.exports = { configDatabase };