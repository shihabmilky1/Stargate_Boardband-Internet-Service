import React from 'react';

const Quality = ({quality}) => {
    return (
        <div className="col-md-2">
            <div class="card text-center" style={{border: '0'}}>
              <div class="card-body">
                <div>
                    {quality.icon}
                </div>
              <h6 class="card-title fw-bold">{quality.title}</h6>
              </div>
            </div>
        </div>
    );
};

export default Quality;