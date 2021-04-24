import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import firebase from "firebase/app";
import "firebase/auth";
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
    const handleSigOut = () => {
      firebase.auth().signOut().then(() => {
        setLoginUser({})
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <Link className="navbar-brand" to="/">StarGate</Link>
    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
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
      {loginUser.email && <div className="ms-auto align-items-center">
         <div className="d-flex justify-content-center align-items-center">
         <h5 className="text-white fw-bold">Welcome</h5><h6 className="text-white fw-bold ms-2">{loginUser.name}</h6>
         </div>
          <button onClick={handleSigOut} className="btn my-btn" >Logout</button>
        </div>}
      </div>
    </div>
  </div>
</nav>
        </>
    );
};

export default Navbar;