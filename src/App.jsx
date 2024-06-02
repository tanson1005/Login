// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Pages/Login/LoginForm';
import RegisterForm from './Pages/Register/Register';
import backgroundImage from './images/background.jpg';

import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <img src={backgroundImage} alt="Background" className="background-image" />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<RegisterForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 
