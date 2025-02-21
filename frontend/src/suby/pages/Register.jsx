import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css'; //  CSS file import

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/register", user);
      alert("Registration Successful!");
      navigate('/login'); 
    } catch (error) {
      alert("Error Registering! Try again.");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button className="register-btn" onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
