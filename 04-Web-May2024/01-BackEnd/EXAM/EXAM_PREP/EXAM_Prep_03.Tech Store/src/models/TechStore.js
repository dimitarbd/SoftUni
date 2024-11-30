const { Schema, model, Types } = require('mongoose');

//TODO replace with data model from exam description

const techStoreSchema = new Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    hardDisk: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    author: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const TechStore = model('TechStore', techStoreSchema);

module.exports = { TechStore };
