import React from 'react';

const OrderTable = ({booking}) => {
    const bookingService = (booking.service);
    const bookingServiceData = (booking.customerData);
    const process = booking.process;
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
        fetch('http://localhost:3001/changeStatus',{
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
                <select onChange={(e)=>handleStatus(e,booking._id)} name="" id="" className={`fw-bold text-${status}`} style={{border: '0',outline: 'none'}} >
                    <option className={`text-danger fw-bold`}  value={booking.process}>{booking.process}</option>
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