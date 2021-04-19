import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbar.css'
const Navbar = () => {
  const [loginUser,setLoginUser] = useContext(UserContext)
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
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <Link className="navbar-brand" to="/">StarGate</Link>
    <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse my-nav" id="navbarNavDropdown">
      <ul className="navbar-nav m-auto">
        <li className="nav-item px-3">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="#about">About Us</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link" to="/dashboard/bookingList">Dashboard</Link>
        </li>
      </ul>
      <div>
      {!loginUser.email && <div className=" ms-auto">
          <Link to="/login" className="btn my-btn" >Login</Link>
        </div>}
      {loginUser.email && <div className=" ms-auto">
          <button onClick={()=> setLoginUser({})} className="btn my-btn" >Logout</button>
        </div>}
      </div>
    </div>
  </div>
</nav>
        </>
    );
};

export default Navbar;