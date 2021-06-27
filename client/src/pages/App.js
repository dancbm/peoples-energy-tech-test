import React, { useEffect, useState } from "react";
import PlanetCard from "../components/planetCard";
import "../index.css";

const App = () => {
    // TODO: Pull loading state into context/redux
    const [loading, setLoading] = useState(true);
    // TODO: Pull error state into context/redux
    const [error, setError] = useState();
    // TODO: Store celestial object data in redux store
    const [celestialData, setCelestialData] = useState();

    // TODO: Store environment variables in config/redux?
    const [serverHost] = useState("localhost");
    const [serverPort] = useState(3001);

    useEffect(() => {
        // TODO: Pull GetCelestialData into custom hook
        const GetCelestialData = async () => {
            try {
                const res = await fetch(`http://${serverHost}:${serverPort}`);
                const json = await res.json();
                await setCelestialData(json);
                setLoading(false);
                console.log("Check for recurring calls");
            } catch (e) {
                await setError(e.toString());
                setLoading(false);
                console.log("Check for recurring calls");
            }
        };
        GetCelestialData();
    }, [setCelestialData, serverHost, serverPort]);

    return (
        <div>
            {loading ? (
                <p>Forming the solar system...</p>
            ) : error ? (
                <p>
                    Oops! There was an error.
                    <br />
                    Please try again later.
                </p>
            ) : (
                <ul className="PlanetCardContainer">
                    {celestialData.map((object) => (
                        <li key={object.name}>
                            <PlanetCard planet={object} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default App;
