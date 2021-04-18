import React from 'react';
import WifiAreaPhoto from '../../../images/assets-evernet-network.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons'
const WifiArea = () => {
    return (
        <section style={{background:'#efefef',paddingBottom:'100px',paddingTop:'100px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={WifiAreaPhoto} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-6">
                    <div className="d-flex align-items-center">
                    <div id="wifi-icon" className="me-3 text-center  ">
                            <FontAwesomeIcon  icon={faNetworkWired} />
                        </div>
                        <h5 className="text-center mt-3" style={{color: '#339AF0',fontWeight: 'bold'}}>Get Blazing Fast Interne</h5>
                    </div>
                        <h1 className=" mt-2 fw-bold">Evernet Is Available To All Corners Of The Country</h1>  
                        <p className="text-secondary">Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor imperdiet nec consequata congue idsem. Maecenas malesuada faucibus finibus. Donec vitae libero porttitor laoreet sapiena ultrices.</p> 
                        <hr className="my-4"/>
                        <h5 className="fw-bold">Call Us Now For Connect Evernet</h5>
                        <h4 className="fw-bold" style={{color: '#339AF0'}}>+(62) 800-567-8990</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WifiArea;