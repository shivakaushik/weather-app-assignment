import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 8%;
  margin-top: 4%;

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Title = styled.h2`
  margin-top: 10%;

  @media (max-width: 767px) {
    margin-top: 50%;
  }
`;
