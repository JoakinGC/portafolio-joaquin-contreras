import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Introduction": "Introduction",
            "Summary": "Summary",
            "name":"Joaquin",
            "heroTitle": "I am a full stack developer specializing in React - Next and React Native for cross-platform applications, and Kotlin for native Android applications. I develop dynamic user interfaces, robust mobile applications, and secure, efficient web services using Spring and Node/Express for the back-end. With experience in SQL and NoSQL databases, I focus on code quality and performance optimization to create technological solutions that add value to users.",
            "Get in touch": "Get in touch",
            "Contact": "Contact",
            "Your Name": "Your Name",
            "What's your name?":"What's your name?",
            "Your email": "Your email",
            "What is your email address?":"What is your email address?",
            "Your Message": "Your Message",
            "What you want to say?":"What you want to say?",
            "Send": "Send",
            "Sending...": "Sending...",
            "Hi, I'm Joaquin": "Hi, I'm",
            "developer full stack, user interfaces and web applications": "developer full stack, user interfaces and web applications",
            "Thank you. I will get back to you as soon as possible.": "Thank you. I will get back to you as soon as possible.",
            "Ahh, something went wrong. Please try again.": "Ahh, something went wrong. Please try again.",
            "Featured Works": "Featured Works",
            "Next.js Web Application for Intec Robots": "Next.js Web Application for Intec Robots",
            "desc1": "During my time at Intec Robots, I worked simultaneously on three projects using agile methodologies. I was part of a team responsible for developing a web application with Next.js 14. I learned to use Next.js and WebSockets for real-time communications and to create scalable web systems.",
            "React Native Application": "React Native Application",
            "desc2": "I worked on the development of a React Native application for visit management. In this project, I improved my skills in React Native, development best practices, and the integration of third-party services such as Google Calendar and video streaming.",
            "Kotlin Application for Robot Control": "Kotlin Application for Robot Control",
            "desc3": "With Android Compose, I helped improve an application to control the mini bot. In this project, I learned about different architectures like MVVM and explored the potential of Kotlin.",
            "Saas Posdcast": "Saas Podcast",
            "desc4": "SaaS for generating podcasts with real or AI voices. Create unique images for each episode and enjoy various podcasts on a Next.js platform.",
            "Paw Care - Veterinary System": "Paw Care - Veterinary System",
            "desc5": "Web app for managing veterinary appointments, clients, and diagnostics. Includes pet history, online shopping with PayPal, virtual assistant, and breed recognition with AI.",
            "Library App": "Library App",
            "desc6": "Web app for managing and searching books in a library. Supervise employees and connect with PowerBI for productivity graphs.",
            "BMI App": "BMI App",
            "desc7": "Easily calculate your BMI with just two inputs. Simple and attractive design.",
            "Pet Recognition AI": "Pet Recognition AI",
            "desc8": "App to identify if a pet is a dog or a cat using AI.",
            "My work": "My Projects",
            "Projects.": "Projects.",
            "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.": "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
            "tecnologies Title":'Technologies',
            "navBar1":"About",
            "navBar2":"Work",
            "navBar3":"Contact",
        }
    },
    es: {
        translation: {
            "Introduction": "Introducción",
            "Summary": "Resumen",
            "name":"Joaquin",
            "heroTitle": "Soy un desarrollador full stack especializado en React - Next y React Native para aplicaciones multiplataforma, y en Kotlin para aplicaciones nativas de Android. Desarrollo interfaces de usuario dinámicas, aplicaciones móviles robustas y servicios web seguros y eficientes utilizando Spring y Node/Express para el backend. Con experiencia en bases de datos SQL y NoSQL, me enfoco en la calidad del código y la optimización del rendimiento para crear soluciones tecnológicas que agreguen valor a los usuarios.",
            "Get in touch": "Ponte en contacto",
            "Contact": "Contacto",
            "Your Name": "Tu Nombre",
            "What's your name?":"¿Cuál es tu nombre?",
            "Your email": "Tu Correo Electrónico",
            "What is your email address?":"¿Cuál es su dirección de correo electrónico?",
            "Your Message": "Tu Mensaje",
            "What you want to say?":"¿Qué es lo que quieres comunicar?",
            "Send": "Enviar",
            "Sending...": "Enviando...",
            "Hi, I'm Joaquin": "Hola, soy Joaquin",
            "developer full stack, user interfaces and web applications": "desarrollador full stack, interfaces de usuario y aplicaciones web",
            "Thank you. I will get back to you as soon as possible.": "Gracias. Me pondré en contacto contigo lo antes posible.",
            "Ahh, something went wrong. Por favor, inténtalo de nuevo.": "Ahh, algo salió mal. Por favor, inténtalo de nuevo.",
            "Featured Works": "Trabajos Destacados",
            "Next.js Web Application for Intec Robots": "Aplicación Web Next.js para Intec Robots",
            "desc1": "Durante mi tiempo en Inter Robots, trabajé simultáneamente en tres proyectos utilizando metodologías ágiles. Formé parte de un equipo encargados de desarrollar una aplicación web con Next.js 14. Aprendí a usar Next.js y WebSockets para comunicaciones en tiempo real y a crear sistemas web escalables.",
            "React Native Application": "Aplicación React Native",
            "desc2": "Trabajé en el desarrollo de una aplicación de React Native para la gestión de visitas. En este proyecto, mejoré mis habilidades en React Native, buenas prácticas de desarrollo y la integración de servicios de terceros como Google Calendar y transmisión de video.",
            "Kotlin Application for Robot Control": "Aplicación Kotlin para Control de Robots",
            "desc3": "Con Android Compose, ayudé a mejorar una aplicación para controlar el mini bot. En este proyecto, aprendí sobre diferentes arquitecturas como MVVM y exploré el potencial de Kotlin.",
            "Saas Posdcast": "Saas Podcast",
            "desc4": "SaaS para generar podcasts con voces reales o de IA. Crea imágenes únicas para cada episodio y disfruta de varios podcasts en una plataforma Next.js.",
            "Paw Care - Veterinary System": "Paw Care - Sistema Veterinario",
            "desc5": "Aplicación web para gestionar citas veterinarias, clientes y diagnósticos. Incluye historial de mascotas, compras en línea con PayPal, asistente virtual y reconocimiento de razas con IA.",
            "Library App": "Aplicación de Biblioteca",
            "desc6": "Aplicación web para gestionar y buscar libros en una biblioteca. Supervisa empleados y conéctate con PowerBI para gráficos de productividad.",
            "BMI App": "Aplicación de IMC",
            "desc7": "Calcula fácilmente tu IMC con solo dos entradas. Diseño simple y atractivo.",
            "Pet Recognition AI": "IA de Reconocimiento de Mascotas",
            "desc8": "Aplicación para identificar si una mascota es un perro o un gato usando IA.",
            "My work": "Mis proyectos",
            "Projects.": "Proyectos.",
            "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.": "Los siguientes proyectos muestran mis habilidades y experiencia a través de ejemplos del mundo real de mi trabajo. Cada proyecto se describe brevemente con enlaces a repositorios de código y demostraciones en vivo. Refleja mi capacidad para resolver problemas complejos, trabajar con diferentes tecnologías y gestionar proyectos de manera efectiva.",
            "tecnologies Title":"Tecnologías",
            "navBar1":"Sobre mi",
            "navBar2":"Experiencia",
            "navBar3":"Contacto",
        }
    }
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
