import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderMain from '../HraderMain/HeaderMain';
import './Header.css'
const Header = () => {
    return (
        <header>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </header>
    );
};

export default Header;