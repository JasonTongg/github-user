import React from 'react';
import DashboardImage from '../../Assets/Dashboard.jpg';
import {Container} from './style';

export default function Login() {
  return (
    <Container>
      <img src={DashboardImage} alt="dahsboard" />
      <button>Login</button>
    </Container>
  );
}
