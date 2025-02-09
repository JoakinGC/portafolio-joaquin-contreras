import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FaExternalLinkSquareAlt } from "react-icons/fa";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link
}) => {
  const { t } = useTranslation();

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} initial="hidden" animate="show">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`${styles.cardBg} p-5 rounded-2xl sm:w-[360px] w-full`}
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end align-middle m-3 card-img_hover'>
            
              <div 
                onClick={() => window.open(link, "_blank")} 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-black dark:bg-white cursor-pointer shadow-lg hover:scale-110 transition-transform"
              >
              <FaExternalLinkSquareAlt className="text-white dark:text-black w-6 h-6" />
            </div>
          
            <div
                onClick={() => window.open(source_code_link, "_blank")}
                className=" bg-gradient-to-r from-gray-900 to-gray-700 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2 hover:scale-110 transition-transform"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <a target="_blank" href={link}>
            <h3 className={`${styles.cardText} font-bold text-[24px]`}>
              {t(name)}</h3>
            </a>
          <p className='mt-2 text-secondary text-[14px] '>{t(description)}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()} initial="hidden" animate="show">
        <p className={`${styles.sectionSubText} `}>{t('My work')}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t('Projects.')}</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)} initial="hidden" animate="show"
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto'
        >
          {t('Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.')}
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
