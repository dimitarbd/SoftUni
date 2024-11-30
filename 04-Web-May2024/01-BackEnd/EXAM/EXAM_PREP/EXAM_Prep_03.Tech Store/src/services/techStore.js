const { TechStore } = require('../models/TechStore');

async function getAll() {
    return TechStore.find().lean();
}

async function getById(id) {
    return TechStore.findById(id).lean();
}

async function create(data, authorId) {
    //TODO extract properties from view model
    const record = new TechStore({
        prop: data.prop,
        author: authorId
    });

    await record.save();

    return record;
}

async function update(id, data, userId) {
    const record = await TechStore.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied');
    }

    //TODO replace with real properties
    record.prop = data.prop;

    await record.save();

    return record;
}

async function deleteById(id, userId) {
    const record = await TechStore.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied');
    }

    await TechStore.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    getById,
    update,
    deleteById,
    create
};