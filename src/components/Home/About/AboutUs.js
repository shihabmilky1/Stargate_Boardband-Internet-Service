import React from 'react';
import {  faGlobeAsia } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import family from '../../../images/family.jpg'
import playing from '../../../images/playing.jpg'
import './About.css'
const AboutUs = () => {
    return (
        <section id="about" style={{background:'#efefef',borderBottom:'1px solid #efefef',paddingBottom:'100px',paddingTop:'100px'}}>
            <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="d-flex align-items-center">
                <div id="wifi-icon" className="me-3 text-center ">
                            <FontAwesomeIcon  icon={faGlobeAsia} />
                        </div>
                        <h5 className=" mt-3" style={{color: '#339AF0',fontWeight: 'bold'}}>About Stargate</h5>
                        </div>
                        <h1 className=" mt-2 fw-bold">Discover A Wider World Of <br/> Recreation</h1>
                        
                        <p className=" mt-2 text-secondary">Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor imperdiet nec consequata congue idsem. Maecenas malesuada faucibus finibus. Donec vitae libero porttitor laoreet sapiena ultrices leo. Duis dictum vestibulum ante vitae ullamcorper. Phasellus ullamcorper odio vitae eleifend ultricies lectus orci congue magna in egestas nulla libero nonnis.</p> 
                        <hr className="my-4"/>
                        <div className="row d-flex align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div className="overlay">
                            <img className="img-fluid"  src={family} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo ullamcorper malesuada finibus. ultricies lectus orci congue magna in egestas.
                            </p>
                        </div>
                        </div>
                </div>
                <div className="col-lg-5">
                    <div className="about-image">
                        <div className="per-second-section d-flex align-items-center justify-content-center">
                            <div>
                            <span>Up To</span>
                            <h1 className="fw-bold">100 MB</h1>
                            <span>Per Second</span>
                            </div>
                        </div>
                        <img className="img-fluid circle"style={{borderRadius:'50%'}} src={playing} alt=""/>
                        <div className="per-second-section-price d-flex align-items-center justify-content-center">
                            <div>
                            <span className="text-left">Just</span>
                            <h2 className="fw-bold">$24</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default AboutUs;