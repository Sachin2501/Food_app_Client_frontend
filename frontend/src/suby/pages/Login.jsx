import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';  // CSS File Import

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://food-app-client-backend.onrender.com/Login", user);
      console.log("API Response:", response.data);

      if (response.status === 200) {
        alert("Login Successful!");

        localStorage.setItem("user", JSON.stringify({
          username: response.data.username,
          email: user.email  // ✅ Email Saved in LocalStorage
        }));

        navigate('/dashboard');  
      } else {
        alert("Login Failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Login Error:", error.response?.data || error);
      alert("Error: " + (error.response?.data.message || "Invalid Credentials"));
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-group">
        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} required />
      </div>
      
      {/* ✅ Login Button */}
      <button className="login-btn" onClick={handleLogin}>Login</button>

      {/* ✅ Home Button */}
      <button className="home-btn" onClick={() => navigate('/')} style={{
       
      }}>Go to Home</button>
    </div>
  );
};

export default Login;
