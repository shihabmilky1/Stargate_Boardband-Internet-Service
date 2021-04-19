import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faList , } from '@fortawesome/free-solid-svg-icons'
import PricingCard from '../PricingCard/PricingCard';
const Pricing = () => {
    const [pricingCard,setPricingCard] = useState([])
    useEffect(()=>{
        fetch('https://intense-reef-39470.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setPricingCard(data))
    },[])
    return (
        <section className="" style={{paddingBottom:'100px',paddingTop:'100px'}}>
             <div className="container">
                 <div className="row">
                     
                     <div className="col">
                     <div id="wifi-icon" className="me-3 text-center features-wifi-icon">
                            <FontAwesomeIcon  icon={faList} />
                        </div>
                        <h5 className="text-center mt-3" style={{color: '#339AF0',fontWeight: 'bold'}}>Stargate Pricing</h5>
                        <h1  className="text-center mt-2 fw-bold">Discover Our Best Plans</h1>    
                     </div>
                 </div>
                 <div className="row g-3 mt-1">
                     {
                         pricingCard.map(pricing => <PricingCard key={pricing._id} pricing={pricing}></PricingCard>)
                     }
                 </div>
             </div>
        </section>
    );
};

export default Pricing;