import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Header from "../layout/Header";
import DashboardCard from "../layout/DashboardCard";
import Sidebar from "../layout/SideBar";

const isTokenExpired = (token) => {
  try {
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    const expirationDate = decodedToken.exp * 1000;
    return expirationDate < Date.now();
  } catch (error) {
    console.error("Error al decodificar el token:", error);
    return true;
  }
};

const DashboardPage = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token || isTokenExpired(token)) {
      navigate("/login");
      return;
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <Box>
      <IconButton
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          color: "white",
          fontSize: "1.2rem",
        }}
        onClick={toggleSidebar}
      >
        <MenuIcon sx={{ fontSize: "2rem" }} />{" "}
      </IconButton>
      <Header />
      <Box
        className="flex items-center justify-start bg-gray-100 mt-8"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "calc(100vh - 152px)",
          overflow: "hidden",
          padding: 2,
        }}
      >
        <DashboardCard onLogout={handleLogout} />
      </Box>
      <Sidebar open={openSidebar} onClose={toggleSidebar} />
    </Box>
  );
};

export default DashboardPage;
