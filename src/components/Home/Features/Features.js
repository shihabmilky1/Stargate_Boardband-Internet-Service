import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faWifi, faSignal, faBroadcastTower, faTachometerAlt} from '@fortawesome/free-solid-svg-icons'
import './Features.css'
import FeaturesCard from '../FeaturesCard/FeaturesCard';
const Features = () => {
    const ourFeatures = [
        {
        title: 'Wifi Seamless',
        icon: faWifi,
        },
        {
        title: 'Speed On Demand',
        icon: faSignal,
        },
        {
        title: 'Upgrade Speed',
        icon: faBroadcastTower,
        },
        {
        title: 'Download 1Gbps',
        icon: faTachometerAlt,
        }
    ]
    return (
        <section  style={{paddingBottom:'100px',paddingTop:'100px'}}>
            <div className="container">
                <div className="row mb-4">
                    <div className="col mb-3">
                      <div id="wifi-icon" className="me-3 text-center  features-wifi-icon">
                            <FontAwesomeIcon  icon={faWifi} />
                        </div>
                        <h5 className="text-center mt-2" style={{color: '#339AF0',fontWeight: 'bold'}}>Stargate ISP Features</h5>
                        <h1 className="text-center mt-2 fw-bold">We Are Internet Service <br/>Provider Company</h1>    
                    </div>
                </div>
                <div className="row g-4">
                    {
                        ourFeatures.map((futuresCard,index) => <FeaturesCard key={index} futuresCard={futuresCard}></FeaturesCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Features;