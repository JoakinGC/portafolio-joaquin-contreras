import React from 'react';
import { SectionWrapper } from '../hoc';

const Footer = () => {
  return (
    <footer  className=" text-black dark:text-white p-8">
      <p>© 2025 Tu Marca. Todos los derechos reservados.</p>
    </footer>
  );
};

export default SectionWrapper(Footer, "footer");
