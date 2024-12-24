import React, { useState } from "react";
import {  toast } from 'react-toastify';
import axios from "axios"

import PageHeade from "../../components/pageHeaderContent";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; // Import icons
import "./styles.scss";
import { Animate } from "react-simple-animate";
import naukri from "../../images/naukri.png"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  //handle submit button
  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      if(!name || !email || !msg){
        toast.error("Please Provide all fields")
      }
      const res = await axios.post("/api/v1/portfolio/sendEmail",{name,email,msg})
      //validation success
      if(res.data.success){
        toast.success(res.data.message)
        setName("")
        setEmail("")
        setMsg("")
      }else{
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <section id="contact" className="contact">
      <PageHeade HeaderText="My Contact" icon={<MdEmail size={50} />} />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type={"text"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name" className="nameLabel">
                  Enter Your Name
                </label>
              </div>

              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"text"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email" className="emailLabel">
                  Enter Your Email
                </label>
              </div>

              <div>
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  type={"text"}
                  rows={5}
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
                <label htmlFor="description" className="descriptionLabel">
                  Enter Your Message
                </label>
              </div>
            </div>
            <button onClick={handleSubmit}>SEND MESSAGE </button>
          </div>
        </Animate>
      </div>
      {/* Social Media Links Section */}
      <div className="contact__socials">
        <h4>Follow Me:</h4>
        <div className="contact__socials__icons">
          <a href="https://www.linkedin.com/in/ershad-ali-317618187" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/aliershad00" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noopener noreferrer">
            <img
             src={naukri} alt="" style={{width:"30px",height:"auto"  }}  className="img-size"/>
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
