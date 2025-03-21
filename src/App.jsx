import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./routes/routes";
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <RoutesConfig /> 
      <ToastContainer />  
    </Router>
  );
};

export default App;
