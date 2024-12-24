import React, { useState } from "react";
import "./styles.scss";
import PageHeade from "../../components/pageHeaderContent";
import { CgWebsite } from "react-icons/cg";
import imaggeOne from "../../images/image1.png";
import imaggeTwo from "../../images/image2.png";
import imaggeThree from "../../images/image3.png";
import imaggeFour from "../../images/image4.jpg";
import imaggeFive from "../../images/image5.jpg";
import "./styles.scss"

const portfolioData = [
  {
    id: 2,
    name: "My Portfolio",
    image: imaggeOne,
    link : 'https://my-portfolio-t0d5.onrender.com',
  },
  {
    id: 2,
    name: "Restorant Management",
    image: imaggeTwo,
    link : 'https://resto-management-cgbx.onrender.com/',
  },
  {
    id: 3,
    name: "RealTime Chat App",
    image: imaggeThree,
    link : 'https://chat-application-mxgq.onrender.com/email',
  },
  {
    id: 3,
    name: "Project 4 name",
    image: imaggeFour,
    link : '',
  },
  {
    id: 2,
    name: "Project 5 name",
    image: imaggeFive,
    link : '',
  },
];

const filterData = [
  {
    filterId: 1,
    lable: "All",
  },
  {
    filterId: 2,
    lable: "Developement",
  },
  {
    filterId: 3,
    lable: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue , setFilteredvalue] = useState(1)
  const [hoveredValue , setHoveredvalue] = useState(null)

  function handleFilder(currentId){
    setFilteredvalue(currentId)
  };
  
  function handleHover (index){
    setHoveredvalue(index)
  }
  
  

  const filteredItems = filteredvalue === 1 ? portfolioData : portfolioData.filter(item=>item.id === filteredvalue)

  

  return (

    <section id="portfolio" className="portfolio">
      <PageHeade HeaderText={"My Portfolio"} icon={<CgWebsite size={30} />} />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li className={item.filterId === filteredvalue ? 'active' : ''} onClick={()=>handleFilder(item.filterId)} key={item.filterId}>{item.lable}</li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {
            filteredItems.map((item,index) => (
              <div className="portfolio__content__cards__item" key={`cardItem${item.name.trim()}`} onMouseEnter={()=>handleHover(index)} onMouseLeave={()=>handleHover(null)}
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                  <a href="">
                    <img src={item.image} alt="dummy data" />
                  </a>
                </div>
                <div className="overlay">
                  {
                    index === hoveredValue && (
                      <div>
                        <p>{item.name}</p>
                        <button onClick={() => window.open(item.link, "_blank")}>Visit</button>
                      </div>
                    )
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
