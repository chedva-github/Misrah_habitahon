const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const prodactSchema = new Schema({
  name: String,  
  categoryId: { type: Schema.ObjectId, ref: 'category' },

});


module.exports = mongoose.model('Prodact', prodactSchema);
