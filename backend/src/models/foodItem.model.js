import mongoose from "mongoose";
const foodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String, required: true }, // Example: "Beverages", "Snacks", etc.
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  }, // Refers to the Restaurant collection
  createdAt: { type: Date, default: Date.now },
});

const FoodItem = mongoose.model("FoodItem", foodItemSchema);

export default FoodItem;
