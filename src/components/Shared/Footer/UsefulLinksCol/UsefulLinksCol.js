import React from 'react';
import { Link } from 'react-router-dom';

const UsefulLinksCol = () => {
    return (
        <div className="text-white">
        <h5 className="fw-bold mb-4">Useful Links</h5>
        <div className="footerLink-nav">
            <ul className="list-unstyled">
                <li>
                    <Link to="">Privacy Policy</Link>
                </li>
                <li>
                    <Link to="">Terms and Conditions</Link>
                </li>
                <li>
                    <Link to="">Disclaimer</Link>
                </li>
                <li>
                    <Link to="">Support</Link>
                </li>
                <li>
                    <Link to="" >FAQ</Link>
                </li>
            </ul>
        </div>
    </div>
    );
};

export default UsefulLinksCol;