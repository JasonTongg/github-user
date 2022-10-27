import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  width: 100%;
  gap: 1rem;

  form {
    display: grid;
    grid-template-columns: 20px auto 90px;
    background-color: white;
    align-items: center;
    padding: 0.5rem 1rem;
    gap: 1rem;

    input {
      border: none;
      background: transparent;
      outline: none;
      font-size: 1.3rem;
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
    }
  }

  p {
    font-size: 2rem;
    color: rgba(0, 0, 0, 0.5);
    margin: 0;
  }
`;
