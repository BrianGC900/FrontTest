import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./routes/routes"; // Importa las rutas
import { ToastContainer } from 'react-toastify';  // Importa ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Estilos de Toastify

const App = () => {
  return (
    <Router>
      <RoutesConfig /> 
      <ToastContainer />  {/* Agrega ToastContainer para que sea global */}
    </Router>
  );
};

export default App;
