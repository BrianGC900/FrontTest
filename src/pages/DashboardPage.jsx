// DashboardPage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Header from "../layout/Header"; // Importamos el Header
import DashboardCard from "../layout/DashboardCard"; // Importamos el DashboardCard
import Sidebar from "../layout/SideBar"; // Importamos el Sidebar

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
  const [openSidebar, setOpenSidebar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token || isTokenExpired(token)) {
      // Si no hay token o el token ha expirado, redirigir al login
      navigate("/login");
      return;
    }
  }, [navigate]);

  // Función para manejar el logout
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Elimina el token del localStorage
    navigate("/login"); // Redirige al login
  };

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar); // Alternar el estado del Sidebar
  };

  return (
    <Box>
      {/* Botón de menú para abrir el Sidebar */}
      <IconButton
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          color: "white", // Hace que el icono sea blanco
          fontSize: "1.2rem", // Aumenta el tamaño del botón en general
        }}
        onClick={toggleSidebar}
      >
        <MenuIcon sx={{ fontSize: "2rem" }} />{" "}
        {/* Hace que el icono sea más grande */}
      </IconButton>

      {/* Header */}
      <Header />

      {/* Dashboard Card */}
      <Box
        className="flex items-center justify-start bg-gray-100 mt-12"
        sx={{
          display: "flex", // Usar flexbox
          flexDirection: "column", // Colocar los elementos en columna
          alignItems: "center", // Centrado horizontal
          justifyContent: "flex-start", // Mover el contenido hacia arriba
          height: "calc(100vh - 64px)", // Ajustamos la altura a 100vh menos la altura del Header (64px)
          overflow: "hidden", // Evitar scroll
          padding: 2, // Espaciado alrededor
        }}
      >
        <DashboardCard onLogout={handleLogout} />
      </Box>

      {/* Sidebar */}
      <Sidebar open={openSidebar} onClose={toggleSidebar} />
    </Box>
  );
};

export default DashboardPage;
