import "../index.css";

const PlanetCard = (planet) => {
    const imgAltText = `Picture of the planet ${planet.planet.name}.`;
    return (
        <div className="PlanetCard">
            <h2>{planet.planet.name}</h2>
            <img
                className="PlanetImage"
                src={planet.planet.picture}
                alt={imgAltText}
            />
            <p>Planet Age: {planet.planet.age}</p>
            <p>Planet Mass: {planet.planet.solarMass}</p>
        </div>
    );
};

export default PlanetCard;
