import React, { useEffect, useState } from "react";
import { projects, projectsNav } from "../data.js";
import "../styles/Projects.css";
import ProjectItems from "./ProjectItems.js";
import '../styles/Card.css';

function Portfolio() {
  const [item, setItem] = useState({ name: "All" });
  const [portfolio, setPortfolio] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "All") {
      setPortfolio(projects);
    } else {
      const newProjects = projects.filter((project) => {
        return project.category === item.name;
      });
     setPortfolio(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    console.log(e);
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div>
      <div className="work-filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active ===index? 'active-work': 'work-item'}`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work-container">
        {portfolio.map((item) => {
          return <ProjectItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default Portfolio;
