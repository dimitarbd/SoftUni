module.exports = {
    createGet: (req, res) => {
        res.render('create');
    },
    createPost: async (req, res) => {
        res.redirect('/');
    }
};