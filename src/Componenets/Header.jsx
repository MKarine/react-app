import React from 'react'
import { NavLink as Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../scss/Header.scss'


export function Header({navbar}) {
  const navigate = useNavigate()
  const [showNavBar, setShowNavBar] = useState(false)
  return (
    <div className='header'>
      
      <div id="menu-bar" className="fa-solid fa-bars" onClick={() => setShowNavBar(!showNavBar)}></div>
      
      <div className='logo' onClick={() => navigate('/')}> 
        <img src='/images/logo.jpg' alt='logo' />
      </div>
      
      <nav className={showNavBar ? 'active' : '' }>
          {
            navbar.map((el) => 
                <Link key={el.id} to={el.route} onClick={() => setShowNavBar(false)}>
                  {el.title}
                </Link>)
          }
      </nav>

     
    </div>
      
  )
}
