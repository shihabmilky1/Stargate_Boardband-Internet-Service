import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import {  useHistory } from 'react-router-dom';
import ServiceIcons from '../../Shared/ServieIcons/ServiceIcons';

const PricingCard = ({pricing}) => {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/service/${pricing.title}`)
    }
    return (
        <div className="col-lg-4" >
            <div class="card shadow p-2 pt-5 pb-3"   style={{border: '0',position:'relative'}}>
              <div class="card-body">
                  <h6 style={{background:'#339AF0',display:'inline-block',padding:'10px 20px',color:'#fff',borderRadius:'30px',position:'absolute',right:'20px',top:'10px'}}>Promo</h6>
                <h4 class="card-title fw-bold text-center mb-4">{pricing.title}</h4>
                <div className="my-4 d-flex align-items-center justify-content-center">
                    <ServiceIcons service={pricing} ></ServiceIcons>
                </div>
                <ul className="list-unstyled  mx-auto">
                <li className="my-3" > <FontAwesomeIcon style={{color: '#339AF0'}} className="me-2"icon={faCheckCircle} /> Home Broadband</li>
                <li className="my-3" > <FontAwesomeIcon style={{color: '#339AF0'}} className="me-2"icon={faCheckCircle} />Cell Phone Connection</li>
                <li className="my-3" > <FontAwesomeIcon style={{color: '#339AF0'}} className="me-2"icon={faCheckCircle} />Home Security</li>
                <li className="my-3" > <FontAwesomeIcon style={{color: '#339AF0'}} className="me-2"icon={faCheckCircle} />99% Internet Uptime</li>
                </ul>
                <h1 className="fw-bold mt-4 text-center">${pricing.charge}.00<span className="fw-normal" style={{fontSize:'14px'}}>/Month</span> </h1>
               <div className="d-flex justify-content-center">
               <button onClick={handleClick} className="btn my-btn mt-3">Buy Now</button>
               </div>
              </div>
            </div>
        </div>
    );
};

export default PricingCard;