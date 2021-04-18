import React from 'react';

const Information = () => {
    return (
        <div className="text-white">
        <h5 className="fw-bold mb-4">Information</h5>
            <ul className="list-unstyled">
                <li className="my-3">
                    <p className="text-white mb-0">Give Us A Call</p>
                    <h6 className="fw-bold">+(62) 800-567-8990</h6>
                </li>
                <li className="my-3">
                <p className="text-white mb-0">Send Us A Message</p>
                    <h6 className="fw-bold">test@email.com</h6>         
              </li>
                <li className="my-3">
                <p className="text-white mb-0">Official Location</p>
                    <h6 className="fw-bold">23 Road London , UK</h6>           
                </li>
                <li className="my-3">
                <p className="text-white mb-0">Opening Hours</p>
                    <h6 className="fw-bold">09:00 AM - 18:00 PM</h6>
                    </li>
            </ul>
        </div>
    );
};

export default Information;