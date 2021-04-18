import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn,faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import './SocialLink.css'
const StargateSocial = () => {
    return (
        <div>
            <h1 className="fw-bold text-white">Stargate</h1>
            <p className="my-4 text-white" style={{fontSize:'14px'}}> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore pretium sollicitudin fermentum.
            </p>
            <div className="social-link d-flex align-items-center">
                <ul className="d-flex align-items-center justify-content-between list-unstyled ">
                    <li><Link to=""><FontAwesomeIcon  icon={faFacebookF} /></Link></li>
                    <li><Link to=""><FontAwesomeIcon  icon={faTwitter} /></Link></li>
                    <li><Link to=""><FontAwesomeIcon  icon={faLinkedinIn} /></Link></li>
                    <li><Link to=""><FontAwesomeIcon  icon={faYoutube} /></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default StargateSocial;