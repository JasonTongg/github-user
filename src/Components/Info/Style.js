import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  gap: 2rem;
  padding-block: 2rem;
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  background-color: white;
  padding: 0.5rem;

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-self: left;

    h2 {
      font-size: 1.8rem;
    }

    & > * {
      margin: 0;
    }
  }
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  svg {
    font-size: 1.5rem;
  }

  &.pink {
    color: #ff4ded;
    background: #ffdbfc;
  }

  &.purple {
    background: #ffdbfc;
    color: #b324ff;
  }

  &.yellow {
    background: #ffefb0;
    color: #ffc800;
  }
  &.blue {
    background: #bffffd;
    color: #00b7ff;
  }
`;
