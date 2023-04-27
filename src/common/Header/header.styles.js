import styled from "styled-components";

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: #000000;
  padding: 17px 60px;

  @media (max-width: 767px) {
  }
`;

export const ProfileWrapper = styled.div`
  img {
    width: 50px;
    height: 50px;
    cursor: pointer;
    align-self: center;
    filter: invert(1);
  }
  p {
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    margin: 5px;
  }

  @media (max-width: 767px) {
  }
`;

export const ToggleButton = styled.button`
  margin-right: auto;
  height: 63px;
  width: 175px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  background-color: #e0e0e0;
  border: 2px solid gray;
  color: black;
  border-radius: 15px;

  &:hover {
    backround-color: #5a717c;
  }

  @media (max-width: 767px) {
    font-size: 13px;
    height: 50px;
    width: 85px;
  }
`;
