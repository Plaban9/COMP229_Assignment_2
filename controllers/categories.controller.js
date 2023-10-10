let Categories = require('../models/categories.model');

module.exports.save = async (req, res) => {
    const categories = new Categories(req.body);
    let result = await categories.save();
    res.json(result)
}

module.exports.find = async (req, res) => {
    let result = await Categories.find(req.params)
    res.json(result)
}