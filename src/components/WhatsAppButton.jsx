import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(true);
  const threshold = 2000; 

  const checkScrollPosition = () => {
    const totalHeight = document.documentElement.offsetHeight;
    const currentBottomPosition = window.innerHeight + window.scrollY;
    
    if (currentBottomPosition >= totalHeight - threshold) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition();
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  if (!showButton) return null;

  return (
    <a
      href="https://wa.me/34634017310"  
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 duration-300"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;
