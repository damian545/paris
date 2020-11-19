import React from "react";
import { Switch, Route } from "react-router-dom";

import Landingpage from "./landingpage";
import Cute from "./cute";
import Aboutme from "./aboutme";
import Contact from "./contact";
import Resume from "./resume";



const Main = () => (
<Switch>
    <Route exact path="/" component={Landingpage} />
    <Route  path="/cute" component={Cute} />
    <Route  path="/aboutme" component={Aboutme} />
    <Route  path="/contact" component={Contact} />
    <Route  path="/resume" component={Resume} />    
</Switch>
)

export default Main;