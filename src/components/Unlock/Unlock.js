import React from 'react';
import './Unlock.css';
import parashot from '../../assets/Unlock/parashot.png';

const Unlock = () => {
  return (
    <div className='unlock'>
        <div className="unlock-card">
        <div className="unlock-container">
                <div className="unlock-contain">
    <div className="unlock-sub-container">
        <h2>Unlock Your <span> $50 Travel Discount!</span></h2>
        <p>Planning your next adventure? Connect with our customer assistant now to grab an exclusive $50 off on your next flight booking!</p>
    </div>
<div className=''>

<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address*</label>
</div>

<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Phone number</label>
</div>

<div class="col-11">
    <button class="btn btn-primary" type="submit">Subscribe</button>
  </div>

</div>

           
                </div>
            </div>
            <div className="unlock-images">

            </div>
        </div>
        <div className='parashot'>
       <img src={parashot} alt="" />
        </div>
    </div>
  )
}

export default Unlock