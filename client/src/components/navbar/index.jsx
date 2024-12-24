import React, { useState } from "react";
import "./styles.scss";
import { FaBars, FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";

const data = [
  { label: "Home", to: "/" },
  { label: "Skills", to: "/skills" },
  { label: "Resume", to: "/resume" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

   // Function to close the menu when a link is clicked
   const closeMenu = () => {
    setToggleIcon(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to={"/"} className="navbar__container__logo">
          <FaReact size={30} />
        </Link>
        <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
          {data.map((item, key) => (
            <li className="navbar__container__menu__item" key={key}>
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

