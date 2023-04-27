import styled from "styled-components";

export const Card = styled.div`
  background-color: #16394c;
  padding: 50px;
  border-radius: 10px;
  border: 4px solid #608094;
  width: auto;

  @media (max-width: 767px) {
    padding: 0px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5% 5%;

  h2 {
    font-size: 60px;
  }

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin: 10%;
    text-align: center;
    h2 {
      font-weight: 400;
      font-size: 30px;
      margin: 5%;
    }
  }
`;

export const IconWrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;

  img {
    height: 200px;
  }

  @media (max-width: 767px) {
    img {
      height: 70px;
    }
  }
`;

export const AstroStats = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 10%;
  }
`;

export const CurrentState = styled.div`
  padding: 0px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const SubHeading = styled.div`
  @media (max-width: 767px) {
    margin: 20px 0px;
    font-size: 25px;
    font-weight: 600;
    color: #d1c5c5;
  }
`;