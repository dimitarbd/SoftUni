module.exports = {
    registerGet: (req, res) => {
        res.render('register');
    },
    registerPost: (req, res) => {
        const { email, password, repass } = req.body;
        
        try {
            if (!email || !password) {
                throw new Error ('Passwords don\'t match');
            }
        } catch(err) {
            res.render('register', { error: err.message });
        }

        res.redirect('/register');

    }

};