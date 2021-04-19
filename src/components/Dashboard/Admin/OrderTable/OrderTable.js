import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';

const OrderTable = ({service}) => {
    const [loginUser,setLoginUser] = useContext(UserContext) 
    const [admin,setAdmin] = useState(false)
    useEffect(()=>{
      fetch('https://intense-reef-39470.herokuapp.com/ifAdmin',{
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({email: loginUser.email})
      })
      .then(res => res.json())
      .then(data => setAdmin(data))
    },[])


    const bookingService = (service.service);
    const bookingServiceData = (service.customerData);
    const process = service.process;
    let status = 'danger';
    if(process === 'Pending'){
     status = 'danger'
    }
    else if(process === 'Success'){
     status = 'success'
    }
    else if(process === 'OnGoing'){
     status = 'warning'
    }
    const handleStatus = (e,id) =>{
        fetch('https://intense-reef-39470.herokuapp.com/changeStatus',{
            method: 'PATCH',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({status:e.target.value,id})
        })
        .then(res => res.json())
        .then((data) =>{
            if(data){
                alert('Change Success')
            }
        })
    }
    return (
        <>
        <tr className="my-5 fw-bold">
            <td scope="row">{bookingServiceData.name}</td>
            <td >{bookingServiceData.email}</td>
            <td>{bookingService.title}</td>
            <td>{bookingService.mbps}</td>
            <td>${bookingService.charge}.00</td>
            <td >
                <div className="d-flex justify-content-between align-items-center">
                <select disabled={!admin} onChange={(e)=>handleStatus(e,service._id)} name="" id="" className={`fw-bold text-${status}`} style={{border: '0',outline: 'none'}} >
                    <option className={`text-danger fw-bold`}  value={service.process}>{service.process}</option>
                    <option className={`text-danger fw-bold badge`} value="Pending">Pending</option>
                    <option className={`text-warning fw-bold`} value="OnGoing">OnGoing</option>
                    <option className={`text-success fw-bold`} value="Success">Success</option>
                </select>
                </div>
            </td>
        </tr>
    </>
    );
};

export default OrderTable;