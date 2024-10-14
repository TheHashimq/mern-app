import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, // Refers to a customer
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  deliveryGuy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Refers to a delivery person, can be assigned later
  foodItems: [
    {
      item: { type: mongoose.Schema.Types.ObjectId, ref: "FoodItem" },
      quantity: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true }, // Calculate based on food items and quantities
  orderStatus: {
    type: String,
    enum: ["placed", "accepted", "preparing", "delivering", "completed"],
    default: "placed",
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
  deliveryAddress: {
    street: String,
    city: String,
    zip: String,
    state: String,
    country: String,
  },
  createdAt: { type: Date, default: Date.now },
});

const Orders = mongoose.model("Order", orderSchema);
export default Orders;
