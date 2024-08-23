import React from 'react'
import './Footer.css';
import Logo from '../assets/Logo.png';
import AccreditedBusinessLogo from '../assets/AccreditedBusinessLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faSnapchatGhost } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className='footer' id="footer">
      <div className='footer-container'>
        <div className='footer-container-containers'>
          <div className='footerdiv1-logo'>
            <div className='footer-logo-container'>
              <div className='footer-logo-background'>
                <img src={Logo} alt="Logo" className='footer-logo'/>
              </div>
            </div>
            <p className='footer-div1-openinghours'>
              Cityville, State <br />
              Monday - Friday <br />
              8 AM - 5 PM
            </p>
            <p className='footer-div1-phonenumber'>
              (123) 456-7890
            </p>
          </div>
          <div className='footerdiv2-community'>
            <h3 className='footerdiv2-community-title'>
              Proudly serving our community
            </h3>
            <div className='footerdiv2-community-communities'>
              <p>Downtown <br />Riverside <br />Maplewood <br />Cedar Grove <br />Pine Valley <br />West End <br />Lakeview</p>
              <p> Eastwood  <br />Southgate  <br />Oak Hill  <br />Brookside  <br />Northgate <br />Sunset Ridge <br />Hillside Terrace</p>
            </div>          
          </div>
        </div>
        <div className='footer-container-containers'>
          <div className='footerdiv3-followus'>
            <h3>Follow Us Online:</h3>
            <div className='socialmedia-icon-container'>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faSnapchatGhost} /></a>
            </div>
          </div>
          <div className='footerdiv4-accredited'>
            <div className='footer-accreditedlogo-container'>
              <img src={AccreditedBusinessLogo} alt="BBB Accredited Business Logo" className='footer-accreditedlogo'/>
            </div>
            <p className='BBB-rating'>
              BBB Rating: A+
            </p>
          </div>
        </div>
      </div>
      <div className='copyright-container'>
        <p>
          Copyright © Bill Jiang Flooring Company Ltd., 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer
