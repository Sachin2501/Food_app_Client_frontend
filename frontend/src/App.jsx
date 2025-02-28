import React from 'react'
import { Routes, Route } from 'react-router-dom'

import LandingPage from './suby/pages/LandingPage'
import ProductMenu from './suby/components/ProductMenu'
import Register from './suby/pages/Register'  
import Login from './suby/pages/Login'; 
import Dashboard from "./suby/pages/Dashboard";

import './App.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products/:firmId/:firmName' element={<ProductMenu />} />
        <Route path='/register' element={<Register />} />  {/*  Register form ka route */}
        <Route path='/login' element={<Login />} />  {/*  Login Page Route */}
        <Route path="/dashboard" element={<Dashboard />} />  {/* ✅ User Section */}
      </Routes>
    </div>
  )
}

export default App
