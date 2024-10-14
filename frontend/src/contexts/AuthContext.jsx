import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const navigate = useNavigate(); // useNavigate hook should be used here

	// Example functions to manage authentication
	const login = () => {
		setIsAuthenticated(true);
		navigate("/"); // Redirect to home after login
	};

	const logout = () => {
		setIsAuthenticated(false);
		navigate("/login"); // Redirect to login after logout
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
