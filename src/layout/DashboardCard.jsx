// DashboardCard.js
import React from "react";
import { Button, Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";  
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"; 
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShowChartIcon from "@mui/icons-material/ShowChart";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: "auto",
  borderRadius: "12px",
  boxShadow: theme.shadows[10],
  backgroundColor: "#ffffff",
  overflow: "hidden",
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.primary.main,
  fontSize: "1.5rem",
  marginBottom: theme.spacing(2),
}));

const DashboardCard = ({ onLogout }) => {
  const userName = localStorage.getItem("userName") || "Usuario"; 

  return (
    <StyledCard>
      <CardContent sx={{ textAlign: "center", padding: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 3 }}>
          <PersonIcon sx={{ fontSize: "3rem", marginRight: 2, color: "#1976d2" }} />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Bienvenido, {userName}!
          </Typography>
        </Box>
        
        <CardTitle variant="h5">Dashboard</CardTitle>
        
        <Typography variant="body1" sx={{ marginBottom: 3, fontSize: "1rem", color: "#555" }}>
          ¡Explora las características de tu panel!
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={4}>
            <Box sx={{ textAlign: "center" }}>
              <AccountBalanceIcon sx={{ fontSize: "2.5rem", color: "#4caf50" }} />
              <Typography variant="h6" sx={{ marginTop: 1 }}>Balance</Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>$5,000</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ textAlign: "center" }}>
              <AccessTimeIcon sx={{ fontSize: "2.5rem", color: "#ff9800" }} />
              <Typography variant="h6" sx={{ marginTop: 1 }}>Tiempo</Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>10h 30m</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ textAlign: "center" }}>
              <ShowChartIcon sx={{ fontSize: "2.5rem", color: "#3f51b5" }} />
              <Typography variant="h6" sx={{ marginTop: 1 }}>Progreso</Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>85%</Typography>
            </Box>
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="secondary"
          onClick={onLogout}
          sx={{ marginTop: 3, padding: "10px 20px", fontSize: "1rem" }}
        >
          Cerrar sesión
        </Button>
      </CardContent>
    </StyledCard>
  );
};

export default DashboardCard;
