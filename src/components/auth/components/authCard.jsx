import React, { useState } from "react";
import { Card, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { toast, ToastContainer } from "react-toastify"; 
import { login as loginService, setupPassword } from "../services/authServices";
import { ModalComponent } from "../../../shared/ModalComponent";
import Form from "../../../shared/Form";
import LoadingButton from "../../../components/@extended/LoadingButton";
import { Footer } from "../../../layout/footer";
import "react-toastify/dist/ReactToastify.css"; 

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 500,
  width: "100%",
  height: "auto",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  borderRadius: "20px",
  boxShadow: theme.shadows[10],
  padding: theme.spacing(3),
  backgroundColor: "#ffffff",
  border: "1px solid #e0e0e0",
  "& .MuiTypography-root": {
    color: "#333",
  },
}));

const LoginPage = () => {
  const [formData, setFormData] = useState([]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [formDataPasswordSetup, setFormDataPasswordSetup] = useState([]);
  const [loadingPasswordSetup, setLoadingPasswordSetup] = useState(false);

  // Esquema para el login
  const loginSchema = {
    fields: [
      { name: "email", label: "Correo Electrónico" },
      { name: "password", label: "Contraseña" },
    ],
  };

  // Esquema para la configuración de contraseña
  const passwordSetupSchema = {
    fields: [{ name: "password", label: "Nueva Contraseña" }],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await loginService(formData);
      if (response.requiresInitialTwoFactorSetup) {
        toast.success(response.message);
      } else {
        toast.success(response.message);
      }
    } catch (err) {
      setErrors([err.message]);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitPasswordSetup = async (e) => {
    e.preventDefault();
    setLoadingPasswordSetup(true);
    try {
      const response = await setupPassword({
        ...formData,
        newPassword: formDataPasswordSetup.password,
      });
      toast.success("Contraseña configurada correctamente");
      setOpenModal(false);
    } catch (err) {
      setErrors([err.message]);
      toast.error(err.message);
    } finally {
      setLoadingPasswordSetup(false);
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ fontSize: "0.8rem" }} 
      />{" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f7f7f7",
          padding: "0 15px",
        }}
      >
        <StyledCard>
          <Typography
            variant="h5"
            align="center"
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: "#4e4e4e",
            }}
          >
            Bienvenido!
          </Typography>
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Form
                schema={loginSchema}
                fieldFX={[formData, setFormData]}
                errorFx={[errors, setErrors]}
                grid={1}
              />
              <LoadingButton
                type="submit"
                color="primary"
                className="button-mc"
                loading={loading}
                disabled={loading}
                fullWidth
                sx={{ marginTop: 2 }}
              >
                Iniciar sesión
              </LoadingButton>
            </div>
          </form>

          <Footer
            setActiveTab={() => {}}
            text="¿No tienes una cuenta?"
            buttonText="Regístrate"
            sx={{
              marginTop: 2,
              fontSize: "0.8rem",
              color: "#888", 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center", 
              gap: "8px", 
            }}
          />
        </StyledCard>
      </div>
      <ModalComponent
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Configuración de contraseña"
      >
        <form onSubmit={handleSubmitPasswordSetup}>
          <Form
            schema={passwordSetupSchema}
            fieldFX={[formDataPasswordSetup, setFormDataPasswordSetup]}
            errorFx={[errors, setErrors]}
            grid={1}
            sheetName="Configuración de contraseña"
          />
          <LoadingButton
            type="submit"
            className="button-mc"
            loading={loadingPasswordSetup}
            disabled={loadingPasswordSetup}
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Configurar Contraseña
          </LoadingButton>
        </form>
      </ModalComponent>
    </div>
  );
};

export default LoginPage;
