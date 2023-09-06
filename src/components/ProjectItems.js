import React from "react";
import { FaRegHandPointRight } from "react-icons/fa";
import "../styles/Projects.css";

function ProjectItems({ item }) {
  return (
    <div className="card" key={item.id}>
      <img src={item.image} alt="" className="card-img" />
      <h3 className="card-title">{item.title}</h3>
      <a href={item.github} className="card-button">
        Demo
        <span className="card-icon">
          <FaRegHandPointRight />
        </span>
      </a>
    </div>
  );
}

export default ProjectItems;