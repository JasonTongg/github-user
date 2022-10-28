import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: white;
  width: 100%;
  padding: 1.5rem;
  gap: 1rem;

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

  img {
    width: 80px;
    object-fit: cover;
    height: 80px;
    border-radius: 50%;
  }

  div {
    justify-self: left;

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
