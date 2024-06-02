import React, { useState, useEffect } from 'react';
import './LoginForm.scss'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon for using icons
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Import icons for password visibility toggle
import { faFacebookF} from '@fortawesome/free-brands-svg-icons'; // Import Facebook icon

const LoginForm = () => {
  // State variables for username, password, password visibility toggle, and remember me checkbox
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Effect hook to retrieve remembered user credentials from local storage
  useEffect(() => {
    const rememberedUsername = localStorage.getItem('rememberedUsername');
    const rememberedPassword = localStorage.getItem('rememberedPassword');
    const rememberedRememberMe = localStorage.getItem('rememberMe');

    if (rememberedRememberMe === 'true') {
      setUsername(rememberedUsername || '');
      setPassword(rememberedPassword || '');
      setRememberMe(true);
    }
  }, []);

  // Event handler for username input change
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Event handler for password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Event handler for remember me checkbox change
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // Store remembered credentials in local storage if remember me is checked
    if (rememberMe) {
      localStorage.setItem('rememberedUsername', username);
      localStorage.setItem('rememberedPassword', password);
      localStorage.setItem('rememberMe', 'true');
    } else {
      // Remove remembered credentials from local storage if remember me is unchecked
      localStorage.removeItem('rememberedUsername');
      localStorage.removeItem('rememberedPassword');
      localStorage.removeItem('rememberMe');
    }
  };

  // Event handler for Facebook login button click
  const handleFacebookLogin = () => {
    window.location.href = 'https://www.facebook.com/';
  };

  // Event handler for Google login button click
  const handleGoogleLogin = () => {
    window.location.href = 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2F&ec=GAZAmgQ&hl=vi&ifkv=AaSxoQxhOlZXfuvVCrgLfc8fsyAXKT8_YdnDl9Pp2dyeCjBU_y4ylQ-9QBtMk0AGzR8oVUCQDKUPvg&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1627563663%3A1715317667382273&ddm=0';
  };

  return (
    <div className="login-form-container">
      <h1 className="text-center mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        {/* Username input */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        {/* Password input */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"} 
              className="form-control"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            {/* Toggle password visibility button */}
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="password-toggle-icon" onClick={togglePasswordVisibility} />
          </div>
        </div>
        {/* Remember me checkbox */}
        <div className="mb-3">
          <div className="remember-me-container">
            <label>
              <input 
                type="checkbox" 
                checked={rememberMe} 
                onChange={handleRememberMeChange} 
              />
              Remember me
            </label>
          </div>
        </div>
        {/* Submit button */}
        <button type="submit" className="btn btn-primary">Login</button>
      </form>

      {/* Or login with social media */}
      <div className="or-divider">
        <span className="or-divider-text">Or login with</span>
      </div>

      {/* Social login buttons */}
      <div className="social-login-container">
        <button className="btn-face" onClick={handleFacebookLogin}>
          <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: '20px', marginRight: '10px', paddingBottom: '1px' }} />
          Facebook
        </button>
        <button className="btn-google" onClick={handleGoogleLogin}>
          <span className="google-icon" />
          Google
        </button>
      </div>
      
      {/* Signup link */}
      <div className="signup-container">
        Not a member?<a href="/signup" className="signup-link"> Sign up now</a>
      </div>
    </div>
  );
};

export default LoginForm;
