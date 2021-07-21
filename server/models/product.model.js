const mongoose = require("mongoose");

//Schema is for the form and to validate it
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [2, "{PATH} must be at least {MINLENGTH} characters."]
  },
  price: {
    type: Number,
    required: [true, "{PATH} is required."],
  },
  description: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [2, "{PATH} must be at least {MINLENGTH} characters."]
  },
likeCount: {
  type: Number,
  default: 0
},

},
{ timestamps: true });

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product


/*
Register schema with mongoose and privide a string to name the collection. This also returns a reference to our model that we can use for DB operations
*/

//Below we would get a checkbox 
// summer: {
//   type: Boolean,
//   default: false,
// },
// spring: {
//   type:Boolean,
//   default: false,
// },
// winter: {
//   type: Boolean,
//   default: false
// },
// winter: {
//   type: Boolean,
//   default: false
// }