import React from 'react'
import {useNavigate } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <nav>
            <div className="navName">
                <span>Hi Welcome to our website</span> <br />
            </div>

        <div className="containerNav">
            <div className="navMenuRight">
                <a onClick={() => navigate('/')} href="#home">
                <i className="uil uil-estate iconNavbar"></i>
                <span className='textNavbar'>Home</span>
                </a>
            </div>
            <div className="navMenuAbout">
                <a onClick={() => navigate('/')} href="#aboutFathanFinkan">
                <i className="uil uil-users-alt iconNavbar"></i>
                <span className='textNavbar'>Our About</span> 
                </a>
            </div>
            <div className="navOurGallery">
                <a onClick={() => navigate('/gallery')} href='/gallery'>
                <i className="uil uil-image iconNavbar"></i>
                <span className='textNavbar'>Our Gallery</span>
                </a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar