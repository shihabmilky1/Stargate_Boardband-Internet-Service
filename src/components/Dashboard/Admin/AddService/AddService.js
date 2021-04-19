import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../../../Shared/Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://intense-reef-39470.herokuapp.com/addService',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Service Added Successfully')
            }
        })
    }
    return (
        <section>
            <Sidebar></Sidebar>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto mt-5">
                    <h4 className="fw-bold mb-5">Add Service</h4>
                        <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-md-12">
                                <input type="text" className="form-control my-3" style={{ border: '0', border: '1px solid #339AF0', borderRadius: '0' }} placeholder="Service Title" {...register("title", { required: true })} />
                                {errors.title && <small style={{ color: "red" }}>This field is required</small>}
                            </div>
                            <div className="col-md-12">
                                <input type="number" className="form-control my-3" style={{ border: '0', border: '1px solid #339AF0', borderRadius: '0' }} placeholder="Price" {...register("charge", { required: true })} />
                                {errors.charge && <small style={{ color: "red" }}>This field is required</small>}
                            </div>
                            <div className="col-md-12">
                                <input type="number" className="form-control my-3" style={{ border: '0', border: '1px solid #339AF0', borderRadius: '0' }} placeholder="MBPS" {...register("mbps", { required: true })} />
                                {errors.mbps && <small style={{ color: "red" }}>This field is required</small>}
                            </div>
                            <br />
                            <input className="btn my-btn" value="Send" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddService;