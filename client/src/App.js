import React, { useEffect, useState } from "react";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [celestialData, setCelestialData] = useState();

    const [serverHost] = useState("localhost");
    const [serverPort] = useState(3001);

    useEffect(() => {
        const GetCelestialData = async () => {
            try {
                const res = await fetch(`http://${serverHost}:${serverPort}`);
                const json = await res.json();
                await setCelestialData(json);
                setLoading(false);
                console.log("Check for recurring calls");
            } catch (e) {
                await setError(e);
                setLoading(false);
                console.log("Check for recurring calls");
            }
        };
        GetCelestialData();
    }, [setCelestialData, serverHost, serverPort]);

    return (
        <div>
            {loading ? (
                <p>Forming the solar system</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {celestialData.map((object) => (
                        <li key={object.name}>{object.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default App;
