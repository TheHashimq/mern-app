import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Will be hashed using bcrypt
  role: {
    type: String,
    enum: ["customer", "delivery", "restaurant"],
    required: true,
  },
  phone: { type: String },
  address: {
    street: String,
    city: String,
    zip: String,
    state: String,
    country: String,
  },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
export default User;
