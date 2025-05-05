import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { SectionWrapper } from "../../hoc";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { notes } from "../../constants";


const NoteCard = ({ note,t }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    
    return (
        <motion.div 
            ref={ref}
            className='border rounded-lg shadow-md p-4 container bg-white-100 dark:bg-black-100'
            whileHover={{ scale: 1.05, rotate: 2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ y }}
        >
            <h3 className='text-xl font-semibold text-black dark:text-white'>{t(note.title)}</h3>
            <p className='text-gray-600'>{t(note.description)}</p>
            <a 
                href={note.link} 
                target='_blank' 
                rel='noopener noreferrer' 
                className='mt-2 inline-block text-blue-500 hover:underline'
            >
                Ver Notas →
            </a>
        </motion.div>
    );
};

const Notes = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const { t } = useTranslation();

    return (
        <section ref={ref} className='w-full flex flex-col items-center gap-6 p-6'>
            <motion.h2 
                className='text-2xl font-bold dark:black'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {t("Mis Notas")}
            </motion.h2>
            <motion.div style={{ scaleX }} className='w-full h-1 bg-blue-500'></motion.div>
            <motion.div 
                className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {notes.map((note, index) => (
                    <NoteCard key={index} note={note} t={t}/>
                ))}
            </motion.div>
        </section>
    );
};

export default SectionWrapper(Notes, "notes");