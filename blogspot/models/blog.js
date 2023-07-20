// creating our blog model
/**
 * pseudocode
 *  1. import mongoose.
 *  2. assign it to a variable mongoose
 *  3. declare a variable blogSchema 
 *  4. assign  to it a  mongoose.Schema()
 *  5. pass an object with the fields for the blog - title, body
 *  6. compile a mongoose model from the mongoose schema
 *  7. export the mongoose model
 */

 const mongoose = require('mongoose')
 const blogSchema = mongoose.Schema(
    {
        title: String,
        body:  String
    }
 )
const blog = mongoose.model("blog",blogSchema);
 module.exports = blog