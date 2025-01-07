import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title: { type: String },
    description: { type: String },
    due_date: { type: String }
}, { timestamps : true })

const Product = mongoose.model('Product', productSchema);

export default Product;