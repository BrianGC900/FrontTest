import React from "react";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: "#2E3B55", // Color de fondo personalizado
    boxShadow: "none", // Elimina la sombra para un diseño más limpio
    padding: theme.spacing(1, 0), // Reducido de 2 a 1 para hacerlo más chico
    marginBottom: theme.spacing(2), // Reduce el margen inferior
  }));
  
  const Header = ({ title }) => {
    return (
      <StyledAppBar position="static">
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>
              <Typography
                variant="h5" // Cambiado de h4 a h5 para hacerlo más pequeño
                component="h1"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  fontFamily: "'Roboto', sans-serif",
                  textTransform: "uppercase",
                }}
              >
                {title}
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>
    );
  };
  
export default Header;