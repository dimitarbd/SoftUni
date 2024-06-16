const { Schema, model, Types } = require('mongoose');

//TODO add/change properties depending on exam description

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = model('User', userSchema);

module.exports = { User };

//TODO replace with data model from exam description