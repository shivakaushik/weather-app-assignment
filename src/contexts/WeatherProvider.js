import React, { useState, useEffect } from "react";
import WeatherContext from "./WeatherContext";
import { initialValues } from "../constants/InitialValues";

const WeatherProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || {
      username: "",
      password: "",
      cities: initialValues,
    }
  );

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <WeatherContext.Provider value={{ userData, setUserData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
