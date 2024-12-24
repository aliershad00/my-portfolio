import React from "react";
import "./styles.scss";
import { FaFileAlt } from "react-icons/fa";
import PageHeader from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeader
        HeaderText="My Resume"
        icon={<FaFileAlt size={30} />}
      />

      <div className="resume__content">
        <Animate
          play
          duration={1}
          start={{ opacity: 0 }}
          end={{ opacity: 1 }}
        >
          <p className="resume__intro">
          As a freshly minted B.Tech Computer Science graduate, I am driven by an unwavering passion for web development. My expertise in HTML, CSS, JavaScript, and React allows me to craft compelling and intuitive web experiences. My standout projects, such as a sleek personal portfolio and a functional e-commerce platform, underscore my creativity and technical prowess. With a zeal for problem-solving and a commitment to excellence, I am excited to embark on my professional journey and bring innovative solutions to dynamic tech teams. Ready to turn challenges into opportunities and drive success in the digital realm.
          </p>
        </Animate>

        <div className="resume__sections">
          <div className="resume__section">
            <Animate
              play
              duration={1}
              delay={0.2}
              start={{ transform: "translateX(-100px)" }}
              end={{ transform: "translateX(0)" }}
            >
              <h3>Skills</h3>
              <ul>
                <li>HTML, CSS, JavaScript, React, Redux</li>
                <li>Redux, Redux Toolkit, Axios, Bootstrap, TailwindCSS, MUI</li>
                <li>Node.js, Express Js, Java, C, C++</li>
                <li>MySQL, MongoDB, SQL </li>
                <li>RESTful API, PostMan, Git & GitHub, Jwt, socket.IO, DOTENV, Cors NodeMailer & SendGrid</li>
                <li>Project Deployment Using- GitHub Pages, Render, Vercel</li>
              </ul>
            </Animate>
          </div>

          <div className="resume__section">
            <Animate
              play
              duration={1}
              delay={0.4}
              start={{ transform: "translateX(100px)" }}
              end={{ transform: "translateX(0)" }}
            >
              <h3>Projects</h3>
              <ul>
                <li>
                  <strong>Portfolio Website</strong>
                  <br />
                  <span>2024</span>
                  <p>This portfolio is a dynamic, responsive website built with React on the frontend and Node.js with Express on the backend. It provides smooth experiences across all devices, with email communication via Nodemailer with SendGrid.</p>
                </li>
                <li>
                  <strong>Online Restaurant Management</strong>
                  <br />
                  <span>2024</span>
                  <p>
                  This is a full-stack web app for streamlined restaurant management and online food ordering. Customers order food, while managers manage restaurants and create menus and oversee daily operations. Built with React.js, Redux, Material-UI, Node.js, Express.js, MongoDB, Stripe and etc.</p>
                </li>
                <li>
                  <strong>Real Time Chat Application</strong>
                  <br />
                  <span>2024</span>
                  <p>Real-Time Chat App
                  A full-stack web application for instant messaging using React.js, Redux Toolkit, Node.js, Express.js, Socket.io, and MongoDB. It offers real-time updates, secure authentication, and a responsive UI, demonstrating expertise in modern web development and scalable application design.</p>
                </li>
                <li>
                  <strong>Smart Ride Service</strong>
                  <br />
                  <span>2024</span>
                  <p>Project in Progress 
                 <p> Working on a ride-hailing platform aimed at providing on-demand transportation services similar to Uber and Ola.</p>
                  </p>
                </li>
              </ul>
            </Animate>
          </div>

          <div className="resume__section">
            <Animate
              play
              duration={1}
              delay={0.6}
              start={{ transform: "translateX(-100px)" }}
              end={{ transform: "translateX(0)" }}
            >
              <h3>Education</h3>
              <ul>
                <li>
                  <strong>B.Tech in Computer Science</strong> - Jawaharlal Nehru Technological University, Hyderabad
                  <br />
                  <span>Graduated: 2023</span>
                  <p>Specialized in Software Engineering & Web Development </p>
                </li>
              </ul>
            </Animate>
          </div>
        </div>

        <a href="/path-to-your-resume.pdf" download className="resume__download-button">
          <FaFileAlt size={20} /> Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
