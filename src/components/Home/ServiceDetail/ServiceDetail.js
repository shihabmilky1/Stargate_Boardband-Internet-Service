import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import internet from '../../../images/internet.jpg' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../Shared/Footer/Footer/Footer';
import ServiceIcons from '../../Shared/ServieIcons/ServiceIcons';
const ServiceDetail = () => {
    const {name} = useParams();
    const history = useHistory()
    const [service,setService] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/service/${name}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    const handleOrder = serviceName => {
        history.push(`/dashboard/book/${serviceName}`)
    }
    const [subscribeEmail,setSubscribeEmail] = useState(null);
    const handleSubmit = e => {
        fetch('http://localhost:5000/subscribe',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email:subscribeEmail})
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Thank You For Your Subscription')
            }
        })
        e.preventDefault();
    }
    return (
        <>
         {  service.length === 0 ? <div className="text-center" style={{paddingBottom:'100px',paddingTop:'100px'}}><div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div></div> :
        <section style={{paddingBottom:'100px'}}>
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6">
                    <img src={internet} alt="" className="img-fluid shadow"/>
                </div>
                <div className="col-md-6">
                    <div className="title">
                        <h4 style={{fontWeight:'bold'}} >{service.title}</h4>
                    </div>
                    <div className="title mt-3">
                        <h5 style={{color: '#339AF0',fontWeight:'bold'}}>${service.charge}.00<span className="fw-normal" style={{fontSize:'14px'}}>/Month</span></h5>
                    </div>
                    <div className="my-3">
                        <ServiceIcons service={service}></ServiceIcons>
                    </div>
                    <div className="list mt-4">
                    <ul className="list-unstyled  mx-auto">
                <li className="my-3" > <FontAwesomeIcon style={{color: '#339AF0'}} className="me-2"icon={faCheckCircle} /> Home Broadband</li>
                <li className="my-3" > <FontAwesomeIcon style={{color: '#339AF0'}} className="me-2"icon={faCheckCircle} />Cell Phone Connection</li>
                <li className="my-3" > <FontAwesomeIcon style={{color: '#339AF0'}} className="me-2"icon={faCheckCircle} />Home Security</li>
                <li className="my-3" > <FontAwesomeIcon style={{color: '#339AF0'}} className="me-2"icon={faCheckCircle} />99% Internet Uptime</li>
                </ul>
                    </div>
                    <div className="buy d-flex align-items-center justify-content-center">
                        <button onClick={()=>handleOrder(name)} className="btn my-btn mt-5">Order Now</button>
                    </div>
                </div>
            </div>

            <div className="row my-5">
                <div className="col-12 d-flex justify-content-between align-items-center py-2" style={{background: '#339AF0'}}>
                    <div className="col-md-8">
                    <div className="subscribe">
                        <p className="text-white mb-0 fw-bold">Subscribe to our newsletter for the latest updates &#38; special offer</p>
                    </div>
                    </div>
                    <div className="col-md-4">
                        <form className=" d-flex justify-content-center align-items-center" onSubmit={handleSubmit}>
                        <input onChange={e=>setSubscribeEmail(e.target.value)} type="email"  placeholder="Email" className="form-control" style={{border: '1px solid #339AF0',borderRadius:'0'}} />
                        <button type="submit"  className="btn text-white btn-dark ms-1" style={{borderRadius: '0px',}}>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </section>}
        {service.length !== 0 && <Footer></Footer>}
        </>
    );
};

export default ServiceDetail;