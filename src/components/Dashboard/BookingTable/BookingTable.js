import React from 'react';

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