import React, { useContext } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import creditCard from '../../../images/credit-card.png'
import PaymentProcess from '../../Payment/PaymentProcess/PaymentProcess';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
const Book = () => {
    const { serviceName } = useParams();
    const [loginUser,setLoginUser] = useContext(UserContext)
    const [customerData, setCustomerData] = useState(null);
    const [service, setService] = useState([]);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        if(service.length === 0){
            alert('Go Homepage And Select A Service')
        }
        else{
            setCustomerData(data)         
        }
    };
    const handlePaymentStatus = paymentId => {
        const bookingDetail = {
            ...loginUser,
            customerData,
            paymentId,
            date: new Date(),
            service,
            process: 'Pending'
        }
        fetch('http://localhost:3001/orderService', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookingDetail)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Order Success')
                }
            })
    };
    useEffect(() => {
        fetch(`http://localhost:3001/service/${serviceName}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <section>
            <Sidebar></Sidebar>
           {serviceName === ':serviceName' ?  <h1 style={{fontWeight: 'bold',position: 'absolute',top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Go to homepage and select a service</h1>  : <div className="container-fluid" >
                <div className="row ">
                    <div className="col-md-8  pt-5 mx-auto" style={{ display: customerData ? 'none' : 'block', transition: 'all 1s' }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={loginUser.name} type="text" className="form-control my-3" style={{ border: '0', borderBottom: '1px solid #339AF0', borderRadius: '0' }} placeholder="Name" {...register("name", { required: true })} />
                            {errors.email && <small style={{ color: "red" }}>This field is required</small>}
                            <input type="email" defaultValue={loginUser.email} className="form-control my-3" style={{ border: '0', borderBottom: '1px solid #339AF0', borderRadius: '0' }} placeholder="Email" {...register("email", { required: true })} />
                            {errors.email && <small style={{ color: "red" }}>This field is required</small>}
                            <table class="table table-borderless">
                            <thead>
                                <tr>
                                    <th>Service Name</th>
                                    <th>MBPS</th>
                                    <th>Charge</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">{service.title}</td>
                                    <td>{service.mbps}</td>
                                    <td>${service.charge}</td>
                                </tr>
                            </tbody>
                        </table>
                            <input className="btn my-btn" value="Submit" type="submit" />
                        
                        </form>
                    </div>
                    <div className="col-md-8 mx-auto mt-5 pt-5" style={{ display: customerData ? 'block' : 'none', }}>
                        <p className="text-secondary">Pay With</p>
                        <div className="d-flex align-items-center mb-3">
                            <img src={creditCard} style={{ width: '20px', marginTop: '-5px' }} alt="" />
                            <h6 className="ms-2 fw-bold mt-2">Credit Card</h6>
                        </div>
                        <div>
                            <PaymentProcess servicePrice={service.charge} handlePaymentStatus={handlePaymentStatus}></PaymentProcess>
                        </div>
                    </div>
                </div>
            </div>  }
        </section>
    );
};

export default Book;