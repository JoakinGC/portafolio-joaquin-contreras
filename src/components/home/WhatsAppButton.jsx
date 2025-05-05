import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(true);
  const [showConsent, setShowConsent] = useState(false);
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

  const handleClick = (e) => {
    e.preventDefault(); 
    setShowConsent(true);
  };

  const handleAccept = () => {
    window.open('https://wa.me/34634017310', '_blank');
    setShowConsent(false);
  };

  const handleCancel = () => {
    setShowConsent(false);
  };

  if (!showButton) return null;

  return (
    <>
      <a
        href="#"
        onClick={handleClick}
        className="fixed bottom-4 left-4 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 duration-300"
      >
        <FaWhatsapp size={32} />
      </a>

      {showConsent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Aviso de Protección de Datos</h2>
            <p className="text-sm text-gray-700 mb-4">
              Al hacer clic en "Aceptar", serás redirigido a WhatsApp. Tu número y mensaje serán enviados a través de los servidores de WhatsApp. 
              Para más información, consulta nuestra <a href="/politica-privacidad" className="underline text-blue-600">Política de Privacidad</a> y la de <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">WhatsApp</a>.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={handleCancel}
                className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
