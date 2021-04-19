import React from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://intense-reef-39470.herokuapp.com/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('success',{
                        position: 'Thank You For Contact Us'
                    });
                }
            })
    };
    return (
        <section id="contact" style={{ background: '#efefef', paddingBottom: '100px', paddingTop: '100px' }}>
            <div className="container">
                <div className="row">
                    <div className="col mb-3">
                        <div id="wifi-icon" className="me-3 text-center  features-wifi-icon">
                            <FontAwesomeIcon icon={faHandshake} />
                        </div>
                        <h5 className="text-center mt-2" style={{ color: '#339AF0', fontWeight: 'bold' }}>Contact Us</h5>
                        <h1 className="text-center mt-2 fw-bold">Send Your Opinion</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="email" className="form-control my-3" style={{ border: '0', border: '1px solid #339AF0', borderRadius: '0' }} placeholder="Email" {...register("email", { required: true })} />
                            {errors.email && <small style={{ color: "red" }}>This field is required</small>}
                            <input type="number" className="form-control my-3" style={{ border: '0', border: '1px solid #339AF0', borderRadius: '0' }} placeholder="Phone" {...register("phone", { required: true })} />
                            {errors.phone && <small style={{ color: "red" }}>This field is required</small>}
                            <textarea cols="30" rows="10" className="form-control my-3" style={{ border: '1px solid #339AF0', borderRadius: '0' }} placeholder="Massage" {...register("massage", { required: true })}></textarea>
                            {errors.massage && <small style={{ color: "red" }}>This field is required</small>}
                            <br />
                            <input className="btn my-btn" value="Send" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default Contact;