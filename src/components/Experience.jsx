import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SectionWrapper } from "../hoc";
import { useTranslation } from "react-i18next";
import { experience } from "../constants";

const ExperienceCard = ({ item }) => {
  const { t } = useTranslation();
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="my-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 w-full mb-4 lg:mb-0" ref={ref}>
            <img src={item.img} alt="" className="w-full h-auto rounded-lg" />
          </div>
          <motion.div className="lg:w-1/2 w-full lg:pl-10" style={{ y }}>
            <h2 className="text-2xl font-bold mb-2">{t(item.title)}</h2>
            <p className="mb-4">{t(item.desc)}</p>
            <div className="flex space-x-4">
              <a href={`${item.link}`} target="_blank" className="btn btn-primary">See Demo</a>
              <a href={`${item.linkGitHub}`} target="_blank" className="btn btn-secondary flex items-center">
                <FaGithub className="mr-2" /> View Code
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const { t } = useTranslation();
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress mb-10">
        <h1 className="text-3xl font-bold">{t("Featured Works")}</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {experience.map((item) => (
        <ExperienceCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default SectionWrapper(Experience, "work");
