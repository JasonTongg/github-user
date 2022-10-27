import React from 'react';
import Profile from '../../Assets/TempProfile.jpg';
import {Container} from './Style';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';

export default function Index() {
  let userData = useSelector((state) => state.items.list);

  if (userData) {
    return (
      <Container>
        <img src={userData.avatar_url} alt="Profile" />
        <p>
          Welcome, <span>{userData.login}</span>
        </p>
        <button>Logout</button>
      </Container>
    );
  } else {
    return null;
  }
}
