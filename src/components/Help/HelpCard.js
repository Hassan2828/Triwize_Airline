import React from 'react'
import Help from './Help'
import help_girl from '../../assets/help/Help_girl.png';
import coin_img from '../../assets/help/coin_img.png';

const HelpCard = () => {
  return (
    <div>
    <Help heading ='Change or Cancel Your Booking?'
    paragraph='If you need assistance with changes or cancellations to your current booking, our customer support team is just a call away.'
    emergency='1234-5678-9012'
    girl={help_girl}
    help='Share your details with us, and our customer representative will connect with you to guide you on how to redeem your coins.'
    smallHead='Save More with TriWize Coins!'
    coin_img={coin_img}
    />
    </div>
  )
}

export default HelpCard