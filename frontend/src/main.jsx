import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
import { BrowserRouter } from "react-router-dom";
