import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { motion } from "framer-motion";
import DraggableTech from "./DraggableTech";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useTranslation } from "react-i18next";

const Tech = () => {
  const {t} = useTranslation()
  return (
    <DndProvider backend={HTML5Backend}>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative my-10 max-w-7xl mx-auto z-0" 
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">{t('tecnologies Title')}</h2>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div key={0} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
            {technologies.map((technology, index) => (
              <DraggableTech key={technology.name} technology={technology} index={index} />
            ))}
          </div>
        </motion.div>
      </motion.section>
    </DndProvider>
  );
};

export default SectionWrapper(Tech, "");
