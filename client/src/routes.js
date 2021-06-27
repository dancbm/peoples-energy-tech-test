import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PlanetGalleryPage from "./pages/PlanetGalleryPage";

const Routes = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/planets" component={PlanetGalleryPage} />
                {/* <Route exact path="/planets/:id" component={PlanetPage} /> */}
                {/* <Route component={ErrorPage} /> */}
            </Switch>
        </main>
    );
};

export default Routes;
