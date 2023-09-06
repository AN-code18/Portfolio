import { PiTelegramLogoBold } from "react-icons/pi";
import { Bio } from "../data.js";
import "../styles/home.css";
import Social from "./Social.js";
//import AboutImg from "../utils/AboutImg.jpg";
import shakeHand from "../utils/cute-wave.gif";

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-content">
          <div className="home-img"></div>
          {/** Data */}
          <div className="home-data">
            <span className="wave-hand">
              <h1 className="home-title">
                {Bio.name}
                <img src={shakeHand} alt="hi" className="hello-icon" />
              </h1>
            </span>
            <h3 className="home-subtitle">{Bio.roles}</h3>
            <p className="home-desc">{Bio.desc}</p>
            <a href="">
              <button className="hello-btn">
                Say Hello
                <span className="msg-icon">
                  <PiTelegramLogoBold />
                </span>
              </button>
            </a>
          </div>

        </div>
          <div className="social-container">
         { /*<Social />*/}
        </div>
        
      </div>
    </section>
  );
};

export default Home;
