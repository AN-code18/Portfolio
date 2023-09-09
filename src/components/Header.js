import React, { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-scroll";
import { FaUserTie } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { RiAppsLine } from "react-icons/ri";
import { IoMdContact, IoIosApps } from "react-icons/io";
import { GiGraduateCap, GiSkills } from "react-icons/gi";

function Header() {
  const [Toggle, showMenu] = useState(false);

  const LinkArray = [
    {
      id: 1,
      title: "About",
      link: "about",
      icon: <FaUserTie size={26} />,
    },
    {
      id: 2,
      title: "Skills",
      link: "skills",
      icon: <GiSkills size={26}/>,
    },

    {
      id: 3,
      title: "Projects",
      link: "projects",
      icon: <IoIosApps size={26}/>,
    },

    {
      id: 4,
      title: "Education",
      link: "education",
      icon: <GiGraduateCap size={26}/>,
    },

    {
      id: 5,
      title: "Contact",
      link: "contact",
      icon: <IoMdContact size={26}/>,
    },
  ];
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="my-name">
          <h1 className="nav-logo">Anisha</h1>
        </div>

        <div className={Toggle ? "nav-menu show-menu " : "nav-menu"}>
          <ul className="nav-list">
            {LinkArray.map(({ id, link, title, icon }) => (
              <li key={id} className="nav-items">
                <Link
                  to={link}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                >
                  <span className="nav-icon">{icon}</span>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          {/*for mobile view icon */}
          <span className="nav-close" onClick={() => showMenu(!Toggle)}>
            <FaTimes />
          </span>
        </div>
        <div className="nav-toggle " onClick={() => showMenu(!Toggle)}>
          <span className="nav-open">
            {" "}
            <RiAppsLine />
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
