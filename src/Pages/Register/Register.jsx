import React, { useState } from 'react';
import './RegisterForm.scss'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon for using icons
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Import icons for password visibility toggle

const RegisterForm = () => {
  // State variables for form fields and password visibility toggle
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('male');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Event handlers for form fields
  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);
  const handleFullNameChange = (event) => setFullName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);
  const handleDobChange = (event) => setDob(event.target.value);
  const handleGenderChange = (event) => setGender(event.target.value);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log({
      username,
      password,
      fullName,
      email,
      phone,
      dob,
      gender
    });
    // Perform registration logic here (e.g., API call)
  };

  return (
    <div className="register-form-container">
      <h1 className="text-center mb-4">Register</h1>
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
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="password-toggle-icon" onClick={togglePasswordVisibility} />
          </div>
        </div>
        {/* Confirm Password input */}
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
          <div className="password-input-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} className="password-toggle-icon" onClick={toggleConfirmPasswordVisibility} />
          </div>
        </div>
        {/* Full Name input */}
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name:</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            value={fullName}
            onChange={handleFullNameChange}
          />
        </div>
        {/* Email input */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        {/* Phone input */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number:</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        {/* Date of Birth input */}
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Date of Birth:</label>
          <input
            type="date"
            className="form-control"
            id="dob"
            value={dob}
            onChange={handleDobChange}
          />
        </div>
        {/* Gender input */}
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender:</label>
          <select className="form-control" id="gender" value={gender} onChange={handleGenderChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        {/* Submit button */}
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      {/* Login link */}
      <div className="login-container">
        Already have an account?<a href="/login" className="login-link"> Log in</a>
      </div>
    </div>
  );
};

export default RegisterForm;
  