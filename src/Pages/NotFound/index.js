import React from 'react';
import {Container} from './style';
import notfoundImage from '../../Assets/notfound.jpg';
import {useNavigate} from 'react-router';

export default function NotFound() {
  let navigate = useNavigate();
  return (
    <Container>
      <img src={notfoundImage} alt="notfound" />
      <button onClick={() => navigate('/')}>Back to Dashboard</button>
    </Container>
  );
}
