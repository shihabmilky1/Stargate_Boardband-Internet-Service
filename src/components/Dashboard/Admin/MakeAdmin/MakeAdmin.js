import React from 'react';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://intense-reef-39470.herokuapp.com/makeAdmin',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email:data.email,role:'admin'})
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                alert('Success')
            }
        })
    }
    return (
        <section>
              <Sidebar></Sidebar>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto mt-5">
                        <h4 className="fw-bold mb-5">Make Admin</h4>
                        <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-md-12">
                                <input type="email" className="form-control my-3" style={{ border: '0', border: '1px solid #339AF0', borderRadius: '0' }} placeholder="Email" {...register("email", { required: true })} />
                                {errors.email && <small style={{ color: "red" }}>This field is required</small>}
                            </div>
                            <input className="btn my-btn" value="Send" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;