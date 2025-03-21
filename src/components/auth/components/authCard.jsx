import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { Card, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { toast, ToastContainer } from "react-toastify";
import {
  login as loginService,
  verifyTwoFactor,
} from "../services/authServices";
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
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [formData2FA, setFormData2FA] = useState({});
  const [loading2FA, setLoading2FA] = useState(false);
  const navigate = useNavigate();  // Usamos useNavigate aquí

  const loginSchema = {
    fields: [
      { name: "email", label: "Correo Electrónico", type: "text" },
      { name: "password", label: "Contraseña", type: "password" },
    ],
  };

  const twoFactorSchema = {
    fields: [{ name: "code", label: "Código de Verificación" }],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await loginService(formData);
      if (response.requiresTwoFactor) {
        setOpenModal(true);
        toast.info(response.message);
      } else {
        localStorage.setItem("authToken", response.token);
        navigate("/dashboard"); // Redirigir al dashboard
        toast.success(response.message);
      }
    } catch (err) {
      console.error(err);
      setErrors([err.message || "Error desconocido"]);
      toast.error(err.message || "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit2FA = async (e) => {
    e.preventDefault();
    setLoading2FA(true);

    try {
      console.log("Datos enviados a verifyTwoFactor:", {
        email: formData.email,
        code: formData2FA.code,
      });

      const response = await verifyTwoFactor(formData.email, formData2FA.code);

      console.log("2FA RESPONSE", response);
      toast.success("Verificación completada con éxito.");
      setOpenModal(false);
    } catch (err) {
      console.error(err);
      setErrors([err.message || "Error en la verificación 2FA"]);
      toast.error(err.message || "Error en la verificación 2FA");
    } finally {
      setLoading2FA(false);
    }
  };

  return (
    <React.Fragment>
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
      />
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
            sx={{ fontWeight: "bold", mb: 3, color: "#4e4e4e" }}
          >
            Inicia Sesión
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
          <ModalComponent
            open={openModal}
            onClose={() => setOpenModal(false)}
            title="Verificación de 2FA"
          >
            <form onSubmit={handleSubmit2FA}>
              <Form
                schema={twoFactorSchema}
                fieldFX={[formData2FA, setFormData2FA]}
                errorFx={[errors, setErrors]}
                grid={1}
              />
              <LoadingButton
                type="submit"
                className="button-mc"
                loading={loading2FA}
                disabled={loading2FA}
                fullWidth
                sx={{ marginTop: 2 }}
              >
                Verificar Código
              </LoadingButton>
            </form>
          </ModalComponent>
        </StyledCard>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
