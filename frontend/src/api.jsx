// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // Backend URL
  withCredentials: true, // Enable cookies for session
});

export default api;
