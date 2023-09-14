import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Roboto', sans-serif;

  & h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  & img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  & p {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  & button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
  font-size: 1rem;
`;
