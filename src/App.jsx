// App.jsx

import React from 'react';
import LoginForm from './Pages/Login/LoginForm';
import RegisterForm  from './Pages/Register/Register';
import backgroundImage from './images/background.jpg';

import './App.css';

const App = () => {
  return (
    <div>
      <img src={backgroundImage} alt="Background" className="background-image" />
      {/* <LoginForm /> */}
      <RegisterForm   />
    </div>
  );
};

export default App;