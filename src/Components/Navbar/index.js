import React from 'react';
import Profile from '../../Assets/TempProfile.jpg';
import {Container} from './Style';

export default function Index() {
  return (
    <Container>
      <img src={Profile} alt="Profile" />
      <p>
        Welcome, <span>Name</span>
      </p>
      <button>Logout</button>
    </Container>
  );
}
