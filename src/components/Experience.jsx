import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import "./portfolio.scss";
import { SectionWrapper } from "../hoc";

import { useTranslation } from "react-i18next";
import "react-vertical-timeline-component/style.min.css";
import "./portfolio.scss";
import { experience } from "../constants";


const ExperienceCard = ({ item }) => {
  const { t } = useTranslation();
  const ref = useRef();
  const [isVertical, setIsVertical] = React.useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleImageLoad = (e) => {
    const img = e.target;
    if (img.naturalHeight > img.naturalWidth) {
      setIsVertical(true);
    }
  };

  return (
    <section className="my-10">
      <div className="container">
        <div className="wrapper">
          <div className={`imageContainer ${isVertical ? 'vertical' : ''}`} ref={ref}>
            <img src={item.img} alt="" className="w-full h-auto rounded-lg" onLoad={handleImageLoad} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{t(item.title)}</h2>
            <p>{t(item.desc)}</p>
            <div className="buttons">
              <a href={`${item.link}`} target="_blank" className="demoButton">See Demo</a>
              <a href={`${item.linkGitHub}`} target="_blank" className="codeButton">
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
      <div className="progress">
        <h1>{t("Featured Works")}</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {experience.map((item) => (
        <ExperienceCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default SectionWrapper(Experience, "work");
