const { Schema, model, Types } = require('mongoose');

const electronicsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    damages: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    production: {
        type: Number,
        required: true,
    },
    exploitation: {
        type: Number,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    buyingList: {
        type: [Types.ObjectId],
        required: true,
        default: [],
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Electronics = model('Electronics', electronicsSchema);

module.exports = { Electronics };
