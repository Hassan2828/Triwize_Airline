import React from 'react';
import Support from './Support.js';
import ManOffice from '../../assets/CallUs/ManOffice.jpeg';

const PropSupport = () => {
  return (
    <>
      <Support 
        number='1234-5678-9012' 
        message='Call our customer assistant to get deals for your travel destination.' 
        button='LEARN MORE' 
        Earn='Book more, Earn more!*' 
        triwize='TriWize Coins' 
        ManOffice={ManOffice}
      />
    </>
  );
}

export default PropSupport;