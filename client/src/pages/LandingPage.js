import "../styles.css";
import PlanetGraphic from "../assets/planet.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="LandingPage">
            <div className="LandingPageCol">
                <h1>The Solar System</h1>
                <h2>
                    This app will give you the chance to explore the most
                    well-known celestial objects in our solar system. Click
                    below to explore!
                </h2>
                <Link to="/planets">
                    <button type="button">See The Planets</button>
                </Link>
            </div>
            <div className="LandingPageCol">
                <img
                    src={PlanetGraphic}
                    alt="Simple graphic of a planet with ring"
                />
            </div>
        </div>
    );
};

export default LandingPage;
