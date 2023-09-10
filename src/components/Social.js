import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {IoIosArrowDropdown} from "react-icons/io";
import "../styles/social.css";
import { HiOutlineMail } from "react-icons/hi";

function Social() {

  
  const gotToBottom = () => {
    window.scrollTo(3000, 6000);
  };

  const SocialLinksArray = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/anisha-kumari-9051a01b5/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/AN-code18",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:anishakumari200023@gmail.com",
    },
    {
      id: 4,
      child: (
        <span onClick={gotToBottom} className="down-arrow" >
          <IoIosArrowDropdown size={30} />
        </span>
      ),
      
    },
  ];

  return (
    <div className="social">
      <div className="home-social">
        <div>
          <ul>
            {SocialLinksArray.map(({ id, child, href }) => (
              <li key={id} className="home-social-icon">
                <a
                  href={href}
                  className="child-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="child">{child} </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Social;
