var mongoose = require('mongoose');

var productsSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    category: String
}, { collection: 'product' }); // defined it explicitly, SO THAT IT DOES NOT TRY TO BE SMART AND ADD AN EXTRA 'S' IN THE COLLECTION NAME.

module.exports = mongoose.model('product', productsSchema);
