import React, { useContext, useState } from 'react';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons'
const axios = require('axios').default;
const Review = () => {
    const [loginUser,setLoginUser] = useContext(UserContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const [uploading,setUploading] = useState(false)
    const onSubmit = data => {
        fetch('http://localhost:3001/feedback',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data,...loginUser,image:imageURL})
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                alert('Thank Your Feedback')
            }
        })
    }
    const handleImage = e => {
        setUploading(true)
        const imageData = new FormData();
        imageData.set('key','2b776b88233784a932fd8e1b0a6bd47b')
        imageData.append('image',e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url)
            setUploading(false)
          })
          .catch(function (error) {
            console.log(error);
          });
    }



    const uploadPhotoStyle = {
        padding: '10px',
        background: '#efefef',
        marginBottom: '15px',
        borderRadius: '5px',
        cursor: 'pointer',
        display: imageURL && 'none'
    }

    return (
        <section>
            <Sidebar></Sidebar>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto mt-5 pt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" className="form-control my-3" style={{ border: '0', border: '1px solid #339AF0', borderRadius: '0' }} placeholder="Your Name" {...register("name", { required: true })} />
                            {errors.name && <small style={{ color: "red" }}>This field is required</small>}
                            <input type="text" className="form-control my-3" style={{ border: '0', border: '1px solid #339AF0', borderRadius: '0' }} placeholder="Company Name, designation" {...register("company", { required: true })} />
                            {errors.company && <small style={{ color: "red" }}>This field is required</small>}
                            <textarea cols="30" rows="6" className="form-control my-3" style={{ border: '1px solid #339AF0', borderRadius: '0' }} placeholder="Description" {...register("description", { required: true })}></textarea>
                            {errors.description && <small style={{ color: "red" }}>This field is required</small>}
                             <label style={uploadPhotoStyle} htmlFor="avatar"><FontAwesomeIcon  className="me-1" icon={faCloudUploadAlt} /> Upload Photo
                                <input onChange={handleImage} id="avatar" type="file" hidden/>
                            </label>
                            {uploading && <button style={{background:'#efefef',}} className="btn d-flex align-items-center justify-content-between" type="button" disabled>
                            <span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                            Uploading...
                            </button>}
                            {imageURL && <button style={{background:'#efefef',}} className="btn d-flex align-items-center" type="button" disabled>
                            Uploaded
                            </button>}

                            <br />
                            <input className="btn my-btn" value="Submit" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;