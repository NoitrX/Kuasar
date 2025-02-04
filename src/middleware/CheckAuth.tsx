import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../components/Auth/AuthContext";

const CheckAuth: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default CheckAuth;
