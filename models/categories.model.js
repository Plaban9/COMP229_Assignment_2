var mongoose = require('mongoose');

var categoriesSchema = new mongoose.Schema({
    name: String
}, { collection: 'categories' }); // defined it explicitly, SO THAT IT DOES NOT TRY TO BE SMART AND ADD AN EXTRA 'S' IN THE DATABASE NAME.);

module.exports = mongoose.model('categories', categoriesSchema)