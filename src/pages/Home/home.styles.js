import styled from "styled-components";

export const LoginForm = styled.div`
  background-color: #0f0d6078;
  padding: 10%;
  border-radius: 15px;

  .toast-message {
    font-size: 16px;
    color: #ff0000;

    svg {
      filter: inherit;
    }

    button {
      color: #ff0000;
      opacity: 1;
    }
  }
`;

export const InputFieldWrapper = styled.div`
  margin-bottom: 10px;
  input {
    border-radius: 5px;
    width: -webkit-fill-available;
    height: 50px;
    font-size: 18px;
    padding-left: 10px;

    ::-webkit-input-placeholder {
      margin-left: 2px;
    }

    @media (max-width: 767px) {
      font-size: 12px;
      height: 35px;
      height: 44px;
    }
  }
`;

export const Button = styled.button`
  background-color: #000000cc;
  height: 50px;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: -webkit-fill-available;
  margin-top: 50px;

  &:hover {
    background-color: #00000070;
  }

  &:focus {
    outline: none;
  }
`;