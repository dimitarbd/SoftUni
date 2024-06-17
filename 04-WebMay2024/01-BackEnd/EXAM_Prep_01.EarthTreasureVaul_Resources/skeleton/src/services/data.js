const { Data } = require('../models/Data');

//TODO replace with real data service accordin to exam description

async function getAll() {
    return Data.find().lean();
} 

async function getById(id) {
    return Data.findById(id).lean();
}

async function create(data, authorId) {
    //TODO extract properties from view model
    const record = new Data({
        prop: data.prop,
        author: authorId
    });

    await record.save();

    return record;
}

async function update() {
    
}