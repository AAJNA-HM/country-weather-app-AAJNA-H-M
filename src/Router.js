import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SearchCountries from "./Deatils/SearchCountries";
import CountryDetails from "./Deatils/CountryDetails";
import WeatherDetails from "./Deatils/WeatherDetails";

function Router(){

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SearchCountries} />
        <Route exact path="/country" component={CountryDetails} />
        <Route exact path="/weather" component={WeatherDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;