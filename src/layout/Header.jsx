import React from "react";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: "#2E3B55",
    boxShadow: "none",
    padding: theme.spacing(1, 0),
    marginBottom: theme.spacing(2),
  }));
  
  const Header = ({ title }) => {
    return (
      <StyledAppBar position="static">
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>
              <Typography
                variant="h5"
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