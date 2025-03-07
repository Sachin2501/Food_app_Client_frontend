import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css'; // CSS file import

const Register = () => {
  const [user, setUser] = useState({
    username: '',  
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  // 🔹 Input change handler
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // 🔹 Register Function with API Call
  const handleRegister = async () => {
    try {
      console.log("Sending Data to API:", user); //  Debugging API request

      const response = await axios.post("https://food-app-client-backend.onrender.com", user);
      
      console.log("API Response:", response.data); // Debugging API response
      
      alert(response.data.message || "Registration Successful!");  
      navigate('/login'); 

    } catch (error) {
      console.error("Registration Error:", error.response?.data || error);
      
      if (error.response) {
        alert("Error: " + (error.response.data.message || "Registration failed"));
      } else {
        alert("Server not responding. Try again.");
      }
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input type="text" name="username" placeholder="Full Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button className="register-btn" onClick={handleRegister}>Register</button>
      <button className="home-btn" onClick={() => navigate('/')} style={{
        
      }}>Go to Home</button>
    </div>
  );
};

export default Register;
