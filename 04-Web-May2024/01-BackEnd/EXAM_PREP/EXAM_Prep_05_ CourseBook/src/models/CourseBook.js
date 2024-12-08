const { Schema, model, Types } = require('mongoose');

//TODO replace with data model from exam description

const courseSchema = new Schema({
    prop: {
        type: String,
        required: true,
    },
    author: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Course = model('Course', courseSchema);

module.exports = { Course };
