import React from 'react';

const TestimonialCard = ({feedback}) => {
    return (
        <div className="col-md-5 mb-3" >
            <div class="card shadow pb-4 px-2 h-100" style={{border:'0'}}>
            <div class="card-body">
              <div className="d-flex justify-content-start align-items-center">
              {feedback.image && <img class="img-fluid me-3" style={{width:'50px',height:'50px',borderRadius:'50%'}} src={feedback.image} alt=""/>}
                <div>
                <h5 class="card-title fw-bold mb-0">{feedback.data.name}</h5>
                <small class="card-text fw-bold">{feedback.data.company}</small>
                </div>
              </div>
              <p className="mt-3 text-secondary">{feedback.data.description}</p>
              </div>
            </div>
        </div>
    );
};

export default TestimonialCard;