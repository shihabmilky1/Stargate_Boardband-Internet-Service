import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css'
const Sidebar = () => {
    const [loginUser,setLoginUser] = useContext(UserContext) 
    const [admin,setAdmin] = useState(false)
    const [width,setWidth] = useState(false)
    useEffect(()=>{
      fetch('https://intense-reef-39470.herokuapp.com/ifAdmin',{
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({email: loginUser.email})
      })
      .then(res => res.json())
      .then(data => setAdmin(data))
    },[])
    return (
        <>
        {!width && <button className="btn before-sidebar-btn " style={{marginLeft:width,color:'#000',fontSize:'30px',transition:'.4s'}} onClick={()=> setWidth(true)}><i class="fal fa-bars"></i></button>}
        {width && <button className="btn sidebar-btn" style={{marginLeft:width,color:'#339AF0',fontSize:'30px',transition:'.4s'}} onClick={()=> setWidth(false)}><i class="fal fa-times"></i></button>}

 <div className="sidebar-container" style={{width:width === true ? '220px' || width === true : '0px'}}>
  <div className="sidebar-logo">
    Stargate
  </div>
  <ul className="sidebar-navigation">
  {!admin && <div>
    <li className="header">Navigation</li>
   <li>
      <Link to="/dashboard/book/:serviceName">
        <i className="fal fa-shopping-cart icon" aria-hidden="true"></i> Book
      </Link>
    </li>
    <li>
      <Link to="/dashboard/bookingList">
        <i className="fad fa-server icon" aria-hidden="true"></i> Booking List
      </Link>
    </li>
  
  <li>
      <Link to="/dashboard/review">
        <i className="fal fa-comment-alt-edit icon" aria-hidden="true"></i> Review
      </Link>
    </li>
    <li>
      <Link to="/">
        <i className="fa fa-home icon" aria-hidden="true"></i> Homepage
      </Link>
    </li>
</div>}
{admin && <div>
  <li className="header">Admin Menu</li>
    <li>
      <Link to="/dashboard/admin/OrderList">
      <i className="fad fa-server icon" aria-hidden="true"></i> OrderList
      </Link>
    </li>
    <li>
      <Link to="/dashboard/admin/addService">
        <i className="fal fa-plus icon" aria-hidden="true"></i> Add Service
      </Link>
    </li>
    <li>
      <Link to="/dashboard/admin/makeAdmin">
        <i className="fal fa-user-plus icon" aria-hidden="true"></i> Make Admin
      </Link>
    </li>
    <li>
      <Link to="/dashboard/admin/manageService">
        <i className="fas fa-th-large icon" aria-hidden="true"></i> Manage Service
      </Link>
    </li>
    </div>}
  </ul>
</div>
        </>
    );
};

export default Sidebar;