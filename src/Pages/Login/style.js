import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100vw;
  height: 100vh;

  img {
    width: 500px;
  }

  button {
    background-color: #00dfc0;
    color: white;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;
