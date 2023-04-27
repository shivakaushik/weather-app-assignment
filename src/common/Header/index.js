import { useNavigate } from "react-router-dom";

import Avatar from "../../assets/svg/avatar.svg";
import { useContext } from "react";
import WeatherContext from "../../contexts/WeatherContext";
import { HeaderContainer, ProfileWrapper, ToggleButton } from "./header.styles";

const Header = ({ currentPage }) => {
  const navigate = useNavigate();
  const { userData } = useContext(WeatherContext);

  const handleNavigation = () => {
    currentPage === "dashboard"
      ? navigate("/listPage")
      : navigate("/dashboard");
  };

  return (
    <HeaderContainer>
      <ToggleButton onClick={handleNavigation}>
        {currentPage === "dashboard" ? "Go to list" : "Go to Dashboard"}
      </ToggleButton>
      <ProfileWrapper onClick={() => navigate("/")}>
        <img src={Avatar} alt="avatar" />
        <p>{userData.username}</p>
      </ProfileWrapper>
    </HeaderContainer>
  );
};

export default Header;
