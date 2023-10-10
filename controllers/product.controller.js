let Product = require('../models/product.model');

module.exports.save = async (req, res) =>
{
    const product = new Product(req.body);
    let result = await product.save();
    res.json(result);
}

module.exports.find = async (req, res) =>
{
    console.log(req.params);
    try 
    {
        let result = await Product.find({ "_id": req.params.id });
        res.json(result);
    }
    catch (exception) 
    {
        console.log(exception);
        var emptyJson = {};
        res.json(emptyJson);
    }
}

module.exports.update = async (req, res) =>
{
    console.log(req.params);
    try 
    {
        let result = await Product.findByIdAndUpdate({ "_id": req.params.id });
        res.json(result);
    }
    catch (exception) 
    {
        console.log(exception);
        var emptyJson = {};
        res.json(emptyJson);
    }
}

module.exports.findAll = async (req, res) =>
{
    console.log(req.params);
    let result = await Product.find(req.params);
    res.json(result);
}