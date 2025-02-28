import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/login');  //  go to login page
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");  
    navigate('/'); 
  };

  const goToHome = () => {
    navigate('/');  // ✅ Home Page पर Redirect
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome to Dashboard</h2>
      {user ? (
        <div>
          <h3>Hello, <b>{user.username}</b> 👋</h3>
          <p>Email: <b>{user.email}</b></p>  

          {/* ✅ Home Button */}
          <button onClick={goToHome} style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            margin: "10px"
          }}>Go to Home</button>

          {/* ✅ Logout Button */}
          <button onClick={handleLogout} style={{
            padding: "10px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
