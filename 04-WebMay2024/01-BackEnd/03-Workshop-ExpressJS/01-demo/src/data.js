function dataControler(req, res) {
    res.json ({
        message: 'hello',
        value: 5,
        count: req.count
    });
}

module.exports = { dataControler };