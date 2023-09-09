import { FaRegHandPeace } from "react-icons/fa";
import { Bio } from "../data.js";
import "../styles/home.css";
import Social from "./Social.js";
import shakeHand from "../utils/cute-wave.gif";

const Home = () => {
  return (
    <section id="home" className="home-section">
       <Social /> 
      <div className="home-container">
        <div className="home-content">
          <div className="home-img"></div>
          {/** Data */}
          <div className="home-data">
            <span className="wave-hand">
              <h2 className="home-title">
                {Bio.name}
                <img src={shakeHand} alt="hi" className="hello-icon" />
              </h2>
            </span>
            <h3 className="home-subtitle">{Bio.roles}</h3>
            <p className="home-desc">{Bio.desc}</p>
            <a href="">
              <button className="hello-btn">
                <span>Say Hello</span>
                <span className="msg-icon">
                  <FaRegHandPeace />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
