import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./Contexts/AuthContext";

export default function ProtectedRoute() {
	const { currentUser } = useAuth();

	return (
			currentUser ? <Outlet /> : <Navigate to="/login" />
	)
}
