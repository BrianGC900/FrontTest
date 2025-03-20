// views/AuthView.js
import React from 'react';
import AuthCard from '../components/authCard'; // Asegúrate de que la ruta sea correcta

const AuthView = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <AuthCard />
    </div>
  );
};

export default AuthView;
