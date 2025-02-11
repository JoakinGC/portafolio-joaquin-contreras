import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const contact = document.getElementById('contact');
    const footer = document.getElementById('footer');
    if (!contact||!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowButton(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1, 
      }
    );

    observer.observe(contact);
    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!showButton) return null;

  return (
    <a
      href="https://wa.me/34634017310" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;
