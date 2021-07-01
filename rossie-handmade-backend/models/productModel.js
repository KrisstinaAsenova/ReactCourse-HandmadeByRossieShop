import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 3},
  image: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },  
  countInStock: { type: String, default: 0, required: true },
  price: { type: Number, default: 0, required: true },
  qty: { type: Number, default: 10 },
  description: { type: String, required: true },
  rating: { type: Number, default: 0, required: true },
  numReviews: { type: Number, default: 0, required: true }
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;