import React from 'react';
import './Review.css';

const Review = (props) => {
  return (
      <div className="Review-card">
        <div className="Review-rating">
          <section className='number-rating'>
            <p>{props.rating}</p>
          </section>
          <section className='google-logo'>
            <img src={props.logo} alt="Google Logo" />
          </section>
        </div>
        <div className="Google-Reviews">
          <h3>{props.title}</h3>
          <section className='message-review'>
            <h6>
              {props.message}
              <br />
              <br />
        <span className='writer-sign'><i>{props.author}</i></span>
            </h6>
          </section>
        </div>
    </div>
  );
};
export default Review;