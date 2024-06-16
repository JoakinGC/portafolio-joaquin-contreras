import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import "./portfolio.scss";
import { SectionWrapper } from "../hoc";
import intecWeb from "../assets/intecWeb.png";
import intecCompanian from "../assets/inteCCompanian.png";

const items = [
  {
    id: 1,
    title: "Next.js Web Application for Intec Robots",
    img: intecWeb,
    desc: "Durante mi tiempo en Inter Robots, trabajé simultáneamente en tres proyectos utilizando metodologías ágiles. Formé parte de un equipo encargado de desarrollar una aplicación web con Next.js 14. Aprendí a usar Next.js y WebSockets para comunicaciones en tiempo real y a crear sistemas web escalables.",
    link: "https://www.youtube.com/watch?v=FUG6aFM8jdk",
    linkGitHub: "https://github.com/IntecRobots"
  },
  {
    id: 2,
    title: "React Native Application",
    img: intecCompanian,
    desc: "Trabajé en el desarrollo de una aplicación de React Native para la gestión de visitas. En este proyecto, mejoré mis habilidades en React Native, buenas prácticas de desarrollo y la integración de servicios de terceros como Google Calendar y transmisión de video.",
    link: "https://www.youtube.com/watch?v=FUG6aFM8jdk",
    linkGitHub: "https://github.com/IntecRobots"
  },
  {
    id: 3,
    title: "Kotlin Application for Robot Control",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Con Android Compose, ayudé a mejorar una aplicación para controlar el mini bot. En este proyecto, aprendí sobre diferentes arquitecturas como MVVM y exploré el potencial de Kotlin.",
    link: "https://www.youtube.com/watch?v=FUG6aFM8jdk",
    linkGitHub: "https://github.com/IntecRobots"
  },
];

const ExperienceCard = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt=""  />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttons">
              <a href={`${item.link}` } target="_blank" className="demoButton">See Demo</a>
              <a href={`${item.linkGitHub}`} target="_blank" className="codeButton">
                <FaGithub /> View Code
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
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
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <ExperienceCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default SectionWrapper(Experience, "work");
