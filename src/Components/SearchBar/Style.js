import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 3fr) minmax(300px, 1fr);
  width: 100%;
  gap: 1rem;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  form {
    display: grid;
    grid-template-columns: 20px 1fr 90px;
    background-color: white;
    align-items: center;
    padding: 0.5rem 1rem;
    gap: 1rem;

    @media only screen and (max-width: 400px) {
      grid-template-columns: 20px 1fr;
    }

    input {
      border: none;
      background: transparent;
      outline: none;
      font-size: 1.3rem;
      width: 100%;

      @media only screen and (max-width: 450px) {
        font-size: 1rem;
      }
    }

    svg {
      font-size: 1.2rem;
      color: rgba(0, 0, 0, 0.5);
    }

    button {
      width: 100%;
      padding: 0.5rem 0.8rem;
      color: white;
      font-weight: bold;
      background-color: #009dff;
      border: none;
      font-size: 1.1rem;
      border-radius: 7px;

      @media only screen and (max-width: 400px) {
        display: none;
      }
    }
  }

  p {
    font-size: 2rem;
    color: rgba(0, 0, 0, 0.5);
    margin: 0;
  }
`;
