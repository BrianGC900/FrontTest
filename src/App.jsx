import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthView from './components/auth/screens/authView';
import DashboardPage from './pages/DashboardPage'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthView />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
