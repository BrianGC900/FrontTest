import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AuthView from "../components/auth/screens/authView";
import DashboardPage from "../pages/DashboardPage";
import UsersScreen from "../components/user/screens/UserScreen";
import Footer from "../layout/Footer"; 

const isAuthenticated = () => {
  return !!localStorage.getItem("authToken");
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const RoutesConfig = () => {
  const location = useLocation();
  const showFooter = location.pathname !== "/login";

  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route path="/login" element={<AuthView />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <UsersScreen />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
};

export default RoutesConfig;
