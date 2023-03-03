import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f1f5f8;
  width: 100vw;
  min-height: 100vh;
`;

export const Content = styled.div`
  padding: 6rem 12rem;

  @media only screen and (max-width: 1000px) {
    padding: 6rem 8rem;
  }
  @media only screen and (max-width: 720px) {
    padding: 5rem 6rem;
  }
  @media only screen and (max-width: 600px) {
    padding: 4rem;
  }
  @media only screen and (max-width: 480px) {
    padding: 2rem;
  }
`;

export const UserInfoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  align-items: center;
  gap: 2rem;
  box-sizing: border-box;

  @media only screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;
