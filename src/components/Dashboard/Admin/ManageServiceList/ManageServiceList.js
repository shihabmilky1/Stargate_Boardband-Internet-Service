import React from 'react';

const ManageServiceList = ({service}) => {
    const handleDelete = (id) => {
        fetch(`https://intense-reef-39470.herokuapp.com/deleteService/${id}`,{
            method: 'DELETE',
            headers:{'Content-Type': 'application/json'},
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Delete Success')
            }
        })
    }
    return (
        <tr>
            <td scope="row">{service.title}</td>
            <td>{service.mbps}</td>
            <td>${service.charge}.00</td>
            <td><button onClick={()=>handleDelete(service._id)} className="btn btn-danger"><i className="fal fa-trash-alt"></i></button></td>
        </tr>
    );
};

export default ManageServiceList;