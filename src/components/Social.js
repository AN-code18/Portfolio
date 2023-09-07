import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "../styles/social.css";

function Social() {
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
  ];

  return (
    <div className="home-social">
      <ul className="home-social-icon">
        {SocialLinksArray.map(({ id, child, href }) => (
          <li key={id} className="home-social-icon">
            <a href={href} className="" target="_blank" rel="noreferrer">
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Social;
