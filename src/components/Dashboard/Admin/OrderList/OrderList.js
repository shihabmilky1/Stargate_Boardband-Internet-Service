import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import OrderTable from '../OrderTable/OrderTable';

const OrderList = () => {
    const [loginUser, setLoginUser] = useContext(UserContext)
    const [orderList, setOrderList] = useState([])
    useEffect(() => {
        fetch('https://intense-reef-39470.herokuapp.com/getOrder',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({email: loginUser.email})
        })
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [orderList])
    return (
        <section>
        <Sidebar></Sidebar>
        <div className="container">
            <div className="row">
                {orderList.length === 0 ? <div className="text-center" style={{ paddingBottom: '100px', paddingTop: '100px' }}>
                    <h1 className="">You Have No Order</h1>
                </div>
                    :
                    <div className="col-md-10 mx-auto mt-5">
                        <h4 className="fw-bold mb-5">Order List</h4>
                        <table className="table table-borderless table-responsive-sm">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Service</th>
                                    <th>MBPS</th>
                                    <th>Charge</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderList.map(service => <OrderTable key={service._id} service={service}></OrderTable>)}
                            </tbody>
                        </table>
                    </div>}
            </div>
        </div>
    </section>
    );
};

export default OrderList;