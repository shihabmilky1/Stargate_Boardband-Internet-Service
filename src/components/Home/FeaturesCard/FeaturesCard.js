import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FeaturesCard.css'
const FeaturesCard = ({futuresCard}) => {
    return (
        <div className="col-md-3">
            <div className="card text-left p-2 shadow py-4 futures-card"  style={{border: '0'}}>
            <FontAwesomeIcon className="features-icon" style={{fontSize:'40px',marginLeft:'15px',color:'#339AF0'}} icon={futuresCard.icon} />
              <div className="card-body">
                <h4 className="card-title fw-bold">{futuresCard.title}</h4>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
        </div>
    );
};

export default FeaturesCard;