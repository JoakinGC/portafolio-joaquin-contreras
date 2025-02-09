import { useTranslation } from "react-i18next";
import { SectionWrapper } from "../hoc"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const NoteCard = () =>{

    return(
        <motion.div className='grid md:grid-cols-2 gap-4 w-full max-w-4xl'>
                <div className='border rounded-lg shadow-md p-4'>
                    <motion.h3 className='text-xl font-semibold'>Notas de FP DAM</motion.h3>
                    <motion.p className='text-gray-600'>Documentación y apuntes sobre Acceso a Datos en FP DAM.</motion.p>
                    <motion.a href='https://joakingc.github.io/notes/acceso-a-datos/buffer.html' target='_blank' className='mt-2 inline-block text-blue-500 hover:underline'>
                        Ver Notas →
                    </motion.a>
                </div>
                <div className='border rounded-lg shadow-md p-4'>
                    <h3 className='text-xl font-semibold'>Notas de JavaScript</h3>
                    <p className='text-gray-600'>Apuntes y recursos de JavaScript para el desarrollo web.</p>
                    <a href='https://joakingc.github.io/notes-JS/index.html' target='_blank' className='mt-2 inline-block text-blue-500 hover:underline'>
                        Ver Notas →
                    </a>
                </div>
            </motion.div>
    );
}

const Notes = () => {
    const i = useTranslation();
    return (
        <section  className='w-full flex flex-col items-center gap-6 p-6'>
            <motion.h2 className='text-2xl font-bold'>Mis Notas</motion.h2>
            
        </section>
    );
};

export default SectionWrapper(Notes, "notes");
