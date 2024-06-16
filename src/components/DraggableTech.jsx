import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const DraggableTech = ({ technology, index }) => {
  return (
    <motion.div variants={{ opacity: 0, y: 50 }}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='w-36 h-36 flex justify-center items-center border border-gray-300 rounded-lg transition-transform transform hover:scale-110 cursor-move'
      >
        <div className="w-16 h-16">
          <img src={technology.icon} alt={technology.name} className="w-full h-full object-contain" />
          <p className="text-[14px]">{technology.name}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default DraggableTech;
