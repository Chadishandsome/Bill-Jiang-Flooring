import { React, useRef } from 'react';
import './Navbar.css';
import Logo from '../assets/Logo.png';
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  
  const navigate = useNavigate();

  const handleAboutClick = (event) => {
    event.preventDefault();
    navigate('/#about');
  };


  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className="navbar-logo-address-phonenumber-container">
          <div className='navbar-logo-container'>
            <img src={Logo} alt="Logo" className='navbar-logo'/>
          </div>
          <div className='address-phonenumber mobile'>
            <p className='address'>
              123 Neighborhood Road, Cityville, State ABC DEF
            </p>
            <div className='phonenumber'>
              {/* <img className='phone-icon' src="" alt="" /> */}
              <p>
                (123) 456-7890
              </p>
            </div>
          </div>
        </div>
        <hr className='navbar-lines'/>
        <div className='navbar-links-container'>
          <div className='address-phonenumber desktop'>
            <p className='address'>
              123 Neighborhood Road, Cityville, State ABC DEF
            </p>
            <div className='phonenumber'>
              {/* <img className='phone-icon' src="" alt="" /> */}
              <p>
                <i>(123) 456-7890</i>
              </p>
            </div>
          </div>
          <div className='navbar-links'>
            <Link to={'/'}>HOME</Link>
            <Link to={'/services'}>SERVICES</Link>
            <Link to={'/products'}>PRODUCTS</Link>
            <Link to={'/gallery'}>GALLERY</Link>
            <Link href="/#about" onClick={handleAboutClick}>ABOUT</Link>
            <Link to={'/contact'}>CONTACT</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
