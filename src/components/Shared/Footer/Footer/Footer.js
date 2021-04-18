import React from 'react';
import Copyright from '../Copyright/Copyright';
import Information from '../Information/Information';
import QuickLinkCol from '../QuickLinkCol/QuickLinkCol';
import StargateSocial from '../StargateSocial/StargateSocial';
import UsefulLinksCol from '../UsefulLinksCol/UsefulLinksCol';

const Footer = () => {
    return (
        <footer style={{background:'#339AF0',paddingTop:'100px'}}>
            <div className="container">
                <div className="row" >
                    <div className="col-md-3">
                        <StargateSocial></StargateSocial>
                    </div>
                    <div className="col-md-3">
                        <QuickLinkCol></QuickLinkCol>
                    </div>
                    <div className="col-md-3">
                        <UsefulLinksCol></UsefulLinksCol>
                    </div>
                    <div className="col-md-3">
                        <Information></Information>
                    </div>
                </div>
            </div>
            <hr className="m-0" style={{background:'#efefef',}} />
            <div className="container-fluid py-3">
            <Copyright></Copyright>
            </div>
        </footer>
    );
};

export default Footer;