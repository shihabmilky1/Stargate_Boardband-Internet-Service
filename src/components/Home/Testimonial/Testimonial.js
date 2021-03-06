import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUsers} from '@fortawesome/free-solid-svg-icons'
import Carousel from "react-elastic-carousel";
import TestimonialCard from '../TestimonialCard/TestimonialCard';
const Testimonial = () => {
    const [customerFeedback,serCustomerFeedback] = useState([])
    useEffect(() => {
        fetch('https://intense-reef-39470.herokuapp.com/getFeedback')
        .then(res => res.json())
        .then(data => serCustomerFeedback(data))
    },[])
    return (
        <section style={{paddingBottom:'100px',paddingTop:'100px'}}>
            <div className="container">
            <div className="row mb-4">
                    <div className="col mb-3">
                      <div id="wifi-icon" className="me-3 text-center  features-wifi-icon">
                            <FontAwesomeIcon  icon={faUsers} />
                        </div>
                        <h5 className="text-center mt-2" style={{color: '#339AF0',fontWeight: 'bold'}}>Testimonials</h5>
                        <h1 className="text-center mt-2 fw-bold">What Our Clients Say</h1>    
                    </div>
                </div>
                <div className="row mb-4">
                <Carousel >
                    {customerFeedback.map(feedback => <TestimonialCard feedback={feedback}></TestimonialCard>)}
                </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;