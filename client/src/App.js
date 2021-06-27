import React, { useEffect, useState } from "react";

const App = () => {
    const [celestialData, setCelestialData] = useState();

    const [server] = useState({ SERVER_HOST: "localhost", SERVER_PORT: 3001 });

    useEffect(() => {
        const GetCelestialData = async () => {
            try {
                const res = await fetch(
                    `http://${server.SERVER_HOST}:${server.SERVER_PORT}`
                );
                const json = await res.json();
                await setCelestialData(json);
            } catch (e) {
                console.log(e);
            }
        };
        GetCelestialData();
    }, [setCelestialData]);
    return (
        <div>
            {celestialData !== undefined ? (
                <ul>
                    {celestialData.map((object) => (
                        <li key={object.name}>{object.name}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default App;
