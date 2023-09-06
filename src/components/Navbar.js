import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const LinkArray = [
    {
      id: 1,
      link: "About",
    },
    {
      id: 2,
      link: "skills",
    },
    {
      id: 3,
      link: "Experience",
    },
    {
      id: 4,
      link: "Projects",
    },
    {
      id: 5,
      link: "Education",
    },
    {
      id: 6,
      link: "Contact",
    },
  ];
  return (
    <nav className="nav-bar">
      <div>
        <h1>Anisha</h1>
      </div>

      <ul className="menu-list">
        {LinkArray.map(({ id, link }) => (
          <li key={id} className="list-items">
            {link}
          </li>
        ))}
      </ul>

      <div className="icons" onClick={() => setNav(!nav)}>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {/**if nav == true then show it */}
      {nav && (
        <ul className="mobile-list">
          {LinkArray.map(({ id, link }) => (
            <li key={id} className="mobile-list-items">
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
