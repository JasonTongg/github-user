import React from 'react';
import {Container} from './Style';
import {useAuth0} from '@auth0/auth0-react';

export default function Index() {
  const {isAuthenticated, loginWithRedirect, logout, user, isLoading} =
    useAuth0();
  let isUser = isAuthenticated && user;

  if (!isLoading) {
    return (
      <Container>
        {isUser && user.picture && <img src={user.picture} alt={user.name} />}
        {isUser && user.picture && (
          <p>
            Welcome, <span>{user.name}</span>
          </p>
        )}

        {isUser && user.picture ? (
          <button onClick={() => logout({returnTo: window.location.origin})}>
            Logout
          </button>
        ) : (
          <button onClick={loginWithRedirect}>Login</button>
        )}
      </Container>
    );
  } else {
    return null;
  }
}
