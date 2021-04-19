import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';

const BookingTable = ({ booking }) => {
   const bookingService = (booking.service);
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
                <td scope="row">{bookingService.title}</td>
                <td>{bookingService.mbps}</td>
                <td>${bookingService.charge}.00</td>
             <td className={`badge bg-${status}`}>{booking.process}</td>
            </tr>
        </>
    );
};

export default BookingTable;