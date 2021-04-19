import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import BookingTable from '../BookingTable/BookingTable';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import OrderList from '../../Admin/OrderList/OrderList';
const BookingList = () => {
    const [loginUser, setLoginUser] = useContext(UserContext)
    const [bookingList, setBookingList] = useState([])
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
//Order Load
    useEffect(() => {
        fetch('https://intense-reef-39470.herokuapp.com/getOrder',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({email: loginUser.email})
        })
            .then(res => res.json())
            .then(data => setBookingList(data))
    }, [bookingList])
    return (
        <>
        {!admin ? <section>
            <Sidebar></Sidebar>
            <div className="container">
                <div className="row">
                     {bookingList.length === 0 ? <div className="text-center" style={{ paddingBottom: '100px', paddingTop: '100px' }}>
                        <h1 className="">You Have No Order</h1>
                    </div>
                        :
                        <div className="col-md-10 mx-auto mt-5">
                            <h4 className="fw-bold mb-5">Order List</h4>
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
                        </div> } 
                </div>
            </div>
        </section> : <OrderList></OrderList>}
        </>
    );
};

export default BookingList;