import React, { useState, useEffect } from 'react';
import Review from './Review.js';
import './ReviewProps.css';
import Google_logo from '../../assets/Review/Google_logo.png'; 
import Facebook from '../../assets/Review/Facebook.png';
import Star from '../../assets/Review/Star.png';

const reviews = [
{
    rating: '4.8',
    logo: Google_logo,
    title: 'Google Review',
    message: 'Amazing service! I was able to book my dream trip at a fantastic price. The customer support team was super helpful and available 24/7 to answer all my questions. I especially appreciated the transparency in pricing—no hidden fees! Highly recommend for anyone looking to save on travel.',
    author: '– Sophia L.',
},
{
    rating: '4.2',
    logo: Facebook,
    title: 'Facebook Review',
    message: 'Best travel booking experience Ive ever had! The deals they offer are unbeatable, and the team goes above and beyond to find options that match your budget. It felt so personal and stress-free. If you want great savings and excellent service, this is the platform for you!',
    author: '– Mike T.',
},
{
    rating: '4.5',
    logo: Star,
    title: 'Trustpilot Review',
    message: 'A seamless experience from start to finish. I was skeptical at first, but the customer rep got me an amazing deal on my flight and even helped me save more than I expected. Their support is top-notch, and they made the whole process easy and enjoyable. Highly recommended!',
    author: '– Emily R.',
},
];

const ReviewProps = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='Review-section'>
      <Review  
        rating={reviews[currentIndex].rating}
        logo={reviews[currentIndex].logo}
        title={reviews[currentIndex].title}
        message={reviews[currentIndex].message}
        author={reviews[currentIndex].author}
      />
        <Review  
        rating={reviews[currentIndex].rating}
        logo={reviews[currentIndex].logo}
        title={reviews[currentIndex].title}
        message={reviews[currentIndex].message}
        author={reviews[currentIndex].author}
      />
        <Review  
        rating={reviews[currentIndex].rating}
        logo={reviews[currentIndex].logo}
        title={reviews[currentIndex].title}
        message={reviews[currentIndex].message}
        author={reviews[currentIndex].author}
      />
    </div>
  );
};

export default ReviewProps;
