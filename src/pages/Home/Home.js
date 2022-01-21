import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-description">
        <h2>
          Transactions documentations made <i>EASY!</i>
        </h2>
        <h4>
          Millions of developers and companies build, ship, and maintain their
          software on GitHub—the largest and most advanced development platform
          in the world.
        </h4>
        <div className="home-actions">
          <Link to="/signup">
            <button className="btn primary">Sign Up</button>
          </Link>
          <Link to="/signin">
            <button className="btn secondary">Sign In</button>
          </Link>
        </div>
      </div>
      <div className="home-image">
        <img src={require("../../Data/Images/login.png")} alt="not found" />
      </div>
    </div>
  );
};

export default Home;
