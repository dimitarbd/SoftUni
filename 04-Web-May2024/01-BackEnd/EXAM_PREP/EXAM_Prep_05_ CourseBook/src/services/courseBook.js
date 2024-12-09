const { CourseBook } = require('../models/CourseBook');

//TODO replace with real data service accordin to exam description

async function getAll() {
    return CourseBook.find().lean();
} 

async function getRecent() {
    return CourseBook.find().sort({ $natural: -1 }).limit(3).lean();
}

async function getByAuthorId(authorId) {
    return CourseBook.find({ owner:authorId }).lean();
}

async function getMySignUpList(userId) {
    return CourseBook.find({ signUpList: userId }).lean();
}

async function getById(id) {
    return CourseBook.findById(id).lean();
}

async function create(data, authorId) {
    //TODO extract properties from view model
    const record = new CourseBook({
        prop: data.prop,
        author: authorId
    });

    await record.save();

    return record;
}

async function update(id, data, userId) {
    const record = await CourseBook.findById(id);

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
    const record = await CourseBook.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied');
    }

    await Data.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    getById,
    update,
    deleteById,
    create,
    getRecent,
    getByAuthorId,
    getMySignUpList
};