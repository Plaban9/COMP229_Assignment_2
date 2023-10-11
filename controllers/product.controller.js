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
            // console.log(exception);
            var emptyJson = {};
            res.json(emptyJson);
        }
    }
    else
    {
        // Get all Products - URL: api/product/ empty JSON for All
        var emptyJson = {};
        let result = await Product.find(emptyJson);
        res.json(result);
    }
}

// Get Product by id - URL: api/product/:id
module.exports.findById = async (req, res) =>
{
    // DOC - findById(): https://mongoosejs.com/docs/api/model.html#Model.findById()
    try 
    {
        let result = await Product.findById(req.params.id);
        res.json(result);
    }
    catch (exception) 
    {
        // console.log(exception);
        var emptyJson = {};
        res.json(emptyJson);
    }
}

module.exports.create = async (req, res) =>
{
    if (req.body.create)
    {
        // Add new product specified in create key 
        try 
        {
            // DOC: https://mongoosejs.com/docs/api/model.html#Model.create()
            // Create triggers 'Save' anyways (Enter JSON Array or a single JSON)
            // Need to parse it as a JSON Object - https://stackoverflow.com/questions/68430558/how-to-access-object-with-req-body-in-mongoose
            let result = await Product.create(JSON.parse(req.body.create));
            res.json(result);

            // const product = new Product(req.body.create);
            // let result = await product.save();
            // res.json(result);
        }
        catch (exception) 
        {
            // console.log(exception);
            var resultJson = {};
            res.json(resultJson);
        }
    }
    else
    {
        resultJson = { "ERROR!!": "Create key not supplied" };
        res.json(resultJson);
    }
}

module.exports.update = async (req, res) =>
{
    if (req.body.update)
    {
        // Update a product specified in update key specified by id
        try 
        {
            // DOC: https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()
            // Need to parse it as a JSON Object - https://stackoverflow.com/questions/68430558/how-to-access-object-with-req-body-in-mongoose
            let result = await Product.findByIdAndUpdate(req.params.id, JSON.parse(req.body.update));
            res.json(result);
        }
        catch (exception) 
        {
            // console.log(exception);
            var resultJson = {};
            res.json(resultJson);
        }
    }
    else
    {
        resultJson = { "ERROR!!": "Update key not supplied" };
        res.json(resultJson);
    }
}

module.exports.delete = async (req, res) =>
{
    // Delete a product specified in update key specified by id
    try 
    {
        // DOC: https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()
        let result = await Product.findByIdAndDelete(req.params.id);
        res.json(result);
    }
    catch (exception) 
    {
        // console.log(exception);
        var resultJson = {};
        res.json(resultJson);
    }
}

module.exports.deleteAll = async (req, res) =>
{
    // Delete all products
    try 
    {
        // DOC: https://mongoosejs.com/docs/api/model.html#Model.deleteMany()
        var emptyJson = {};
        let result = await Product.deleteMany(emptyJson);
        res.json(result);
    }
    catch (exception) 
    {
        // console.log(exception);
        var resultJson = {};
        res.json(resultJson);
    }
}