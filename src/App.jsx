import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AuthView from "./components/auth/screens/authView";
import DashboardPage from "./pages/DashboardPage";
import UsersScreen from "./components/user/screens/UserScreen"; // Importa UsersScreen

const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />; 
};

const App = () => {
  return (
    <Router>
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
        {/* Nueva ruta protegida para UsersScreen */}
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <UsersScreen />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
