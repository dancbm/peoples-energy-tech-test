import { useState, useEffect } from "react";
import PlanetCard from "../components/planetCard";
import Loading from "../components/loading";

const PlanetGalleryPage = () => {
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
        <div className="PlanetGallery">
            <div className="PlanetGalleryContainer">
                <h1>Planet Gallery</h1>
                {loading ? (
                    <Loading />
                ) : error ? (
                    <p>
                        There was an error retrieving data, please try again
                        soon
                    </p>
                ) : (
                    <ul className="PlanetGalleryItems">
                        {celestialData.map((planet) => (
                            <li key={planet.name}>
                                <PlanetCard planet={planet} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default PlanetGalleryPage;
