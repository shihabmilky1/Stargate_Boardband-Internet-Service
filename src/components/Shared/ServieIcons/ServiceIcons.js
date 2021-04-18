import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTv , faWifi , faSatelliteDish} from '@fortawesome/free-solid-svg-icons'
const ServiceIcons = ({service}) => {
    return (
        <div>
                        {service.title === 'Internet' && 
                        <div id="wifi-icon" className="me-3 text-center">
                            <FontAwesomeIcon  icon={faWifi} />
                        </div>}

                        {service.title === 'Internet + TV' && 
                        <div className="d-flex">
                            <div id="wifi-icon" className="me-3 text-center">
                            <FontAwesomeIcon  icon={faWifi} />
                        </div>
                            <div id="wifi-icon" className="me-3 text-center">
                            <FontAwesomeIcon  icon={faTv} />
                        </div>
                        </div> }
                        {service.title === 'Internet + TV + Phone' && 
                        <div className="d-flex">
                            <div id="wifi-icon" className="me-3 text-center">
                            <FontAwesomeIcon  icon={faWifi} />
                        </div>
                            <div id="wifi-icon" className="me-3 text-center">
                            <FontAwesomeIcon  icon={faTv} />
                        </div>
                            <div id="wifi-icon" className="me-3 text-center">
                            <FontAwesomeIcon  icon={faSatelliteDish} />
                        </div>
                        </div> }
        </div>
    );
};

export default ServiceIcons;