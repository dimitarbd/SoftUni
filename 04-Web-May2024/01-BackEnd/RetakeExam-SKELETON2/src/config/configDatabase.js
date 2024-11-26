const mongoose = require('mongoose');
//TODO import models

async function configDatabase() {
    //TODO set database name
    const connectionString = 'mongodb://localhost:27017/exam-db';

    await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifieldTopology:true
    });
}

module.exports = { configDatabase };