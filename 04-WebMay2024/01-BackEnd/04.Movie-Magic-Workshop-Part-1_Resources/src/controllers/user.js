module.exports = {
    registerGet: (req, res) => {
        res.render('register');
    },
    registerPost: (req, res) => {
        const { email, password, repass } = req.body;
        
        try {

        } catch {
            
        }

        res.redirect('/register');

    }

};