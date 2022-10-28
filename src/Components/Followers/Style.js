import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: white;
  padding: 4rem 3rem 1rem 3rem;
  height: 278px;
  overflow-y: scroll;
  position: relative;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  &:before {
    content: 'Followers';
    box-sizing: border-box;
    text-align: center;
    padding: 10px 20px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #2caeba;
    color: white;
    font-size: 1.2rem;
  }
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  align-items: center;
  gap: 1rem;

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
  }

  div {
    p {
      font-weight: bold;
      font-size: 1rem;
    }

    a {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;
