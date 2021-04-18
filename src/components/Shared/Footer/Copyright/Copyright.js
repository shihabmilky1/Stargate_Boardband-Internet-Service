import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcStripe, faCcMastercard, faCcPaypal,faCcVisa } from '@fortawesome/free-brands-svg-icons'
import './Copyright.css'
const Copyright = () => {
    return (
          <div className="row">
              <div className="col d-flex justify-content-between align-items-center copyright-section">
              <p className="text-white mb-0">Copyright ©{(new Date().getFullYear())}  Stargate Template Kit By Shihab.</p>
              <ul className="d-flex align-items-center m-0 p-0 list-unstyled">
              <li>
              <FontAwesomeIcon className="text-white mx-2 payment-method" style={{cursor: "pointer",fontSize:'24px'}} icon={faCcStripe} />
              </li>
              <li>
              <FontAwesomeIcon className="text-white mx-2 payment-method" style={{cursor: "pointer",fontSize:'24px'}} icon={faCcMastercard} />
              </li>
              <li>
              <FontAwesomeIcon className="text-white mx-2 payment-method" style={{cursor: "pointer",fontSize:'24px'}} icon={faCcPaypal} />
              </li>
              <li>
              <FontAwesomeIcon className="text-white mx-2 payment-method" style={{cursor: "pointer",fontSize:'24px'}} icon={faCcVisa} />
              </li>
              </ul>
              </div>
          </div>
    );
};

export default Copyright;