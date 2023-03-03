import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: white;
  width: calc(100vw - 24rem);
  padding: 1.5rem;
  gap: 1rem;

  @media only screen and (max-width: 1000px) {
    width: calc(100vw - 16rem);
  }
  @media only screen and (max-width: 720px) {
    width: calc(100vw - 12rem);
  }
  @media only screen and (max-width: 600px) {
    width: calc(100vw - 8rem);
  }
  @media only screen and (max-width: 480px) {
    width: calc(100vw - 4rem);
  }

  .bio {
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const Profile = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  align-items: center;
  justify-items: center;
  width: 100%;
  gap: 1rem;

  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }

  img {
    width: 80px;
    object-fit: cover;
    height: 80px;
    border-radius: 50%;
  }

  div {
    justify-self: left;

    @media only screen and (max-width: 550px) {
      justify-self: center;
      text-align: center;
    }

    & > *:not(:first-child) {
      margin-top: 5px;
    }
  }

  a {
    text-decoration: none;
    border: 1px solid #2caeba;
    color: #2caeba;
    font-size: 1.2rem;
    padding: 0.5rem 0.7rem;
    border-radius: 100px;
    line-height: 20px;
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.7);
  }
`;
