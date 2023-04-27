import { useEffect, useState } from "react";

import weatherIcon from "../../assets/images/weather.png";
import { fetchFilteredData } from "../../contexts/WeatherService";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import NightlightIcon from "@mui/icons-material/Nightlight";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import {
  AstroStats,
  Card,
  CurrentState,
  IconWrapper,
  Stats,
  SubHeading,
  Wrap,
} from "./weatherCard.styles";

const WeatherCard = ({ city }) => {
  const [cityWeather, setCityWeather] = useState();
  const [location, setLocation] = useState();

  const { name } = city;

  const today = "2023-04-25";

  useEffect(() => {
    const data = fetchFilteredData(name);
    setCityWeather(data);
  }, [name]);

  useEffect(() => {
    if (cityWeather) {
      setLocation(cityWeather.location);
    }
  }, [cityWeather]);

  return (
    cityWeather && (
      <Card>
        {location && (
          <p>
            {(location.name || name) + ", " + location.region + ", " + location.country}
          </p>
        )}
        <Wrap>
          <IconWrapper>
            <img src={weatherIcon} />
            <span>{cityWeather.current.weather_descriptions[0]}</span>
          </IconWrapper>
          <h2>{cityWeather.current.temperature}°c</h2>
          <Stats style={{}}>
            <span>Wind: {cityWeather.current.wind_speed} kmph</span>
            <span>Precip: {cityWeather.current.precip} mm</span>
            <span>Pressure: {cityWeather.current.pressure} mb</span>
          </Stats>
        </Wrap>
        <SubHeading style={{ margin: "20px 0px" }}>Today's Astro:</SubHeading>
        <AstroStats>
          <CurrentState>
            <span>Moon Phase</span>
            <NightlightIcon fontSize="large" sx={{ color: "goldenrod" }} />
            <span>{cityWeather.forecast[today]?.astro.moon_phase}</span>
          </CurrentState>
          <CurrentState>
            <span>Sunrise</span>
            <WbSunnyIcon fontSize="large" sx={{ color: "goldenrod" }} />
            <span>{cityWeather.forecast[today]?.astro.sunrise}</span>
          </CurrentState>
          <CurrentState>
            <span>Sunset</span>
            <WbTwilightIcon fontSize="large" sx={{ color: "goldenrod" }} />
            <span>{cityWeather.forecast[today]?.astro.sunset}</span>
          </CurrentState>
          <CurrentState>
            <span>Moonrise</span>
            <DarkModeIcon fontSize="large" sx={{ color: "goldenrod" }} />
            <span>{cityWeather.forecast[today]?.astro.moonrise}</span>
          </CurrentState>
          <CurrentState>
            <span>Moonset</span>
            <NightlightRoundIcon fontSize="large" sx={{ color: "goldenrod" }} />
            <span>{cityWeather.forecast[today]?.astro.moonset}</span>
          </CurrentState>
        </AstroStats>
      </Card>
    )
  );
};

export default WeatherCard;
