import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 1rem;
  gap: 1.5rem;
  background-color: white;

  img {
    width: 50px;
    object-fit: cover;
    height: 50px;
    border-radius: 50%;
  }

  p {
    font-size: 1.2rem;

    span {
      font-weight: bold;
    }
  }

  button {
    border: none;
    outline: none;
    background: none;
    font-size: 1.3rem;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
