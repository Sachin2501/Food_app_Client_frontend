import React from 'react'
import { Routes, Route } from 'react-router-dom'

import LandingPage from './suby/pages/LandingPage'
import ProductMenu from './suby/components/ProductMenu'
import Register from './suby/pages/Register'  //  Register form ka import
import Login from './suby/pages/Login'; 
import './App.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products/:firmId/:firmName' element={<ProductMenu />} />
        <Route path='/register' element={<Register />} />  {/*  Register form ka route */}
        <Route path='/login' element={<Login />} />  {/*  Login Page Route */}
      </Routes>
    </div>
  )
}

export default App
