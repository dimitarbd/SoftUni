const { Electronics } = require('../models/Electronics');

//TODO replace with real data service accordin to exam description

async function getAll() {
    return Electronics.find().lean();
} 

async function getById(id) {
    return Electronics.findById(id).lean();
}

async function create(data, authorId) {
    const record = new Electronics({
        name: data.name,
        type: data.type,
        damages: data.damages,
        image: data.image,
        description: data.description,
        production: data.production,
        exploitation: data.exploitation,
        price: data.price,
        author: authorId
    });

    await record.save();

    return record;
}

async function update(id, data, userId) {
    const record = await Electronics.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied');
    }

    record.name = data.name;
    record.type = data.type;
    record.damages = data.damages;
    record.image = data.image;
    record.description = data.description;
    record.production = data.production;
    record.exploitation = data.exploitation;
    record.price = data.price;

    await record.save();

    return record;
}

async function deleteById(id, userId) {
    const record = await Electronics.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied');
    }

    await Electronics.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    getById,
    update,
    deleteById,
    create
};