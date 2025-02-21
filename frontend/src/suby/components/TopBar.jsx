import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
   <section className="topBarSection">
        <div className="companyTitle">
            <Link to='/' className='link'>
            <h2>Food Delivery App</h2>
            </Link>
        </div>
        <div className="searchBar">
            <input type="text" placeholder='Search...' />
        </div>
        <div className="userAuth">
            <Link to='/login' className='link'>
            <button>Login</button>
            </Link>
            <Link to='/register' className='link'>
            <button>Register</button>
            </Link>
        </div>
   </section>
  )
}

export default TopBar;