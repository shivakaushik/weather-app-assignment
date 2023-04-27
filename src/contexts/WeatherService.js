import { weatherData } from "../constants/WeatherJson";

export const fetchFilteredData = (city) => {
  let filteredData = [];

  if (city) {
    filteredData = weatherData.filter((data) => data.location.name === city);
  }

  return filteredData[0];
};


//Weather stack api ----------------------------------------------->
// const ACCESS_KEY = "67bd2816b71d3a60c3d80bf96f6d90c0";

// export const fetchWeatherData = async (city) => {
//   let weatherObject = {}
//   let filteredData = []
//   const url = `https://api.weatherstack.com/forecast?access_key=${ACCESS_KEY}&query=${city.name}`;
//   const response = await fetch(url, {
//     referrerPolicy: "unsafe-url",
//   });
// }
