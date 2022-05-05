import * as React from "react";
import "./Validation.ts";

export const AppContext = React.createContext(null);

export const AppProvider = (props: any) => {

  const [countryData, setCountryData] = React.useState({});
  const [weatherData, setWeatherData] = React.useState({});

  interface AppContext {
    country : String
    setCountry: String
    weather: String
    setWeather: String
  }

    return (AppContext.Provider value={{
      (country: countryData,
      setCountry: setCountryData,
      weather: weatherData,
      setWeather: setWeatherData)
    }}
      {props.children}
    </AppContext.Provider>
    );
}