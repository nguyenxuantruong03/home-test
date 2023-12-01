"use client"
import React, { useState, useEffect } from 'react';
import './backtoTop.scss'
import { ChevronUp } from 'lucide-react';
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = window.scrollY; // Use window.scrollY to get the scroll position
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []); // Add an empty array as the second argument to run this effect only once

  return (
    <div className='backtoTop'>
      <ChevronUp  
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
        className='backtoTop-icon'
        width="3"
      />
    </div>
  );
};

export default BackToTop;
