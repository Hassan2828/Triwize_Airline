import React from 'react';
import './NewYorkToDelhi.css';
import green from '../../assets/newYork/green.png';
import headsets from '../../assets/newYork/headsets.png';
import eye from '../../assets/newYork/eye.png';
import percentage from '../../assets/newYork/percentage.png';

const NewYorkToDelhi = () => {
  return (
    <>
    <div className='new-york'>
    <div className="new-container">
        <div className='york-to-delhi'>
            <h3>New York To Delhi</h3>
            <h6>Get best deals</h6>
            <p>Connect to our customer representative by filling out the details and save more on your flight.</p>
        </div>
        <div className='green-love'>
        <img src={green} alt="" />
        </div>

        <div className='why-triwize'>
            <h2>Why Triwize?</h2>
            <div className='triwize-contain'>
                <div className="head-set">
                    <img src={headsets} alt="" />
                    <p>24/7 Customer Support</p>
                </div>
                <div className="head-set">
                    <img src={eye} alt="" />
                    <p>Transparent Pricing</p>
                </div>
                <div className="head-set">
                    <img src={percentage} alt="" />
                    <p>Unlock Exclusive Deals</p>
                </div>
            </div>

        </div>

    </div>
    <div className="call-component">
        <h3>Fill in the details</h3>
        <div className="form-container">

        <div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
  </div>
</div>


<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="New York" aria-label="First name" />
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="New Delhi(IGI)" aria-label="Last name" />
  </div>
</div>

<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="July 10, 2025" aria-label="First name" />
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Return Date" aria-label="Last name" />
  </div>
</div>

<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="Email address*" aria-label="First name" />
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Phone Number*" aria-label="Last name" />
  </div>
</div>


  <div class="col-12">
    <button class="btn btn-primary" type="submit">Subscribe</button>
  </div>


        </div>

    </div>
    </div>
    </>
  )
}

export default NewYorkToDelhi