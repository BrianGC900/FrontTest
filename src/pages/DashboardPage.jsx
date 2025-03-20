import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Función para verificar si el token JWT ha expirado
const isTokenExpired = (token) => {
  try {
    const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decodifica el JWT
    const expirationDate = decodedToken.exp * 1000; // Convertir a milisegundos
    return expirationDate < Date.now(); // Retorna true si el token ha expirado
  } catch (error) {
    console.error("Error al decodificar el token:", error);
    return true; // En caso de error, tratamos como si el token ha expirado
  }
};

const DashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token || isTokenExpired(token)) {
      // Si no hay token o el token ha expirado, redirigir al login
      navigate("/login");
      return;
    }

    // Aquí ya no es necesario verificar la expiración, solo mostrar el Dashboard
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Welcome to the Dashboard</h2>
        <p>Your content goes here!</p>
      </div>
    </div>
  );
};

export default DashboardPage;
