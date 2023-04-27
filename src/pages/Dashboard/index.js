import { useContext, useEffect } from "react";
import Header from "../../common/Header";
import WeatherCard from "../../common/WeatherCard";
import WeatherContext from "../../contexts/WeatherContext";
import { CardsContainer, Title } from "./dashboard.styles";

const Dashboard = () => {
  const { userData } = useContext(WeatherContext);

  return (
    <>
      <Header currentPage="dashboard" />
      <Title>Dashboard</Title>
      <CardsContainer>
        {userData.cities.map((data) => {
          return data.enable && <WeatherCard city={data} />;
        })}
      </CardsContainer>
    </>
  );
};

export default Dashboard;
