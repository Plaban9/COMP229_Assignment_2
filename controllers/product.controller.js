let Product = require('../models/product.model');

module.exports.find = async (req, res) =>
{
    if (req.query.name)
    {
        // Get Product by name specified in GET parameter - URL: api/product/?name (contains - perhaps Regex?)
        // DOC - regex: https://www.mongodb.com/docs/manual/reference/operator/query/regex/
        // DOC - find(): https://mongoosejs.com/docs/api/model.html#Model.find()
        try 
        {
            let result = await Product.find({ "name": { $regex: req.query.name, $options: 'i' } });
            res.json(result);
        }
        catch (exception) 
        {
            console.log(exception);
            var emptyJson = {};
            res.json(emptyJson);
        }
    }
    else
    {
        // Get all Products - URL: api/product/
        let result = await Product.find(req.params);
        res.json(result);
    }
}

// Get Product by id - URL: api/product/:id
module.exports.findById = async (req, res) =>
{
    // DOC - findById(): https://mongoosejs.com/docs/api/model.html#Model.findById()

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

module.exports.save = async (req, res) =>
{
    const product = new Product(req.body);
    let result = await product.save();
    res.json(result);
}