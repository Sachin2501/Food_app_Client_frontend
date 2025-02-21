import React from 'react'
import { useNavigate } from 'react-router-dom';

import TopBar from '../components/TopBar'
import ItemsDisplay from '../components/ItemsDisplay'
import Chains from '../components/Chains'
import FirmCollections from '../components/FirmCollections'

const LandingPage = () => {
  const navigate = useNavigate();  //  Navigation ke liye useNavigate hook

  return (
    <div>
      <TopBar />
      <div className="landingSection">
        <ItemsDisplay />
        <Chains />
        <FirmCollections />
      </div>

      {/*  Register & Login Buttons */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={() => navigate('/register')} style={{ marginRight: '10px' }}>
          Register
        </button>
        <button onClick={() => navigate('/login')}>
          Login
        </button>
      </div>
    </div>
  )
}

export default LandingPage;
