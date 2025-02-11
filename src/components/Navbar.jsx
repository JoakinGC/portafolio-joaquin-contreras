import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { styles } from "../styles";
import { navLinks,languages } from "../constants";
import { logo, menu, close } from "../assets";
import ThemeToggle from "./ThemeToggle";


const Navbar = () => {
  const { i18n, t } = useTranslation();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? `${styles.bg}` : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-black dark:text-white text-[18px] font-bold cursor-pointer flex '>
            Joaquin &nbsp;
            <span className='sm:block hidden'> | Full Stack</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? `${styles.cardText}` : "text-secondary"
              } hover:text-black dark:hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.id)}
            >
              <a href={`#${nav.id}`}>{t(nav.title)}</a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
        
            
          
        <div className='sm:flex hidden gap-4'>
          <button onClick={() => changeLanguage('en')} className='text-black dark:text-white'>EN</button>
          <button onClick={() => changeLanguage('es')} className='text-black dark:text-white'>ES</button>
        </div>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <ThemeToggle />
        </div>
        
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.id);
                  }}
                >
                  <a href={`#${nav.id}`}>{t(nav.title)}</a>
                </li>
              ))}
              {languages.map((lan) =>(
                <li key={lan.id} className='w-full'>
                  <button 
                  onClick={() => changeLanguage(lan.value)} 
                  className='font-poppins font-medium cursor-pointer text-[16px] text-secondary'
                  >{lan.value.toUpperCase()}
                  </button>    
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
