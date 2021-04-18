import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faWifi, faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import './HeaderMAin.css'

const HeaderMain = () => {
    return (
        <div style={{padding: '100px 0'}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                      <div className="d-flex align-items-center mb-3">
                      <div id="wifi-icon" className="me-3">
                            <FontAwesomeIcon  style={{transform: 'rotate(45deg)'}} icon={faWifi} />
                        </div>
                        <h5 className="text-white mb-0">Stargate Broadband Service</h5>    
                    </div>   
                        <h1 className="text-white pb-5 fw-bold" style={{fontSize:'50px'}}>Connect The World <br/>With <span style={{color: '#339AF0'}}>Stargate</span></h1>  
                        <div className="col-md-6">
                        <ul id="about-list" className="list-unstyled">
                            <li><FontAwesomeIcon  className="text-white me-2" icon={faCheckCircle} /> Home Broadband</li>
                            <li><FontAwesomeIcon  className="text-white me-2" icon={faCheckCircle} /> Cell Phone Connection</li>
                            <li><FontAwesomeIcon  className="text-white me-2" icon={faCheckCircle} /> 99% Internet Uptime</li>
                            <li><FontAwesomeIcon  className="text-white me-2" icon={faCheckCircle} /> Download 1Gbps</li>
                            <li><FontAwesomeIcon  className="text-white me-2" icon={faCheckCircle} /> Evernet TV Box</li>
                            <li><FontAwesomeIcon  className="text-white me-2" icon={faCheckCircle} /> Mobile Connection</li>
                            <li><FontAwesomeIcon  className="text-white me-2" icon={faCheckCircle} /> 24/7 Customer Support</li>
                            <li><FontAwesomeIcon  className="text-white me-2" icon={faCheckCircle} /> Home Security</li>
                        </ul>
                        </div>                              
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;