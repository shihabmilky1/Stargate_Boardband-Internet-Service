import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {
    const [width,setWidth] = useState(false)
    return (
        <>
        {!width && <button className="btn before-sidebar-btn " style={{marginLeft:width,color:'#000',fontSize:'30px',transition:'.4s'}} onClick={()=> setWidth(true)}><i class="fal fa-bars"></i></button>}
        {width && <button className="btn sidebar-btn" style={{marginLeft:width,color:'#339AF0',fontSize:'30px',transition:'.4s'}} onClick={()=> setWidth(false)}><i class="fal fa-times"></i></button>}

 <div class="sidebar-container" style={{width:width === true ? '220px' || width === true : '0px'}}>
  <div class="sidebar-logo">
    Stargate
  </div>
  <ul class="sidebar-navigation">
    <li class="header">Navigation</li>
    <li>
      <Link to="/dashboard/book/:serviceName">
        <i class="fal fa-shopping-cart icon" aria-hidden="true"></i> Book
      </Link>
    </li>
    <li>
      <Link to="/dashboard/bookingList">
        <i class="fad fa-server icon" aria-hidden="true"></i> Booking List
      </Link>
    </li>
    <li>
      <Link to="/dashboard/review">
        <i class="fal fa-comment-alt-edit icon" aria-hidden="true"></i> Review
      </Link>
    </li>
    <li>
      <Link to="/">
        <i class="fa fa-home icon" aria-hidden="true"></i> Homepage
      </Link>
    </li>
    <li class="header">Admin Menu</li>
    <li>
      <a href="#">
        <i class="fa fa-users icon" aria-hidden="true"></i> Friends
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fa fa-cog icon" aria-hidden="true"></i> Settings
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fa fa-info-circle icon" aria-hidden="true"></i> Information
      </a>
    </li>
  </ul>
</div>

{/* <div class="content-container">

  <div class="container-fluid">

    <div class="jumbotron">
      <h1>Navbar example</h1>
      <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
      <p>To see the difference between static and fixed top navbars, just scroll.</p>
      <p>
        <a class="btn btn-lg btn-primary" href="../../components/#navbar" role="button">View navbar docs &raquo;</a>
      </p>
    </div>

  </div>
</div> */}
        </>
    );
};

export default Sidebar;