import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import BookingTable from '../BookingTable/BookingTable';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
const BookingList = () => {
    const [loginUser, setLoginUser] = useContext(UserContext)
    const [bookingList, setBookingList] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/getOrder',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({email: loginUser.email})
        })
            .then(res => res.json())
            .then(data => setBookingList(data))
    }, [bookingList])
    return (
        <section>
            <Sidebar></Sidebar>
            <div className="container">
                <div className="row">
                    {bookingList.length === 0 ? <div className="text-center" style={{ paddingBottom: '100px', paddingTop: '100px' }}>
                        <h1 className="">You Have No Order</h1>
                    </div>
                        :
                        <div className="col-md-10 mx-auto mt-5">
                            <h4 className="fw-bold mb-5">Booking List</h4>
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>Service</th>
                                        <th>MBPS</th>
                                        <th>Charge</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookingList.map(booking => <BookingTable key={booking._id} booking={booking}></BookingTable>)}
                                </tbody>
                            </table>
                        </div>}
                </div>
            </div>
        </section>
    );
};

export default BookingList;