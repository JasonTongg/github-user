import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f1f5f8;
  width: 100vw;
  min-height: 100vh;
`;

export const Content = styled.div`
  padding: 6rem 12rem;
`;

export const UserInfoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  align-items: center;
  gap: 2rem;
`;
