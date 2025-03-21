import React from "react";
import { List, ListItem, ListItemText, Drawer, Box, Divider, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const menuItems = [
    { text: "Dashboard", path: "/dashboard" },
    { text: "Usuarios", path: "/users" },
    { text: "Profile", path: "/profile", isComingSoon: true },
    { text: "Settings", path: "/settings", isComingSoon: true },
    { text: "Logout", path: "/login", isLogout: true },
  ];

  const handleNavigate = (item) => {
    if (item.isComingSoon) {
      setToastMessage("Estamos trabajando en ello...");
      setToastOpen(true);
    } else if (item.isLogout) {
      localStorage.removeItem("authToken"); // Elimina el token del usuario
      navigate(item.path);
    } else {
      navigate(item.path);
    }
    onClose();
  };

  return (
    <>
      <Drawer anchor="left" open={open} onClose={onClose}>
        <Box sx={{ width: 250, backgroundColor: "#fafafa", height: "100vh", paddingTop: 2 }} role="presentation">
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={() => handleNavigate(item)}
                sx={{
                  padding: "12px 16px",
                  backgroundColor: item.isLogout ? "#d32f2f" : "transparent",
                  "&:hover": { backgroundColor: item.isLogout ? "#b71c1c" : "#f0f0f0" },
                  color: item.isLogout ? "white" : "#333",
                }}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>

      {/* Toast para mostrar mensajes */}
      <Snackbar open={toastOpen} autoHideDuration={3000} onClose={() => setToastOpen(false)}>
        <Alert onClose={() => setToastOpen(false)} severity="info" sx={{ width: "100%" }}>
          {toastMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Sidebar;
