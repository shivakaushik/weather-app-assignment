import Header from "../../common/Header";
import { useContext } from "react";
import WeatherContext from "../../contexts/WeatherContext";
import { fetchFilteredData } from "../../contexts/WeatherService";
import { ActionButton, TableWrapper } from "./listPage.styles";
import { Title } from "../Dashboard/dashboard.styles";

const ListPage = () => {
  const { userData, setUserData } = useContext(WeatherContext);
  const cities = userData.cities;

  const handleCardDisable = (city) => {

    const { name } = city;

    const index = cities.findIndex((city) => city.name === name);
    if (index === -1) {
      return;
    }

    const newCities = [...cities];
    newCities[index] = {
      ...newCities[index],
      enable: !newCities[index].enable,
    };

    setUserData({ ...userData, cities: newCities });
  };

  return (
    <>
      <Header currentPage="list" />
      <Title>Cities Weather Data</Title>
      <TableWrapper>
        <table>
          <thead>
            <tr>
              <th>City Name</th>
              <th>State Name</th>
              <th>Wind Speed</th>
              <th>Pressure</th>
              <th>Precip Value</th>
              <th>Cloud Status</th>
              <th>Current Temprature</th>
              <th>Action</th>
            </tr>
          </thead>

          {cities.map((city, index) => {
            const { current, location } = fetchFilteredData(city.name);

            return (
              <tbody>
                <tr key={index}>
                  <td>{location.name}</td>
                  <td>{location.region}</td>
                  <td>{current.wind_speed}</td>
                  <td>{current.pressure}</td>
                  <td>{current.precip}</td>
                  <td>{current.weather_descriptions[0]}</td>
                  <td>{current.temperature}</td>
                  <td>
                    <ActionButton
                      style={{
                        backgroundColor: city.enable ? "#d19525" : "#a99073",
                      }}
                      onClick={() => handleCardDisable(city)}
                    >
                      {city.enable ? "Enabled" : "Disabled"}
                    </ActionButton>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </TableWrapper>
    </>
  );
};

export default ListPage;
