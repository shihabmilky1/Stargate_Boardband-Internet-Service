import React from 'react';
import { Link } from 'react-router-dom';
import './QuickLinkCol.css'
const QuickLinkCol = () => {
    return (
        <div className="text-white">
            <h5 className="fw-bold mb-4">Quick Links</h5>
            <div className="footerLink-nav">
                <ul className="list-unstyled">
                    <li>
                        <Link to="">About Us</Link>
                    </li>
                    <li>
                        <Link to="">Services</Link>
                    </li>
                    <li>
                        <Link to="">Appointment</Link>
                    </li>
                    <li>
                        <Link to="">Our Plans</Link>
                    </li>
                    <li>
                        <Link to="" >Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default QuickLinkCol;