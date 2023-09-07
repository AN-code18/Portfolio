import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const LinkArray = [
    {
      id: 1,
      title: "About",
      link: "about",
    },
    {
      id: 2,
      title: "Skills",
      link: "skills",
    },

    {
      id: 3,
      title: "Projects",
      link: "projects",
    },

    {
      id: 4,
      title: "Contact",
      link: "contact",
    },
  ];
  return (
    <nav className="nav-bar">
      <div>
        <h1>Anisha</h1>
      </div>

      <ul className="menu-list">
        {LinkArray.map(({ id, link, title }) => (
          <li key={id} className="list-items">
            <Link
              to={link}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="list"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mobile-icons" onClick={() => setNav(!nav)}>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="mobile-list">
          {LinkArray.map(({ id, link,title }) => (
            <li key={id} className="mobile-list-items">
              <Link
                to={link}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="list"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
