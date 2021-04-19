import React, { useEffect, useState } from 'react';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import ManageServiceList from '../ManageServiceList/ManageServiceList';

const ManageService = () => {
    const [service,setService] = useState([])
    useEffect(()=>{
        fetch('https://intense-reef-39470.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setService(data))
    },[service])
    return (
        <service>
            <Sidebar></Sidebar>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                    <h4 className="fw-bold mb-5">Manage Service</h4>
                        <table className="table table-borderless table-responsive">
                            <thead>
                                <tr>

                                    <th>Service</th>
                                    <th>MBPS</th>
                                    <th>Charge</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {service.map(service => <ManageServiceList key={service._id} service={service}></ManageServiceList>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </service>
    );
};

export default ManageService;