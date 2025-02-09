import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { motion, AnimatePresence } from "framer-motion"; 
import DraggableTech from "./DraggableTech";
import { SectionWrapper } from "../hoc";
import { tech } from "../constants";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";
import { FaCircleChevronUp, FaCircleChevronDown } from "react-icons/fa6";

const categoryVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Tech = () => {
  const { t } = useTranslation();
  const [openCategory, setOpenCategory] = useState(null); 

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index); 
  };

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
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className={`text-6xl font-bold text-center mb-8 ${styles.sectionHeadText}`}
          >
            {t("tecnologies Title")}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {tech.map((category, index) => (
              <motion.div
                key={category.name}
                id={`${category.name}`}
                variants={categoryVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`${styles.cardBg} p-6 rounded-xl shadow-md`}
                onClick={() => toggleCategory(index)}
              >
                <h3 className={`${styles.cardText} text-2xl font-semibold mb-4 flex justify-between items-center`}>
                  {category.name}
                  {openCategory === index 
                    ? <FaCircleChevronUp className="w-5 h-5" /> 
                    : <FaCircleChevronDown className="w-5 h-5" />
                  }
                </h3>

                <AnimatePresence>
                  {openCategory === index && (
                    <motion.div
                      key="technologies-list" 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 lg:grid-cols-3 gap-4 overflow-hidden"
                    >
                      {category.technologies.map((technology, i) => (
                        <DraggableTech key={technology.name} technology={technology} index={i} />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </DndProvider>
  );
};

export default SectionWrapper(Tech, "");
