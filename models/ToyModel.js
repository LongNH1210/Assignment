var mongoose = require('mongoose')
var ToySchema = mongoose.Schema(
   {
      name: String,
      price: Number,
      category: String,
      brand: String,
      quantity: Number,
      image: String,
      detail: String,
   }
);

var ToyModel = mongoose.model("Do choi", ToySchema, "Toy");
module.exports = ToyModel;