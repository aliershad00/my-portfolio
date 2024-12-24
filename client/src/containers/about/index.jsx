import React from "react";
import "./styles.scss";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeaderContent";

import { Animate } from "react-simple-animate";
import {
  DiAndroid,
  DiApple,
  DiWindows,
  DiLinux,
  DiWebplatform,
} from "react-icons/di";

const personalDetails = [
  {
    label: "Name : ",
    value: "Ershad Ali",
  },
  {
    label: "Age : ",
    value: "26",
  },
  {
    label: "Address : ",
    value: "India",
  },
  {
    label: "Email : ",
    value: "aliershad056@gmail.com",
  },
  {
    label: "Contact No : ",
    value: "+91 8637358413",
  },
];
const educationalDetails = [
  {
    label: "Degree : ",
    value: "B.Tech in Computer Science and Engineering",
  },
  {
    label: "University : ",
    value: "Jawaharlal Nehru Technological University Hyderabad",
  },
  {
    label: "Graduation Year : ",
    value: "2023",
  },
];

const jobsummary =
  "Dynamic Web Developer with B.Tech in Computer Science I am a recent B.Tech graduate in Computer Science, passionate about creating innovative web applications. Skilled in HTML, CSS, JavaScript, React, and Node.js, I design user-centric interfaces and robust backends. My portfolio highlights diverse projects that bring creative ideas to life. I thrive in collaborative environments and am dedicated to exceptional quality.Ready to join a dynamic team and build something extraordinary together!";
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeader HeaderText="About Me" icon={<BsInfoCircleFill size={40} />} />
      <div className="about__content">
        <div className="about__content__PersonalWrapper">
          {" "}
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-1080px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Web Developer</h3>
            <p>{jobsummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateY(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="info_div">
            
            <ul>
            <h3 className="personalinformationHeaderText">
              Personal Information
            </h3>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
            
            <ul>
            <h3 className="educationalinformationHeaderText">
              Educational Information
            </h3>
              {educationalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
            </div>
          </Animate>
        </div>
        <div className="about__content__serviceswraper">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(700px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
          <div className="about__content__serviceswraper__innerContent">
            <div>
              <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              {" "}
              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
            <div>
              {" "}
              <div>
                <DiWindows
                  size={60}
                  color="var(--yellow-theme-main-color)"
                />
              </div>
            </div>
            <div>
              {" "}
              <div>
                <DiLinux size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
            <div>
              {" "}
              <div>
                <DiWebplatform
                  size={60}
                  color="var(--yellow-theme-main-color)"
                />
              </div>
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;



