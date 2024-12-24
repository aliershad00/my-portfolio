import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

const Home = () => {
  const navigate = useNavigate(); // useNavigate to navigate another page

  //method for handel  Hire Me button
  const handleNavigatContactMePage = () => {
    navigate("/contact"); //calling the useNavigate method or state which are store in the navigate const.
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Ershad
          <br />
          Web Developer!!!
        </h1>
      </div>
      <Animate 
      play // boolean , animated or not, difault is true
      duration={1.5} // duration of the animation
      delay={1}//how much dely to animate
      start={{
        transform : 'translateY(550px)' // start from direction of the animation
      }}
      end={{
        transform : 'translatex(0px)' //stop where direction of the animation
      }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigatContactMePage}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
