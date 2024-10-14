import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Refers to the restaurant owner from the Users collection
  address: {
    street: String,
    city: String,
    zip: String,
    state: String,
    country: String,
  },
  rating: { type: Number, default: 0 },
  foodItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "FoodItem" }], // Refers to Food Items
  createdAt: { type: Date, default: Date.now },
});
const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
