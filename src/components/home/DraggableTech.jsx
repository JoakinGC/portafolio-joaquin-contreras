import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const DraggableTech = ({ technology, index }) => {
  const invert = (technology.name === "Three JS") ? "invert dark:invert-0":"";
  return (
    <motion.div variants={{ opacity: 0, y: 50 }}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='w-36 h-36 flex justify-center items-center border border-black-200 dark:border-white rounded-lg transition-transform transform hover:scale-110 cursor-move'
      >
        <div className="w-16 h-16">
          <img src={technology.icon} alt={technology.name} className={`w-full h-full object-contain ${invert}`} />
          <p className="text-[14px] text-black dark:text-white">{technology.name}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default DraggableTech;
